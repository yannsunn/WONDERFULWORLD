import { NextRequest, NextResponse } from 'next/server';
import { generateImage } from '@/lib/openai';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import { env } from '@/lib/env';

const authToken = env.OPENAI_API_AUTH_TOKEN;

function authorize(request: NextRequest) {
  if (!authToken) {
    console.error('OPENAI_API_AUTH_TOKEN is not configured');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  const authHeader = request.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const providedToken = authHeader.slice(7).trim();
  if (providedToken !== authToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return null;
}

/**
 * OpenAI Image Generation API Route (DALL-E)
 *
 * POST /api/openai/image
 * Body: { prompt: string, size?: string, quality?: string }
 */
export async function POST(request: NextRequest) {
  try {
    const authResponse = authorize(request);
    if (authResponse) {
      return authResponse;
    }

    // レート制限: IPアドレスごとに1分間に3回まで（画像生成は高コスト）
    const ip = getClientIp(request);
    const rateLimitResult = rateLimit(`openai-image:${ip}`, {
      maxRequests: 3,
      windowMs: 60000 // 1分
    });

    if (!rateLimitResult.success) {
      const retryAfter = Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000);
      console.warn('Rate limit exceeded for OpenAI image generation:', ip);
      return NextResponse.json(
        {
          error: 'リクエストが多すぎます。しばらくしてから再度お試しください。',
          retryAfter
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(retryAfter),
            'X-RateLimit-Limit': '3',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.ceil(rateLimitResult.resetTime / 1000))
          }
        }
      );
    }

    const { prompt, size, quality } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const imageUrl = await generateImage(prompt, {
      size: size || '1024x1024',
      quality: quality || 'standard',
    });

    return NextResponse.json({
      success: true,
      imageUrl,
    });
  } catch (error) {
    console.error('OpenAI image generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}

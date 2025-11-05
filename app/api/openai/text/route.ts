import { NextRequest, NextResponse } from 'next/server';
import { generateText } from '@/lib/openai';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

/**
 * OpenAI Text Generation API Route
 *
 * POST /api/openai/text
 * Body: { prompt: string, model?: string, maxTokens?: number }
 */
export async function POST(request: NextRequest) {
  try {
    // レート制限: IPアドレスごとに1分間に10回まで
    const ip = getClientIp(request);
    const rateLimitResult = rateLimit(`openai-text:${ip}`, {
      maxRequests: 10,
      windowMs: 60000 // 1分
    });

    if (!rateLimitResult.success) {
      const retryAfter = Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000);
      console.warn('Rate limit exceeded for OpenAI text generation:', ip);
      return NextResponse.json(
        {
          error: 'リクエストが多すぎます。しばらくしてから再度お試しください。',
          retryAfter
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(retryAfter),
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.ceil(rateLimitResult.resetTime / 1000))
          }
        }
      );
    }

    const { prompt, model, maxTokens, temperature } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const text = await generateText(prompt, {
      model: model || 'gpt-3.5-turbo',
      maxTokens: maxTokens || 500,
      temperature: temperature || 0.7,
    });

    return NextResponse.json({
      success: true,
      text,
    });
  } catch (error) {
    console.error('OpenAI text generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate text' },
      { status: 500 }
    );
  }
}

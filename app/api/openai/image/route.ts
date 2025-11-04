import { NextRequest, NextResponse } from 'next/server';
import { generateImage } from '@/lib/openai';

/**
 * OpenAI Image Generation API Route (DALL-E)
 *
 * POST /api/openai/image
 * Body: { prompt: string, size?: string, quality?: string }
 */
export async function POST(request: NextRequest) {
  try {
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

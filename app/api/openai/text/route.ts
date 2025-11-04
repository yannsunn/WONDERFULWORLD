import { NextRequest, NextResponse } from 'next/server';
import { generateText } from '@/lib/openai';

/**
 * OpenAI Text Generation API Route
 *
 * POST /api/openai/text
 * Body: { prompt: string, model?: string, maxTokens?: number }
 */
export async function POST(request: NextRequest) {
  try {
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

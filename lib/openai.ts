/**
 * OpenAI Client Configuration
 *
 * Provides OpenAI client instance for various AI features:
 * - Text generation (GPT-4, GPT-3.5)
 * - Image generation (DALL-E)
 * - Audio transcription (Whisper)
 * - Text-to-speech
 */

import OpenAI from 'openai';
import { env, checkEnvVar } from '@/lib/env';

// OpenAI client initialization (lazy)
let openaiClient: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  if (!openaiClient) {
    if (!checkEnvVar('OPENAI_API_KEY')) {
      throw new Error('OPENAI_API_KEY is not defined in environment variables');
    }
    openaiClient = new OpenAI({
      apiKey: env.OPENAI_API_KEY,
    });
  }
  return openaiClient;
}

export const openai = getOpenAIClient;

/**
 * Text generation with GPT-4
 */
export async function generateText(prompt: string, options?: {
  model?: 'gpt-4' | 'gpt-3.5-turbo';
  maxTokens?: number;
  temperature?: number;
}) {
  const client = getOpenAIClient();
  const response = await client.chat.completions.create({
    model: options?.model || 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: options?.maxTokens || 500,
    temperature: options?.temperature || 0.7,
  });

  return response.choices[0].message.content;
}

/**
 * Image generation with DALL-E
 */
export async function generateImage(prompt: string, options?: {
  size?: '1024x1024' | '1792x1024' | '1024x1792';
  quality?: 'standard' | 'hd';
  n?: number;
}) {
  const client = getOpenAIClient();
  const response = await client.images.generate({
    model: 'dall-e-3',
    prompt,
    size: options?.size || '1024x1024',
    quality: options?.quality || 'standard',
    n: options?.n || 1,
  });

  if (!response.data || !response.data[0]?.url) {
    throw new Error('Failed to generate image');
  }

  return response.data[0].url;
}

/**
 * Audio transcription with Whisper
 */
export async function transcribeAudio(audioFile: File) {
  const client = getOpenAIClient();
  const response = await client.audio.transcriptions.create({
    file: audioFile,
    model: 'whisper-1',
  });

  return response.text;
}

/**
 * Text-to-speech
 */
export async function textToSpeech(text: string, options?: {
  voice?: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';
  model?: 'tts-1' | 'tts-1-hd';
}) {
  const client = getOpenAIClient();
  const response = await client.audio.speech.create({
    model: options?.model || 'tts-1',
    voice: options?.voice || 'alloy',
    input: text,
  });

  return response;
}

export default getOpenAIClient;

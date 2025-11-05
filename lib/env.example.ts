/**
 * Environment Variables Usage Examples
 *
 * このファイルは環境変数の使用方法を示すサンプルコードです
 */

import { env, checkEnvVar, checkRequiredEnvVars } from './env';

/**
 * Example 1: Basic usage
 * 基本的な使い方
 */
export function example1() {
  // Type-safe access to environment variables
  // 型安全な環境変数へのアクセス
  const apiKey = env.OPENAI_API_KEY; // string | undefined
  const nodeEnv = env.NODE_ENV; // 'development' | 'production' | 'test'

  console.log('API Key:', apiKey ? '***' : 'Not set');
  console.log('Node Environment:', nodeEnv);
}

/**
 * Example 2: Check if environment variable is set
 * 環境変数が設定されているかチェック
 */
export function example2() {
  if (checkEnvVar('OPENAI_API_KEY')) {
    console.log('OpenAI API Key is configured');
    // Use the API key safely
    const key = env.OPENAI_API_KEY!;
    // ... API calls
  } else {
    console.log('OpenAI API Key is not configured');
    // Handle missing API key
  }
}

/**
 * Example 3: Require specific environment variables
 * 特定の環境変数を必須にする
 */
export function example3() {
  try {
    // Check if required variables are set
    checkRequiredEnvVars(['OPENAI_API_KEY', 'GEMINI_API_KEY']);

    // If we reach here, all required variables are set
    console.log('All required environment variables are configured');

    // Use them safely
    const openaiKey = env.OPENAI_API_KEY!;
    const geminiKey = env.GEMINI_API_KEY!;

  } catch (error) {
    console.error('Missing required environment variables:', error);
    // Handle missing variables
  }
}

/**
 * Example 4: Conditional feature enablement
 * 機能の条件付き有効化
 */
export function example4() {
  const features = {
    openai: checkEnvVar('OPENAI_API_KEY'),
    gemini: checkEnvVar('GEMINI_API_KEY'),
    figma: checkEnvVar('FIGMA_ACCESS_TOKEN'),
    analytics: checkEnvVar('NEXT_PUBLIC_GA_ID'),
  };

  console.log('Available features:', features);

  return features;
}

/**
 * Example 5: Environment-specific behavior
 * 環境別の動作
 */
export function example5() {
  switch (env.NODE_ENV) {
    case 'development':
      console.log('Running in development mode');
      // Enable debug logging, hot reload, etc.
      break;

    case 'production':
      console.log('Running in production mode');
      // Enable analytics, error reporting, etc.
      break;

    case 'test':
      console.log('Running in test mode');
      // Use mock data, disable external calls, etc.
      break;
  }
}

/**
 * Example 6: Client-side environment variables
 * クライアントサイドの環境変数
 */
export function example6() {
  // Only NEXT_PUBLIC_* variables are available in the browser
  // NEXT_PUBLIC_* の変数のみブラウザで利用可能

  if (typeof window !== 'undefined') {
    // Client-side only
    const gaId = env.NEXT_PUBLIC_GA_ID;
    const siteUrl = env.NEXT_PUBLIC_SITE_URL;

    console.log('GA ID:', gaId);
    console.log('Site URL:', siteUrl);
  }
}

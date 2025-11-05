/**
 * Environment Variables Validation
 *
 * 環境変数の型安全性を保証し、実行時エラーを防ぐ
 */

import { z } from 'zod';

const envSchema = z.object({
  // Node environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

  // OpenAI API
  OPENAI_API_KEY: z.string().optional().transform(val => val || undefined),

  // Google Gemini API
  GEMINI_API_KEY: z.string().optional().transform(val => val || undefined),

  // Figma API
  FIGMA_ACCESS_TOKEN: z.string().optional().transform(val => val || undefined),
  FIGMA_FILE_KEY: z.string().optional().transform(val => val || undefined),

  // Google Analytics
  NEXT_PUBLIC_GA_ID: z.string().optional().transform(val => val || undefined),

  // Site URL
  NEXT_PUBLIC_SITE_URL: z.string().optional().transform(val => val || undefined),

  // Contact Email
  NEXT_PUBLIC_CONTACT_EMAIL: z.string().optional().transform(val => val || undefined),

  // Vercel Analytics
  NEXT_PUBLIC_VERCEL_ANALYTICS: z.string().optional().transform(val => val || undefined),
});

// 環境変数のパース（開発時のみ検証）
function parseEnv() {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:');
    console.error(parsed.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  }

  return parsed.data;
}

// 環境変数のエクスポート
export const env = parseEnv();

// 型定義のエクスポート
export type Env = z.infer<typeof envSchema>;

/**
 * 環境変数が設定されているかチェック
 */
export function checkEnvVar(key: keyof Env): boolean {
  return !!env[key];
}

/**
 * 必須の環境変数をチェック（本番環境用）
 */
export function checkRequiredEnvVars(keys: (keyof Env)[]): void {
  const missing = keys.filter(key => !env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }
}

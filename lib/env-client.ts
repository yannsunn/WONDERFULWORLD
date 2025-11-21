/**
 * Client-safe subset of environment variables.
 * Next.js replaces process.env.NODE_ENV at build time, so値漏洩の心配なく参照できます。
 */
export const clientEnv = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
} as const;

export type ClientEnv = typeof clientEnv;

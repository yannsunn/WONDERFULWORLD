/**
 * Simple in-memory rate limiting
 *
 * NOTE: This is a basic implementation suitable for single-instance deployments.
 * For production with multiple servers, consider using:
 * - @upstash/ratelimit with Redis (recommended)
 * - Vercel Edge Config
 * - Other distributed rate limiting solutions
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-memory storage for rate limit tracking
const rateLimitMap = new Map<string, RateLimitEntry>();

// Cleanup expired entries every hour to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  const keysToDelete: string[] = [];

  rateLimitMap.forEach((entry, key) => {
    if (entry.resetTime < now) {
      keysToDelete.push(key);
    }
  });

  keysToDelete.forEach(key => rateLimitMap.delete(key));
}, 60 * 60 * 1000);

export interface RateLimitConfig {
  maxRequests: number; // Maximum number of requests allowed
  windowMs: number;    // Time window in milliseconds
}

export interface RateLimitResult {
  success: boolean;    // Whether the request is allowed
  remaining: number;   // Number of remaining requests in the window
  resetTime: number;   // Timestamp when the limit resets
}

/**
 * Rate limit checker
 *
 * @param identifier - Unique identifier for the rate limit (e.g., IP address, user ID)
 * @param config - Rate limit configuration
 * @returns Result indicating if request is allowed
 *
 * @example
 * ```ts
 * const result = rateLimit('contact:192.168.1.1', {
 *   maxRequests: 5,
 *   windowMs: 60000 // 1 minute
 * });
 *
 * if (!result.success) {
 *   return new Response('Too Many Requests', { status: 429 });
 * }
 * ```
 */
export function rateLimit(
  identifier: string,
  config: RateLimitConfig = { maxRequests: 10, windowMs: 60000 }
): RateLimitResult {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  // If no entry exists or the window has expired, start a new window
  if (!entry || entry.resetTime < now) {
    const resetTime = now + config.windowMs;
    rateLimitMap.set(identifier, { count: 1, resetTime });
    return {
      success: true,
      remaining: config.maxRequests - 1,
      resetTime
    };
  }

  // If rate limit is exceeded, deny the request
  if (entry.count >= config.maxRequests) {
    return {
      success: false,
      remaining: 0,
      resetTime: entry.resetTime
    };
  }

  // Increment the counter and allow the request
  entry.count++;
  return {
    success: true,
    remaining: config.maxRequests - entry.count,
    resetTime: entry.resetTime
  };
}

/**
 * Get the client's IP address from a Next.js request
 *
 * @param request - Next.js request object
 * @returns IP address string
 */
export function getClientIp(request: Request): string {
  // Try to get IP from various headers (in order of reliability)
  const headers = request.headers;

  return (
    headers.get('x-real-ip') ||
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headers.get('cf-connecting-ip') || // Cloudflare
    headers.get('x-client-ip') ||
    '127.0.0.1' // Fallback for local development
  );
}

import { NextRequest, NextResponse } from 'next/server';

/**
 * Middleware for protecting API routes
 *
 * This middleware protects sensitive API routes that consume external API credits.
 * For OpenAI routes, it checks for an API authentication token.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect OpenAI API routes
  if (pathname.startsWith('/api/openai/')) {
    const authToken = request.headers.get('x-api-key') ||
                      request.headers.get('authorization')?.replace('Bearer ', '');

    const expectedToken = process.env.OPENAI_API_AUTH_TOKEN;

    // If auth token is configured in production, enforce it
    if (process.env.NODE_ENV === 'production' && expectedToken) {
      if (!authToken || authToken !== expectedToken) {
        return NextResponse.json(
          {
            error: 'Unauthorized',
            message: 'Valid API key required. Please provide x-api-key header.'
          },
          { status: 401 }
        );
      }
    } else if (!expectedToken) {
      // Log warning if no token is configured in production
      if (process.env.NODE_ENV === 'production') {
        console.warn('⚠️  OPENAI_API_AUTH_TOKEN not configured. OpenAI routes are unprotected!');
      }
    }
  }

  return NextResponse.next();
}

/**
 * Middleware configuration
 *
 * Apply middleware to API routes that need protection
 */
export const config = {
  matcher: [
    '/api/openai/:path*',
  ],
};

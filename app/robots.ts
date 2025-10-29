import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // AI crawlers optimization (LLMO)
      {
        userAgent: [
          'GPTBot',          // OpenAI
          'ChatGPT-User',    // ChatGPT
          'Claude-Web',      // Anthropic Claude
          'anthropic-ai',    // Anthropic
          'Googlebot',       // Google (Gemini)
          'Bingbot',         // Bing (Copilot)
          'PerplexityBot',   // Perplexity
        ],
        allow: '/',
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

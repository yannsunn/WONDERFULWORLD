import { MetadataRoute } from 'next';
import { getAllNews } from '@/lib/markdown';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // 全てのニュース記事を取得
  const allNews = getAllNews();

  // ニュース記事のsitemapエントリを動的に生成
  const newsEntries: MetadataRoute.Sitemap = allNews.map((post) => {
    // 日付が有効かチェックし、無効な場合は現在日時を使用
    const dateObj = new Date(post.date);
    const validDate = isNaN(dateObj.getTime()) ? new Date() : dateObj;

    return {
      url: `${baseUrl}/business/ai-models/news/${post.slug}`,
      lastModified: validDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });

  // 静的ページのエントリ
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/business/ai-models`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/business/ai-models/models`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/business/ai-models/models/aihana`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/business/ai-models/models/aireina`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/business/ai-models/models/aimisaki`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/business/ai-models/news`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/business/gym`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // 静的ページとニュース記事を結合して返す
  return [...staticEntries, ...newsEntries];
}

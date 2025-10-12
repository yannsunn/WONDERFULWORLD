import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const newsData: Record<string, any> = {
  '2025-10-01-launch': {
    id: '2025-10-01-launch',
    date: '2025年10月1日',
    category: 'プレスリリース',
    title: 'WONDERFUL WORLD プロジェクト正式ローンチ',
    content: `
WONDERFUL WORLDプロジェクトは、本日AIモデルインフルエンサー事業を正式に開始しました。

本プロジェクトは、ミスコンテストのファイナリストをベースにAIモデルを生成し、SNSインフルエンサーとして育成する画期的な取り組みです。

## プロジェクトの特徴

- **女性支援**: 収益の20%をモデル本人に還元
- **AI技術**: 独自開発の生成AIを使用
- **グローバル展開**: 日本から世界へ

今後、ミスコン出場者を対象にしたAIモデルの展開を順次行ってまいります。

## お問い合わせ

本件に関するお問い合わせは、お問い合わせフォームよりご連絡ください。
    `,
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const news = newsData[params.slug];
  if (!news) {
    return { title: 'News Not Found | WONDERFUL WORLD' };
  }
  return {
    title: `${news.title} | WONDERFUL WORLD`,
    description: news.title,
  };
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = newsData[params.slug];

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <article className="container max-w-4xl py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <time className="text-sm font-medium text-gray-500">
              {news.date}
            </time>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/20">
              {news.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
            {news.title}
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {news.content.split('\n').map((paragraph: string, index: number) => {
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {paragraph.replace('##', '').trim()}
                </h2>
              );
            }
            if (paragraph.startsWith('-')) {
              return (
                <li key={index} className="text-gray-700 ml-6">
                  {paragraph.replace('-', '').trim()}
                </li>
              );
            }
            return paragraph.trim() ? (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ) : null;
          })}
        </div>

        {/* Back Link */}
        <div className="pt-8 border-t">
          <Link
            href="/news"
            className="inline-flex items-center text-accent-gold hover:text-accent-gold/80 font-semibold transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ニュース一覧に戻る
          </Link>
        </div>
      </article>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { getLatestNews } from '@/data/news';

export const metadata: Metadata = {
  title: 'ニュース | WONDERFUL WORLD 合同会社',
  description:
    'AIモデルインフルエンサー事業に関する最新のイベントレポートやプレスリリースをお届けします。',
};

const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

export default function BusinessNewsPage() {
  const articles = getLatestNews();

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-primary-50/60 to-white pt-28 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-orange-100 text-orange-600">
                News
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mt-4 mb-6">
                最新ニュース & レポート
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                イベントレポート、プレスリリース、メディア掲載情報など、AIモデルインフルエンサー事業の最新情報をご紹介します。
              </p>
            </header>
          </ScrollReveal>

          <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
            {articles.map((article) => {
              const publishedDate = new Date(article.publishedAt);
              const isNew = Date.now() - publishedDate.getTime() <= 1000 * 60 * 60 * 24 * 7;

              return (
                <ScrollReveal key={article.slug}>
                  <article className="news-card h-full rounded-2xl bg-white shadow-lg shadow-orange-100/50 border border-orange-100/70 overflow-hidden hover:-translate-y-1 transition-all duration-300">
                    <Link href={`/business/ai-models/news/${article.slug}`} className="flex flex-col h-full">
                      <div className="relative h-56 w-full">
                        <Image
                          src={article.heroImage}
                          alt={article.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={article.slug === 'best-of-miss-tokyo-2025'}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-3 left-3 flex items-center gap-2">
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-orange-600">
                            {article.category}
                          </span>
                          {isNew && (
                            <span className="px-2 py-1 text-[10px] font-bold rounded-full bg-red-500 text-white">
                              NEW
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col flex-1 p-6 space-y-4">
                        <div className="flex items-center text-sm text-gray-500 gap-4">
                          <time className="font-medium tracking-wide" dateTime={article.publishedAt}>
                            {dateFormatter.format(publishedDate)}
                          </time>
                          {article.location && <span>{article.location}</span>}
                        </div>
                        <div className="space-y-2 flex-1">
                          <h2 className="text-xl font-bold text-gray-900 leading-snug">{article.title}</h2>
                          {article.subtitle && <p className="text-sm text-orange-500 font-semibold">{article.subtitle}</p>}
                          <p className="text-sm text-gray-600 line-clamp-3">{article.excerpt}</p>
                        </div>
                        <div className="flex items-center justify-between text-sm font-semibold text-orange-600">
                          <span>続きを読む</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center shadow-2xl shadow-orange-500/30">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-3">Contact</p>
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold mb-4">最新の活動について詳しく知る</h2>
              <p className="text-base sm:text-lg text-white/90 mb-6">
                メディア取材、パートナーシップ、イベント登壇のご依頼など、お気軽にお問い合わせください。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-orange-600 font-semibold hover:-translate-y-0.5 transition-transform duration-200"
              >
                お問い合わせフォームへ
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}

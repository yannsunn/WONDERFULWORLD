import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getAllNews } from '@/lib/markdown';
import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'ニュース | WONDERFUL WORLD',
  description: 'WONDERFUL WORLDの最新情報、プレスリリース、メディア掲載情報をお届けします。',
};

const NewsPage = () => {
  // Markdownファイルから全ニュースを取得
  const allNews = getAllNews();

  // 最新7日以内の記事をNEWとしてマーク
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const news = allNews.map(post => ({
    ...post,
    isNew: new Date(post.date) > sevenDaysAgo,
  }));

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-24">
        <div className="container">
          {/* Page Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
                News
              </h1>
              <p className="text-xl text-gray-600">
                最新情報・お知らせ
              </p>
            </div>
          </ScrollReveal>

          {/* News List */}
          <div className="max-w-4xl mx-auto space-y-6 pb-16">
            {news.length === 0 ? (
              <ScrollReveal>
                <div className="card p-12 text-center">
                  <p className="text-gray-600 text-lg">
                    まだニュース記事がありません。
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    content/news/ フォルダに.mdファイルを追加してください。
                  </p>
                </div>
              </ScrollReveal>
            ) : (
              news.map((item, index) => (
                <ScrollReveal key={item.slug} delay={index * 0.1}>
                  <Link
                    href={`/business/ai-models/news/${item.slug}`}
                    className="block"
                  >
                    <article className="card p-6 md:p-8 hover:shadow-2xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Thumbnail */}
                        {item.thumbnail && (
                          <div className="relative w-full md:w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={item.thumbnail}
                              alt={item.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 192px"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                            <time className="text-sm font-medium text-gray-500 flex-shrink-0">
                              {item.date}
                            </time>
                            <div className="flex items-center gap-3 flex-wrap">
                              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/20">
                                {item.category}
                              </span>
                              {item.isNew && (
                                <span className="px-2 py-1 text-xs font-bold rounded bg-red-500 text-white">
                                  NEW
                                </span>
                              )}
                            </div>
                          </div>

                          <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-accent-gold transition-colors">
                            {item.title}
                          </h2>

                          <p className="text-gray-600 leading-relaxed mb-4">
                            {item.excerpt}
                          </p>

                          <div className="flex items-center text-accent-gold font-semibold text-sm">
                            続きを読む
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              ))
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NewsPage;

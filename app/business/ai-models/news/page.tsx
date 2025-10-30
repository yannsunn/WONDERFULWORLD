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
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-28">
        <div className="container px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6 px-4">
                News
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
                最新情報・お知らせ
              </p>
            </div>
          </ScrollReveal>

          {/* News List */}
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 pb-16 sm:pb-20 lg:pb-24">
            {news.length === 0 ? (
              <ScrollReveal>
                <div className="card p-6 sm:p-8 lg:p-12 text-center">
                  <p className="text-gray-600 text-base sm:text-lg px-4">
                    まだニュース記事がありません。
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-2 px-4">
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
                    <article className="card p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
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
                          <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <time className="text-xs sm:text-sm font-medium text-gray-500 flex-shrink-0">
                              {item.date}
                            </time>
                            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                              <span className="px-2 sm:px-3 py-1 text-xs font-semibold rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/20">
                                {item.category}
                              </span>
                              {item.isNew && (
                                <span className="px-2 py-1 text-xs font-bold rounded bg-red-500 text-white">
                                  NEW
                                </span>
                              )}
                            </div>
                          </div>

                          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 hover:text-accent-gold transition-colors px-4">
                            {item.title}
                          </h2>

                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4 px-4">
                            {item.excerpt}
                          </p>

                          <div className="flex items-center text-accent-gold font-semibold text-xs sm:text-sm px-4">
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

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scrollViewport } from '@/lib/animations';

const NewsSection = () => {
  // Sample news data - in production, this would come from CMS
  const latestNews = [
    {
      id: '2025-10-01-launch',
      date: '2025.10.01',
      dateTime: '2025-10-01',
      category: 'プレスリリース',
      title: 'WONDERFUL WORLD プロジェクト正式ローンチ',
      isNew: true,
    },
    {
      id: '2025-09-20-media',
      date: '2025.09.20',
      dateTime: '2025-09-20',
      category: 'メディア掲載',
      title: '日経新聞にWONDERFUL WORLDの取り組みが紹介されました',
      isNew: true,
    },
    {
      id: '2025-09-01-model',
      date: '2025.09.01',
      dateTime: '2025-09-01',
      category: 'お知らせ',
      title: '新AIモデル「AI Reina」デビュー！',
      isNew: false,
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            News
          </h2>
          <p className="text-lg text-gray-600">
            最新情報・お知らせ
          </p>
        </motion.div>

        {/* News List */}
        <motion.div
          className="max-w-4xl mx-auto space-y-4 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {latestNews.map((news) => (
            <motion.div key={news.id} variants={fadeInUp}>
              <Link
                href={`/news/${news.id}`}
                className="block"
              >
                <div className="card p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Date & Category */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <time className="text-sm font-medium text-gray-500" dateTime={news.dateTime}>
                      {news.date}
                    </time>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/20">
                      {news.category}
                    </span>
                    {news.isNew && (
                      <span className="px-2 py-1 text-xs font-bold rounded bg-red-500 text-white">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-accent-gold transition-colors flex-1">
                    {news.title}
                  </h3>

                  {/* Arrow */}
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <Link
            href="/news"
            className="inline-flex items-center text-accent-gold hover:text-accent-gold/80 font-semibold transition-colors"
          >
            ニュース一覧へ
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;

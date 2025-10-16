'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, scrollViewport } from '@/lib/animations';

const MissionSection = () => {
  return (
    <section className="section bg-gradient-to-b from-white to-primary-50">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              className="space-y-6"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
            >
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-accent-gold to-primary-600 text-white text-sm font-bold rounded-full">
                  Support Women
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                Empowering Women
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                私たちは女性たちの夢を応援します。<br />
                ミスコンテスト出場者とのパートナーシップを通じて、<br />
                新しいキャリアの可能性を創出し、経済的自立を支援します。
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">パートナーシップ</h4>
                    <p className="text-sm text-gray-600">ミスコンテスト出場者と協力し、新しいキャリアを創出</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">新たなキャリアの創出</h4>
                    <p className="text-sm text-gray-600">ミスコン後の活躍の場を提供し、継続的な成長を支援</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">グローバルな可能性</h4>
                    <p className="text-sm text-gray-600">国境を越えて活躍する機会を提供</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center text-accent-gold hover:text-accent-gold/80 font-semibold transition-colors"
                >
                  プロジェクトの詳細を見る
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Right: Stats / Visual */}
            <motion.div
              className="relative"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
            >
              <div className="card p-8 bg-gradient-to-br from-accent-gold/10 to-primary-100">
                {/* Stats */}
                <div className="space-y-8">
                  <div className="text-center p-6 bg-white rounded-xl shadow-md">
                    <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">
                      AI × Beauty
                    </div>
                    <div className="text-sm text-gray-600">
                      新しいインフルエンサーの形
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-xl shadow-md">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        3+
                      </div>
                      <div className="text-xs text-gray-600">
                        活動中のモデル
                      </div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-md">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        300K+
                      </div>
                      <div className="text-xs text-gray-600">
                        総フォロワー数
                      </div>
                    </div>
                  </div>

                  <div className="text-center p-6 bg-white rounded-xl shadow-md">
                    <div className="text-sm text-gray-600 mb-2">
                      プロジェクトミッション
                    </div>
                    <div className="text-lg font-bold text-primary-700 leading-relaxed">
                      女性が輝く<br />新しい世界を創る
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-8 p-6 bg-white/50 rounded-xl border-l-4 border-accent-gold">
                  <p className="text-sm text-gray-700 italic">
                    「誰もが主役になれる、<br />素晴らしき世界を創る」
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    - WONDERFUL WORLD Project
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

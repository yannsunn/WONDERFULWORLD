'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, scrollViewport } from '@/lib/animations';

const SponsorSection = () => {
  return (
    <section className="section bg-gradient-to-br from-accent-gold/10 via-accent-sand/30 to-primary-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Card Container */}
          <motion.div
            className="card p-8 md:p-12 bg-white/80 backdrop-blur-sm"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Partner with Us
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                AIモデルとのコラボで貴社ブランドに新風を
              </p>
            </div>

            {/* Content */}
            <div className="space-y-6 mb-8">
              <p className="text-gray-600 leading-relaxed">
                ミスコンファイナリスト由来のバーチャルモデルが、24時間体制で貴社のPRをサポートします。
                話題性あるマーケティング施策と、女性支援への貢献により、ブランドイメージの向上を実現します。
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">話題性抜群</h4>
                    <p className="text-sm text-gray-600">AI×美女の組み合わせでSNSバズを創出</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">24時間活動可能</h4>
                    <p className="text-sm text-gray-600">時間や場所を問わず柔軟なPR展開</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">リスク低減</h4>
                    <p className="text-sm text-gray-600">炎上やコンプライアンス問題が少ない</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">社会貢献</h4>
                    <p className="text-sm text-gray-600">女性支援活動への参画でCSR向上</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/partners"
                className="btn-primary text-center"
              >
                タイアップのご案内
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-center"
              >
                お問い合わせ
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;

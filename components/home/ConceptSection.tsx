'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scrollViewport } from '@/lib/animations';

const ConceptSection = () => {
  const concepts = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: '社会性（女性支援）',
      description: '私たちはミスコン出場女性をAIで新たな活躍の場へ導きます。ミスコンテスト出場者とのパートナーシップを通じて、女性のキャリア構築と経済的自立を支援します。',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: '話題性（AI×Beauty）',
      description: '独自AIモデル技術で美を創出。最先端のバーチャルヒューマンがSNSで活躍し、新しいインフルエンサーマーケティングを実現します。',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '国際展開性（グローバル）',
      description: '日本から世界へ。海外でも注目されるAIインフルエンサーを輩出し、グローバルなブランドとして成長します。',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            3つの柱
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            WONDERFUL WORLDが創る、新しい価値
          </p>
        </motion.div>

        {/* Concept Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              className="card p-8 text-center hover:scale-105 transition-transform duration-300"
              variants={fadeInUp}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent-gold to-primary-600 text-white mb-6">
                {concept.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {concept.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {concept.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConceptSection;

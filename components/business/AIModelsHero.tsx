'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const heroImages = [
  { src: '/images/news/top3-group.jpg', alt: 'AIモデル トップ3', position: 'object-[center_20%]' },
  { src: '/images/news/best-of-miss-all-guests.jpg', alt: 'ベスト・オブ・ミス 受賞者', position: 'object-[center_10%] scale-90' },
  { src: '/images/news/award-ceremony-1.jpg', alt: '授賞式 1', position: 'object-[center_30%] scale-75' },
  { src: '/images/news/award-ceremony-2.jpg', alt: '授賞式 2', position: 'object-[center_30%] scale-75' },
];

export default function AIModelsHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自動スライド
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4秒ごとに自動スライド

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].alt}
              fill
              className={`object-cover ${heroImages[currentIndex].position}`}
              sizes="100vw"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`画像 ${index + 1} を表示`}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-playfair mb-2 sm:mb-3 md:mb-4 drop-shadow-lg" style={{ lineHeight: '1.3', letterSpacing: '0.04em' }}>
              AIモデルインフルエンサー
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-1 sm:mb-2 px-2 sm:px-4 drop-shadow-md" style={{ lineHeight: '1.5', letterSpacing: '0.05em' }}>
              AI Model Influencer Business
            </p>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl opacity-90 px-2 sm:px-4 drop-shadow-md" style={{ lineHeight: '1.6', letterSpacing: '0.03em' }}>
              次世代のインフルエンサーマーケティング
            </p>
          </div>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto px-2 sm:px-4 drop-shadow-md" style={{ lineHeight: '1.8', letterSpacing: '0.03em' }}>
            ミスコンテストファイナリストをベースにした、美しく魅力的なAIモデルインフルエンサー。
            最先端のAI技術で、新しい形のマーケティングを実現します。
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center px-2 sm:px-4">
            <Link
              href="/business/ai-models/models"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1 sm:gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              モデル一覧を見る
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1 sm:gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              お問い合わせ
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

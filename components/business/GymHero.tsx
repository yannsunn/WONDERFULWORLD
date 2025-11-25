'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const gymImages = [
  { src: '/images/business/gym/office-1.jpg', alt: '3BGYM ジム内観 1' },
  { src: '/images/business/gym/office-2.jpg', alt: '3BGYM ジム内観 2' },
  { src: '/images/business/gym/office-3.jpg', alt: '3BGYM ジム内観 3' },
  { src: '/images/business/gym/office-4.jpg', alt: '3BGYM ジム内観 4' },
  { src: '/images/business/gym/office-5.jpg', alt: '3BGYM ジム内観 5' },
];

interface GymHeroProps {
  name: string;
  tagline: string;
  subtitle: string;
  description: string;
  externalUrl: string;
}

export default function GymHero({ name, tagline, subtitle, description, externalUrl }: GymHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自動スライド
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === gymImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4秒ごとに自動スライド

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
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
              src={gymImages[currentIndex].src}
              alt={gymImages[currentIndex].alt}
              fill
              className="object-cover"
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
        {gymImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={"w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 " + (
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            )}
            aria-label={"画像 " + (index + 1) + " を表示"}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 py-16 sm:py-20 md:py-24 lg:py-28 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-4 sm:p-6">
              <Image
                src="/images/business/gym/logo.jpg"
                alt="3BGYM ロゴ"
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                priority
              />
            </div>
          </motion.div>

          {/* Logo/Brand Text */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-playfair mb-3 sm:mb-4 px-2 drop-shadow-lg" style={{ lineHeight: '1.3', letterSpacing: '0.04em' }}>
              {name}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 px-2 drop-shadow-md" style={{ lineHeight: '1.5', letterSpacing: '0.03em' }}>
              {tagline}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 px-2 drop-shadow-md" style={{ lineHeight: '1.6', letterSpacing: '0.03em' }}>
              {subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-2 drop-shadow-md"
            style={{ lineHeight: '1.8', letterSpacing: '0.03em' }}
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white text-orange-600 font-bold text-sm sm:text-base md:text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              公式サイトで詳しく見る
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

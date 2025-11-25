'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// スライド画像の設定
const SLIDES = [
  {
    id: 1,
    image: '/images/hero/best-of-miss-poster.jpg',
    alt: 'Best of Miss Tokyo 2025',
  },
  {
    id: 2,
    image: '/images/about/representative-presentation.jpg',
    alt: 'WONDERFUL WORLD 代表プレゼンテーション',
  },
  {
    id: 3,
    image: '/images/about/sponsors-screen.jpg',
    alt: 'Best of Miss Tokyo 2025 パートナー企業',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  // 次のスライドへ
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  // 前のスライドへ
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // 特定のスライドへ
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false); // 手動操作時は自動再生を停止
  }, []);

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
      setIsAutoPlay(false);
    }
    if (isRightSwipe) {
      prevSlide();
      setIsAutoPlay(false);
    }
  };

  // 自動スライド（5秒間隔）
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, nextSlide]);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover scale-105 animate-slow-zoom"
              priority={index === 0}
              sizes="100vw"
              quality={90}
            />
          </div>
        ))}

        {/* Multi-layer overlay for premium look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-transparent to-pink-900/20 z-20"></div>
      </div>

      {/* Background Pattern Accent */}
      <div className="absolute inset-0 opacity-10 z-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-gold rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-rose rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Slider Controls */}
      <div className="absolute inset-0 z-30 flex items-center justify-between px-4 sm:px-8">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full transition-all duration-300 transform hover:scale-110 border border-white/20"
          aria-label="前のスライド"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full transition-all duration-300 transform hover:scale-110 border border-white/20"
          aria-label="次のスライド"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-orange-400'
                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`スライド ${index + 1}へ移動`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Title - Ultra Enhanced */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-bold mb-8 relative leading-tight">
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-pink-400 bg-clip-text text-transparent animate-shimmer drop-shadow-2xl">
              WONDERFUL
            </span>
            <span className="block bg-gradient-to-r from-pink-400 via-orange-500 to-orange-400 bg-clip-text text-transparent animate-shimmer drop-shadow-2xl" style={{animationDelay: '0.5s'}}>
              WORLD
            </span>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 blur-3xl -z-10"></div>
          </h1>

          {/* Catchphrase - Enhanced */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 font-semibold drop-shadow-2xl animate-fade-in backdrop-blur-sm bg-white/10 inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 leading-relaxed ja-text">
            AI×Beautyで女性が輝く、<wbr />新しい世界へ
          </p>

          {/* Sub-message - Enhanced */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mb-12 max-w-3xl mx-auto drop-shadow-2xl animate-slide-in-left px-4 ja-text" style={{lineHeight: '1.9', letterSpacing: '0.04em'}}>
            ミスコンテストの<wbr />ファイナリストから生まれた<br className="hidden sm:block" />
            <span className="text-orange-300 font-semibold">AIモデル<wbr />インフルエンサー</span>
          </p>

          {/* CTA Buttons - Ultra Enhanced */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-scale-in px-4">
            <Link
              href="/about"
              className="btn-primary w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(249,115,22,0.5)] transform hover:-translate-y-2 animate-pulse-glow group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                詳しく見る
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/business/ai-models"
              className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 group backdrop-blur-md"
            >
              <span className="flex items-center justify-center gap-2">
                モデルを見る
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

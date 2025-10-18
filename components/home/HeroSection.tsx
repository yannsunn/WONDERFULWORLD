'use client';

import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with enhanced overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/best-of-miss-poster.jpg"
          alt="Best of Miss Tokyo 2025"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
          sizes="100vw"
        />
        {/* Multi-layer overlay for premium look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-transparent to-pink-900/20"></div>
      </div>

      {/* Background Pattern Accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-gold rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-rose rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Title - Ultra Enhanced */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-8 relative leading-tight">
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
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 font-semibold drop-shadow-2xl animate-fade-in backdrop-blur-sm bg-white/10 inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20">
            AI×Beautyで女性が輝く、新しい世界へ
          </p>

          {/* Sub-message - Enhanced */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-2xl animate-slide-in-left px-4">
            ミスコンテストのファイナリストから生まれた<br className="hidden sm:block" />
            <span className="text-orange-300 font-semibold">AIモデルインフルエンサー</span>
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

        {/* Scroll indicator - Enhanced */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-float">
            <span className="text-xs text-white/70 font-medium tracking-wider uppercase">Scroll</span>
            <svg
              className="w-6 h-6 text-orange-400 animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

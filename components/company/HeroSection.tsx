'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  message: string;
  ctaButtons: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
}

export default function HeroSection({ title, subtitle, message, ctaButtons }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Company Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mx-auto mb-4 sm:mb-6">
              <Image
                src="/images/about/company-logo.jpg"
                alt="WONDERFUL WORLD ロゴ"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 224px, 256px"
              />
            </div>
          </motion.div>

          {/* Logo/Brand */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 sm:mb-6 md:mb-8"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-playfair mb-2 sm:mb-3 md:mb-4">
              <span className="gradient-text-sunset drop-shadow-lg">
                WONDERFUL WORLD
              </span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium px-2 sm:px-4">
              {subtitle}
            </p>
          </motion.div>

          {/* Main Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-playfair text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4"
            style={{ lineHeight: '1.6', wordBreak: 'normal', overflowWrap: 'break-word' }}
          >
            {message}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto px-2 sm:px-4"
            style={{ lineHeight: '1.8', wordBreak: 'normal', overflowWrap: 'break-word' }}
          >
            {title}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center px-2 sm:px-4"
          >
            <Link
              href={ctaButtons.primary.href}
              className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover-lift shadow-layered hover:shadow-premium"
            >
              {ctaButtons.primary.text}
            </Link>
            <Link
              href={ctaButtons.secondary.href}
              className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg bg-white text-gray-800 font-semibold rounded-full border-2 border-orange-400 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 hover-lift shadow-lg hover:shadow-xl"
            >
              {ctaButtons.secondary.text}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

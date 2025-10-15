'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                WONDERFUL WORLD
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              {subtitle}
            </p>
          </motion.div>

          {/* Main Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-playfair text-gray-900 mb-6 leading-tight"
          >
            {message}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            {title}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={ctaButtons.primary.href}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {ctaButtons.primary.text}
            </Link>
            <Link
              href={ctaButtons.secondary.href}
              className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-all duration-300 shadow hover:shadow-lg"
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

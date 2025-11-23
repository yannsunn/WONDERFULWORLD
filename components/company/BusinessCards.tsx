'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Business {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  externalUrl?: string;
  features: string[];
}

interface BusinessCardsProps {
  businesses: Business[];
}

export default function BusinessCards({ businesses }: BusinessCardsProps) {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-pink-400 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-2 sm:mb-3 md:mb-4 px-2">
            <span className="gradient-text-sunset">事業案内</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
            私たちの2つの事業で、人々の可能性を最大限に引き出します
          </p>
        </motion.div>

        {/* Business Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {businesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              <div className="card-premium hover-lift overflow-hidden border border-gray-200">
                {/* Icon/Image Section */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-10 sm:p-12 md:p-16 overflow-hidden">
                  <div className="flex items-center justify-center">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 group-hover:scale-110 transition-transform duration-500">
                      <Image
                        src={business.image}
                        alt={`${business.name} ロゴ`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                      />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-xs sm:text-sm font-semibold shadow-md">
                    {index === 0 ? 'AI×Beauty' : 'Health×Beauty'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold font-playfair text-gray-900 mb-3 leading-normal">
                    {business.name}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">
                    {business.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-5 sm:mb-6">
                    {business.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-700">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3">
                    <Link
                      href={business.url}
                      className="text-center px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      詳しく見る
                    </Link>
                    {business.externalUrl && (
                      <a
                        href={business.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white text-gray-800 font-semibold rounded-full border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-all duration-300"
                      >
                        公式サイト
                        <svg className="inline-block w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

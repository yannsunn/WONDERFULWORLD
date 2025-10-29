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
    <section className="section mesh-gradient">
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-3 sm:mb-4">
            <span className="gradient-text-vibrant">事業案内</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
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
              <div className="card-premium hover-lift overflow-hidden border border-gray-100">
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={business.image}
                    alt={business.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 sm:px-4 py-1.5 sm:py-2 glass-premium rounded-full text-xs sm:text-sm font-semibold text-gray-800 border-glow">
                    {index === 0 ? 'AI×Beauty' : 'Health×Beauty'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold font-playfair text-gray-900 mb-3 leading-tight">
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

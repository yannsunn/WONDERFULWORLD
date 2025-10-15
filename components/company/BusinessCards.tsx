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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-4">
            事業案内
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            私たちの2つの事業で、人々の可能性を最大限に引き出します
          </p>
        </motion.div>

        {/* Business Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {businesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={business.image}
                    alt={business.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                    {index === 0 ? 'AI×Beauty' : 'Health×Beauty'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-playfair text-gray-900 mb-3">
                    {business.name}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {business.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {business.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={business.url}
                      className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      詳しく見る
                    </Link>
                    {business.externalUrl && (
                      <a
                        href={business.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-6 py-3 bg-white text-gray-800 font-semibold rounded-full border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-all duration-300"
                      >
                        公式サイト
                        <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

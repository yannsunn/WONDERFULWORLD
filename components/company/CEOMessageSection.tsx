'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface CEOMessageSectionProps {
  name: string;
  title: string;
  message: string;
  photo: string;
  fullMessageUrl?: string;
}

export default function CEOMessageSection({ name, title, message, photo, fullMessageUrl }: CEOMessageSectionProps) {
  return (
    <section className="section bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-3 sm:mb-4" style={{ lineHeight: '1.4', letterSpacing: '0.04em' }}>
              <span className="gradient-text-luxury">代表挨拶</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600" style={{ letterSpacing: '0.05em' }}>
              Message from CEO
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="md:col-span-2"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-premium hover:shadow-layered transition-shadow duration-500 max-w-sm mx-auto md:max-w-none">
                <Image
                  src={photo}
                  alt={`${name} - ${title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                  quality={90}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Name Badge */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <p className="text-xs sm:text-sm font-medium opacity-90 mb-1">{title}</p>
                  <h3 className="text-xl sm:text-2xl font-bold font-playfair">{name}</h3>
                </div>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="md:col-span-3"
            >
              <div className="card-premium hover-lift p-6 sm:p-8 lg:p-10 border border-gray-100">
                <div className="relative">
                  {/* Quote Mark */}
                  <div className="absolute -top-2 -left-2 text-4xl sm:text-6xl text-orange-500/20 font-serif">&ldquo;</div>

                  <div className="relative z-10">
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg whitespace-pre-line mb-6" style={{ lineHeight: '1.8', letterSpacing: '0.03em' }}>
                      {message}
                    </p>

                    {fullMessageUrl && (
                      <Link
                        href={fullMessageUrl}
                        className="inline-flex items-center text-orange-600 text-sm sm:text-base font-semibold hover:text-orange-700 transition-colors"
                      >
                        続きを読む
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Signature */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 text-right">
                  <p className="text-gray-600 text-xs sm:text-sm mb-1">{title}</p>
                  <p className="text-gray-900 font-bold text-base sm:text-lg">{name}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

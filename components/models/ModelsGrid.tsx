'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scrollViewport } from '@/lib/animations';

interface Model {
  id: string;
  name: string;
  handle: string;
  followers: string;
  catchphrase: string;
  description: string;
  image: string;
  tags: string[];
  badge?: string;
}

interface ModelsGridProps {
  models: Model[];
}

const ModelsGrid = ({ models }: ModelsGridProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
    >
      {models.map((model) => (
        <motion.div key={model.id} variants={fadeInUp}>
          <Link
            href={`/models/${model.id}`}
            className="group block"
          >
            <article className="card overflow-hidden hover:scale-105 transition-all duration-300 h-full">
              {/* Model Image */}
              <div className="relative h-96 overflow-hidden bg-gradient-to-b from-primary-100 to-primary-200">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Badge */}
                {model.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      model.badge === 'Grand Prix'
                        ? 'bg-accent-gold text-white'
                        : 'bg-white/90 text-gray-900'
                    }`}>
                      {model.badge}
                    </span>
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white w-full">
                    <p className="text-sm font-medium mb-2">{model.catchphrase}</p>
                    <p className="text-sm opacity-90">{model.description}</p>
                  </div>
                </div>
              </div>

              {/* Model Info */}
              <div className="p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-accent-gold transition-colors" style={{ letterSpacing: '0.04em' }}>
                  {model.name}
                </h2>
                <p className="text-gray-600 mb-4" style={{ letterSpacing: '0.03em' }}>{model.handle}</p>

                {/* Stats */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-semibold">{model.followers}</span>
                  <span className="ml-1">フォロワー</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {model.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ModelsGrid;

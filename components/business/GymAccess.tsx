'use client';

import { motion } from 'framer-motion';
import type { GymLocation } from '@/data/gym-info';

interface GymAccessProps {
  location: GymLocation;
  hours: {
    open: string;
    close: string;
    description: string;
  };
}

export default function GymAccess({ location, hours }: GymAccessProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-4">
            アクセス
          </h2>
          <p className="text-xl text-gray-600">
            {location.name}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 mb-8"
          >
            {/* Address Card */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">住所</h3>
                  <p className="text-sm text-gray-600 mb-1">〒{location.postalCode}</p>
                  <p className="text-gray-800 leading-relaxed">{location.address}</p>
                </div>
              </div>

              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Google Mapsで開く
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-lg border border-teal-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl">
                  🕐
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">営業時間</h3>
                  <div className="space-y-2">
                    <p className="text-gray-800 font-semibold">
                      {hours.open} - {hours.close}
                    </p>
                    <p className="text-sm text-gray-600">
                      定休日: なし
                    </p>
                    <p className="text-sm text-gray-600">
                      ※要予約制
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="3BGYM Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

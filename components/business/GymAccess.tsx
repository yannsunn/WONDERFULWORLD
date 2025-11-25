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
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-2 sm:mb-3 md:mb-4" style={{ lineHeight: '1.4', letterSpacing: '0.04em' }}>
            アクセス
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2" style={{ letterSpacing: '0.03em' }}>
            {location.name}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8"
          >
            {/* Address Card */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-orange-100">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3" style={{ letterSpacing: '0.04em' }}>住所</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1" style={{ letterSpacing: '0.02em' }}>〒{location.postalCode}</p>
                  <p className="text-sm sm:text-base text-gray-800" style={{ lineHeight: '1.8', letterSpacing: '0.03em' }}>{location.address}</p>
                </div>
              </div>

              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-base text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                Google Mapsで開く
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-pink-50 to-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-pink-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl">
                  🕐
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3" style={{ letterSpacing: '0.04em' }}>営業時間</h3>
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-sm sm:text-base text-gray-800 font-semibold">
                      {hours.open} - {hours.close}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      定休日: なし
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      ※要予約制
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl"
          >
            {location.latitude && location.longitude ? (
              // 座標がある場合は正確な埋め込み
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.5!2d${location.longitude}!3d${location.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDU1JzA5LjUiTiAxNDPCsDEyJzE0LjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="3BGYM Location Map"
              />
            ) : (
              // 座標がない場合は住所検索
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
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

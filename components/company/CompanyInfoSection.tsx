'use client';

import { motion } from 'framer-motion';
import CountUp from '@/components/animations/CountUp';

interface CompanyInfoSectionProps {
  name: string;
  established: string;
  representative: string;
  offices: {
    headquarters: { name: string; postalCode: string; address: string };
    tokyo: { name: string; postalCode: string; address: string };
  };
}

export default function CompanyInfoSection({ name, established, representative, offices }: CompanyInfoSectionProps) {
  const stats = [
    { icon: '🏢', label: '設立', value: established, countUp: false },
    { icon: '👤', label: '代表', value: representative, countUp: false },
    { icon: '📍', label: '拠点', value: '拠点', countUp: true, end: 2 },
    { icon: '💼', label: '事業', value: '事業', countUp: true, end: 2 },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-3 sm:mb-4">
              会社情報
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Company Information
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{stat.icon}</div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">{stat.label}</p>
                <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                  {stat.countUp ? (
                    <>
                      <CountUp end={stat.end!} duration={2000} />
                      {stat.value}
                    </>
                  ) : (
                    stat.value
                  )}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6 sm:gap-8"
          >
            {/* Headquarters */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center text-xl sm:text-2xl">
                  🏢
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{offices.headquarters.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-1">〒{offices.headquarters.postalCode}</p>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{offices.headquarters.address}</p>
                </div>
              </div>
            </div>

            {/* Tokyo Office */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center text-xl sm:text-2xl">
                  🗼
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{offices.tokyo.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-1">〒{offices.tokyo.postalCode}</p>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{offices.tokyo.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Company Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-10 sm:mt-12 pt-10 sm:pt-12 border-t border-gray-200"
          >
            <p className="text-2xl sm:text-3xl font-bold font-playfair text-gray-900">
              {name}
            </p>
            <p className="text-gray-600 text-sm sm:text-base mt-2">Wonderful World LLC</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

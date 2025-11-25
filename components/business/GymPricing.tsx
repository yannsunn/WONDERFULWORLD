'use client';

import { motion } from 'framer-motion';
import type { PricePlan } from '@/data/gym-info';

interface GymPricingProps {
  membership: PricePlan;
  entry: PricePlan;
  visitor: PricePlan;
}

interface ExtendedPricePlan extends PricePlan {
  highlight?: boolean;
}

export default function GymPricing({ membership, entry, visitor }: GymPricingProps) {
  const plans: ExtendedPricePlan[] = [
    { ...membership, highlight: true },
    entry,
    visitor
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-2 sm:mb-3 md:mb-4" style={{ lineHeight: '1.4', letterSpacing: '0.04em' }}>
            料金プラン
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2" style={{ lineHeight: '1.8', letterSpacing: '0.03em' }}>
            明確でシンプルな料金体系
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className={`bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                plan.highlight ? 'border-orange-500' : 'border-gray-200'
              } h-full flex flex-col`}>
                {plan.highlight && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 px-3 sm:px-4 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs sm:text-sm font-semibold rounded-full">
                    おすすめ
                  </div>
                )}

                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4" style={{ letterSpacing: '0.04em' }}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                      ¥{plan.price.toLocaleString()}
                    </span>
                    {plan.duration && (
                      <span className="text-sm sm:text-base text-gray-600">/ {plan.duration}</span>
                    )}
                  </div>
                </div>

                {plan.features.length > 0 && (
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

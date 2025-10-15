'use client';

import { motion } from 'framer-motion';

interface PhilosophyItem {
  title: string;
  subtitle: string;
  content: string;
}

interface PhilosophySectionProps {
  philosophy: PhilosophyItem;
  vision: PhilosophyItem;
  mission: PhilosophyItem;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function PhilosophySection({ philosophy, vision, mission }: PhilosophySectionProps) {
  const items = [philosophy, vision, mission];
  const colors = [
    'from-orange-500 to-orange-600',
    'from-green-500 to-green-600',
    'from-blue-500 to-blue-600'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-orange-200">
                {/* Icon/Badge */}
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${colors[index]} text-white text-sm font-semibold mb-6 shadow-md`}>
                  {item.title}
                </div>

                {/* Subtitle */}
                <h3 className="text-2xl font-bold font-playfair text-gray-900 mb-4">
                  {item.subtitle}
                </h3>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className={`w-12 h-1 bg-gradient-to-r ${colors[index]} rounded-full group-hover:w-full transition-all duration-500`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

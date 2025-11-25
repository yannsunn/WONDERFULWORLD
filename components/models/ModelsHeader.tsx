'use client';

import { motion } from 'framer-motion';
import { fadeInUp, scrollViewport } from '@/lib/animations';

const ModelsHeader = () => {
  return (
    <motion.div
      className="text-center mb-16"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6" style={{ lineHeight: '1.3', letterSpacing: '0.04em' }}>
        Our Models
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0" style={{ lineHeight: '1.8', letterSpacing: '0.03em' }}>
        ミスコンテストのファイナリストから生まれた、<br className="hidden sm:block" />
        AIモデルインフルエンサーたち
      </p>
    </motion.div>
  );
};

export default ModelsHeader;

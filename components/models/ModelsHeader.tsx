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
      <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
        Our Models
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        ミスコンテストのファイナリストから生まれた、<br className="hidden sm:block" />
        AIモデルインフルエンサーたち
      </p>
    </motion.div>
  );
};

export default ModelsHeader;

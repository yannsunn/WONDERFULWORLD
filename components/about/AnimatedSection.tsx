'use client';

import { motion } from 'framer-motion';
import { fadeInUp, scrollViewport } from '@/lib/animations';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className = '' }: AnimatedSectionProps) => {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

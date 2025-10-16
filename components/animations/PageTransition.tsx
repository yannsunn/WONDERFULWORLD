'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

/**
 * ページ全体のトランジションアニメーションコンポーネント
 * 全ページで統一感のあるフェードイン効果を提供
 */
export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

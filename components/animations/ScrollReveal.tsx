'use client'

import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

/**
 * スクロールで要素が画面に入ったときにアニメーション表示するコンポーネント
 * 各ページのセクションやカードに適用可能
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  }

  const { x, y } = directions[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

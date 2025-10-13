/**
 * Animation Configuration
 *
 * このファイルでアニメーションの設定を一元管理します。
 * 各アニメーションの速度、遅延、イージングを簡単に調整できます。
 */

import { Variants } from 'framer-motion';

// ========================================
// アニメーションの速度設定
// ========================================
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
};

export const ANIMATION_DELAY = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.3,
};

// ========================================
// イージング（動きの曲線）
// ========================================
export const EASING = {
  easeOut: [0.6, 0.01, 0.05, 0.95] as [number, number, number, number],
  easeInOut: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
  spring: { type: 'spring' as const, stiffness: 100, damping: 15 },
  smooth: { type: 'spring' as const, stiffness: 50, damping: 20 },
};

// ========================================
// 基本的なフェードインアニメーション
// ========================================
export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    }
  }
};

// ========================================
// 下からスライドイン + フェードイン
// ========================================
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    }
  }
};

// ========================================
// 上からスライドイン + フェードイン
// ========================================
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    }
  }
};

// ========================================
// 左からスライドイン + フェードイン
// ========================================
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    }
  }
};

// ========================================
// 右からスライドイン + フェードイン
// ========================================
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    }
  }
};

// ========================================
// ズームイン + フェードイン
// ========================================
export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    }
  }
};

// ========================================
// コンテナアニメーション（子要素を順番に表示）
// ========================================
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 子要素の表示間隔
      delayChildren: 0.2,   // 最初の子要素の遅延
    }
  }
};

// ========================================
// カードのホバーアニメーション
// ========================================
export const cardHover = {
  rest: {
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: EASING.easeOut,
    }
  },
  hover: {
    scale: 1.03,
    y: -5,
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: EASING.easeOut,
    }
  }
};

// ========================================
// ボタンのホバーアニメーション
// ========================================
export const buttonHover = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: EASING.easeOut,
    }
  },
  tap: {
    scale: 0.95,
  }
};

// ========================================
// ページトランジション
// ========================================
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: EASING.easeOut,
    }
  }
};

// ========================================
// スクロールアニメーション用のビューポート設定
// ========================================
export const scrollViewport = {
  once: true,      // 一度だけアニメーション（true推奨）
  amount: 0.3,     // 要素の30%が表示されたらアニメーション開始
  margin: '0px 0px -100px 0px', // アニメーション開始位置の調整
};

// ========================================
// 使用例
// ========================================
/**
 * 基本的な使い方:
 *
 * import { motion } from 'framer-motion';
 * import { fadeInUp, scrollViewport } from '@/lib/animations';
 *
 * <motion.div
 *   variants={fadeInUp}
 *   initial="hidden"
 *   whileInView="visible"
 *   viewport={scrollViewport}
 * >
 *   コンテンツ
 * </motion.div>
 *
 *
 * コンテナと子要素の連動:
 *
 * <motion.div
 *   variants={staggerContainer}
 *   initial="hidden"
 *   whileInView="visible"
 *   viewport={scrollViewport}
 * >
 *   <motion.div variants={fadeInUp}>子要素1</motion.div>
 *   <motion.div variants={fadeInUp}>子要素2</motion.div>
 *   <motion.div variants={fadeInUp}>子要素3</motion.div>
 * </motion.div>
 *
 *
 * ホバーアニメーション:
 *
 * <motion.div
 *   variants={cardHover}
 *   initial="rest"
 *   whileHover="hover"
 * >
 *   カード
 * </motion.div>
 */

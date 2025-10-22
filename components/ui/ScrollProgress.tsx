'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;

      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200/30 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-pink-500 transition-all duration-150 ease-out shadow-lg shadow-orange-500/50"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // ローカル開発環境でのみコンソールに出力
    if (process.env.NODE_ENV === 'development') {
      console.log('[Web Vitals]', metric);
    }

    // Vercel Analyticsに自動送信（既に@vercel/analytics/reactで設定済み）
    // 追加のカスタムロギングが必要な場合はここに追加

    // 例: Google Analyticsに送信する場合
    // window.gtag?.('event', metric.name, {
    //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //   event_label: metric.id,
    //   non_interaction: true,
    // });
  });

  return null;
}

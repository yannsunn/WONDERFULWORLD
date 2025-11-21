'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';
import { clientEnv } from '@/lib/env-client';

const isDevelopment = clientEnv.NODE_ENV === 'development';
const isProduction = clientEnv.NODE_ENV === 'production';

// Track AI referrers for LLMO analytics
const AI_REFERRERS = [
  'chat.openai.com',
  'chatgpt.com',
  'perplexity.ai',
  'claude.ai',
  'gemini.google.com',
  'bard.google.com',
  'copilot.microsoft.com',
  'you.com',
  'phind.com',
  'poe.com',
];

function trackAIReferrer() {
  if (typeof window === 'undefined') return;

  const referrer = document.referrer;
  const isAIReferrer = AI_REFERRERS.some(ai => referrer.includes(ai));

  if (!isAIReferrer) {
    return;
  }

  const aiSource = AI_REFERRERS.find(ai => referrer.includes(ai)) || 'unknown_ai';

  if (window.gtag) {
    window.gtag('event', 'ai_referral', {
      event_category: 'LLMO',
      event_label: aiSource,
      ai_source: aiSource,
      page_path: window.location.pathname,
      non_interaction: false,
    });
  }

  const aiVisits = JSON.parse(sessionStorage.getItem('ai-visits') || '[]');
  aiVisits.push({
    source: aiSource,
    timestamp: new Date().toISOString(),
    page: window.location.pathname,
  });
  sessionStorage.setItem('ai-visits', JSON.stringify(aiVisits));

  if (isDevelopment) {
    console.log('🤖 AI Referral detected:', aiSource);
  }
}

export function WebVitals() {
  useEffect(() => {
    trackAIReferrer();
  }, []);

  useReportWebVitals((metric) => {
    if (isDevelopment) {
      console.log({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
      });
    }

    if (typeof window !== 'undefined') {
      const metrics = JSON.parse(sessionStorage.getItem('web-vitals') || '[]');
      metrics.push({
        name: metric.name,
        value: Math.round(metric.value),
        rating: metric.rating,
        timestamp: new Date().toISOString(),
      });
      sessionStorage.setItem('web-vitals', JSON.stringify(metrics));

      if (isDevelopment) {
        if (metric.rating === 'poor') {
          console.warn(`⚠️ Poor ${metric.name}: ${Math.round(metric.value)}`);
        } else if (metric.rating === 'needs-improvement') {
          console.log(`⚡ ${metric.name} needs improvement: ${Math.round(metric.value)}`);
        } else {
          console.log(`✅ Good ${metric.name}: ${Math.round(metric.value)}`);
        }
      }

      if (isProduction && metric.rating === 'poor') {
        // TODO: 本番環境のパフォーマンス問題を監視サービスに送信
      }
    }

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });

  useEffect(() => {
    if (!isDevelopment) {
      return;
    }

    const showVitalsOverlay = () => {
      const metrics = JSON.parse(sessionStorage.getItem('web-vitals') || '[]');
      if (metrics.length === 0) return;

      interface MetricRecord {
        name: string;
        value: number;
        rating: string;
        timestamp: string;
      }

      const latest = metrics.reduce((acc: Record<string, MetricRecord>, curr: MetricRecord) => {
        acc[curr.name] = curr;
        return acc;
      }, {});

      console.table(latest);
    };

    const interval = setInterval(showVitalsOverlay, 10000);
    return () => clearInterval(interval);
  }, []);

  return null;
}

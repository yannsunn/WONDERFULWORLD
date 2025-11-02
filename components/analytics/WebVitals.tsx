'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

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

  if (isAIReferrer) {
    const aiSource = AI_REFERRERS.find(ai => referrer.includes(ai)) || 'unknown_ai';

    // Track to Google Analytics
    if (window.gtag) {
      window.gtag('event', 'ai_referral', {
        event_category: 'LLMO',
        event_label: aiSource,
        ai_source: aiSource,
        page_path: window.location.pathname,
        non_interaction: false,
      });
    }

    // Store in sessionStorage for analytics
    const aiVisits = JSON.parse(sessionStorage.getItem('ai-visits') || '[]');
    aiVisits.push({
      source: aiSource,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
    });
    sessionStorage.setItem('ai-visits', JSON.stringify(aiVisits));

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('🤖 AI Referral detected:', aiSource);
    }
  }
}

export function WebVitals() {
  // Track AI referrers on mount
  useEffect(() => {
    trackAIReferrer();
  }, []);

  useReportWebVitals((metric) => {
    // Log metrics to console in development only
    if (process.env.NODE_ENV === 'development') {
      console.log({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
      });
    }

    // Store metrics for analysis
    if (typeof window !== 'undefined') {
      // Store metrics in sessionStorage for debugging
      const metrics = JSON.parse(sessionStorage.getItem('web-vitals') || '[]');
      metrics.push({
        name: metric.name,
        value: Math.round(metric.value),
        rating: metric.rating,
        timestamp: new Date().toISOString(),
      });
      sessionStorage.setItem('web-vitals', JSON.stringify(metrics));

      // Development-only console warnings for poor metrics
      if (process.env.NODE_ENV === 'development') {
        if (metric.rating === 'poor') {
          console.warn(`⚠️ Poor ${metric.name}: ${Math.round(metric.value)}`);
        } else if (metric.rating === 'needs-improvement') {
          console.log(`⚡ ${metric.name} needs improvement: ${Math.round(metric.value)}`);
        } else {
          console.log(`✅ Good ${metric.name}: ${Math.round(metric.value)}`);
        }
      }

      // Production: Send poor metrics to error reporting service
      if (process.env.NODE_ENV === 'production' && metric.rating === 'poor') {
        // TODO: 本番環境でのパフォーマンス問題を監視サービスに送信
        // Example integrations:
        // - Sentry.captureMessage(`Poor Web Vital: ${metric.name}`, { level: 'warning', extra: metric });
        // - Datadog RUM: window.DD_RUM?.addError(new Error(`Poor ${metric.name}`), { metric });
        // - LogRocket.captureMessage(`Poor ${metric.name}`, { extra: metric });
      }
    }

    // Send to analytics service (Google Analytics example)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });

  // Display Web Vitals overlay in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
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

      // Show metrics every 10 seconds in development
      const interval = setInterval(showVitalsOverlay, 10000);
      return () => clearInterval(interval);
    }
  }, []);

  return null;
}

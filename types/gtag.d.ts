/**
 * Google Analytics gtag.js type definitions
 *
 * This file provides TypeScript type definitions for the global gtag function
 * to avoid using 'any' type in components that use Google Analytics.
 */

declare global {
  interface Window {
    /**
     * Google Analytics gtag function
     * @see https://developers.google.com/analytics/devguides/collection/gtagjs
     */
    gtag?: (
      command: 'config' | 'event' | 'set' | 'get',
      targetId: string,
      config?: Gtag.ConfigParams | Gtag.EventParams | Gtag.ControlParams
    ) => void;
  }
}

declare namespace Gtag {
  interface ConfigParams {
    page_path?: string;
    page_title?: string;
    page_location?: string;
    send_page_view?: boolean;
    [key: string]: unknown;
  }

  interface EventParams {
    event_category?: string;
    event_label?: string;
    value?: number;
    non_interaction?: boolean;
    [key: string]: unknown;
  }

  interface ControlParams {
    groups?: string;
    send_to?: string;
    event_callback?: () => void;
    event_timeout?: number;
  }
}

export {};

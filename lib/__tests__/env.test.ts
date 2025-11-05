/**
 * Environment Variable Validation Tests
 */

import { describe, it, expect } from '@jest/globals';

describe('Environment Variables', () => {
  it('should have valid NODE_ENV', () => {
    const validValues = ['development', 'production', 'test'];
    expect(validValues).toContain(process.env.NODE_ENV || 'development');
  });

  it('should handle optional API keys', () => {
    // These can be undefined in test environment
    const optionalKeys = [
      'OPENAI_API_KEY',
      'GEMINI_API_KEY',
      'FIGMA_ACCESS_TOKEN',
      'FIGMA_FILE_KEY',
      'NEXT_PUBLIC_GA_ID',
    ];

    optionalKeys.forEach(key => {
      const value = process.env[key];
      expect(value === undefined || typeof value === 'string').toBe(true);
    });
  });

  it('should validate URL format for NEXT_PUBLIC_SITE_URL', () => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (siteUrl) {
      expect(() => new URL(siteUrl)).not.toThrow();
    }
  });

  it('should validate email format for NEXT_PUBLIC_CONTACT_EMAIL', () => {
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(emailRegex.test(email)).toBe(true);
    }
  });
});

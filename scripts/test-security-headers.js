#!/usr/bin/env node

/**
 * Security Headers Test Script
 *
 * This script tests that all required security headers are properly set
 * on the WONDERFUL WORLD website.
 *
 * Usage:
 *   node scripts/test-security-headers.js [url]
 *
 * Default URL: http://localhost:3000
 */

const https = require('https');
const http = require('http');

// Test URL (default to localhost, or use command line argument)
const testUrl = process.argv[2] || 'http://localhost:3000';

// Expected security headers
const expectedHeaders = {
  'X-DNS-Prefetch-Control': 'on',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'Content-Security-Policy': null, // Will check for presence, not exact value
};

// Required CSP directives
const requiredCSPDirectives = [
  "default-src 'self'",
  "script-src",
  "style-src",
  "font-src",
  "img-src",
  "connect-src",
  "frame-src",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
];

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function testHeaders(url) {
  const protocol = url.startsWith('https') ? https : http;

  return new Promise((resolve, reject) => {
    const request = protocol.get(url, (response) => {
      const headers = response.headers;
      const results = {
        passed: [],
        failed: [],
        warnings: [],
      };

      // Test each expected header
      for (const [headerName, expectedValue] of Object.entries(expectedHeaders)) {
        const actualValue = headers[headerName.toLowerCase()];

        if (!actualValue) {
          results.failed.push({
            header: headerName,
            reason: 'Header not found',
          });
        } else if (expectedValue && actualValue !== expectedValue) {
          results.failed.push({
            header: headerName,
            reason: `Expected: ${expectedValue}\nActual: ${actualValue}`,
          });
        } else {
          results.passed.push({
            header: headerName,
            value: actualValue,
          });
        }
      }

      // Test CSP directives
      const csp = headers['content-security-policy'];
      if (csp) {
        const missingDirectives = [];
        for (const directive of requiredCSPDirectives) {
          if (!csp.includes(directive.split(' ')[0])) {
            missingDirectives.push(directive);
          }
        }

        if (missingDirectives.length > 0) {
          results.warnings.push({
            header: 'Content-Security-Policy',
            reason: `Missing directives: ${missingDirectives.join(', ')}`,
          });
        }

        // Check for unsafe directives (warnings)
        if (csp.includes("'unsafe-inline'") || csp.includes("'unsafe-eval'")) {
          results.warnings.push({
            header: 'Content-Security-Policy',
            reason: "Contains 'unsafe-inline' or 'unsafe-eval' - consider using nonces or hashes in production",
          });
        }
      }

      resolve(results);
    });

    request.on('error', (error) => {
      reject(error);
    });

    request.end();
  });
}

// Main execution
(async () => {
  log('='.repeat(70), 'cyan');
  log('  WONDERFUL WORLD - Security Headers Test', 'cyan');
  log('='.repeat(70), 'cyan');
  log('');
  log(`Testing URL: ${testUrl}`, 'blue');
  log('');

  try {
    const results = await testHeaders(testUrl);

    // Display passed tests
    log('✓ PASSED TESTS:', 'green');
    log('-'.repeat(70), 'green');
    for (const test of results.passed) {
      log(`  ✓ ${test.header}`, 'green');
      log(`    ${test.value}`, 'reset');
    }
    log('');

    // Display failed tests
    if (results.failed.length > 0) {
      log('✗ FAILED TESTS:', 'red');
      log('-'.repeat(70), 'red');
      for (const test of results.failed) {
        log(`  ✗ ${test.header}`, 'red');
        log(`    ${test.reason}`, 'reset');
      }
      log('');
    }

    // Display warnings
    if (results.warnings.length > 0) {
      log('⚠ WARNINGS:', 'yellow');
      log('-'.repeat(70), 'yellow');
      for (const warning of results.warnings) {
        log(`  ⚠ ${warning.header}`, 'yellow');
        log(`    ${warning.reason}`, 'reset');
      }
      log('');
    }

    // Summary
    log('='.repeat(70), 'cyan');
    log('  SUMMARY', 'cyan');
    log('='.repeat(70), 'cyan');
    log(`  Passed:   ${results.passed.length}`, 'green');
    log(`  Failed:   ${results.failed.length}`, results.failed.length > 0 ? 'red' : 'green');
    log(`  Warnings: ${results.warnings.length}`, results.warnings.length > 0 ? 'yellow' : 'green');
    log('');

    // Overall result
    if (results.failed.length === 0) {
      log('  ✓ All security headers are properly configured!', 'green');
      log('');
      log('  Next steps:', 'cyan');
      log('  1. Test on production: node scripts/test-security-headers.js https://wonderfulworld.jp', 'cyan');
      log('  2. Verify with Mozilla Observatory: https://observatory.mozilla.org/', 'cyan');
      log('  3. Check Security Headers score: https://securityheaders.com/', 'cyan');
      process.exit(0);
    } else {
      log('  ✗ Some security headers are missing or incorrect', 'red');
      log('');
      log('  Please review the failed tests above and update next.config.mjs', 'yellow');
      process.exit(1);
    }
  } catch (error) {
    log('ERROR: Failed to test headers', 'red');
    log(error.message, 'red');
    log('');
    log('Make sure the development server is running:', 'yellow');
    log('  npm run dev', 'yellow');
    process.exit(1);
  }
})();

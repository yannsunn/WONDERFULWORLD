/**
 * Responsive Design Verification Script
 * Captures screenshots of all pages across different device sizes
 *
 * IMPORTANT: Never uses fullPage: true to avoid 8000px dimension limits
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.join(__dirname, '../screenshots/responsive');

// Pages to capture
const PAGES = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/business/ai-models', name: 'ai-models' },
  { path: '/business/gym', name: 'gym' },
  { path: '/contact', name: 'contact' }
];

// Device configurations
const DEVICES = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 }
];

// Ensure output directory exists
function ensureDirectoryExists() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created directory: ${OUTPUT_DIR}`);
  }
}

// Capture screenshots for all pages and devices
async function captureScreenshots() {
  console.log('Starting responsive design verification...\n');

  ensureDirectoryExists();

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const results = [];

  for (const device of DEVICES) {
    console.log(`\n========================================`);
    console.log(`Device: ${device.name} (${device.width}x${device.height})`);
    console.log(`========================================`);

    // Set viewport size
    await page.setViewportSize({ width: device.width, height: device.height });

    for (const pageConfig of PAGES) {
      const url = `${BASE_URL}${pageConfig.path}`;
      const filename = `${pageConfig.name}-${device.name}.png`;
      const filepath = path.join(OUTPUT_DIR, filename);

      try {
        console.log(`Capturing: ${pageConfig.name} (${device.name})...`);

        // Navigate to page
        await page.goto(url, { waitUntil: 'networkidle' });

        // Wait a bit for any animations to complete
        await page.waitForTimeout(1000);

        // CRITICAL: Capture viewport-only screenshot (NO fullPage: true)
        await page.screenshot({
          path: filepath,
          fullPage: false // Viewport only to avoid 8000px limit
        });

        results.push({
          page: pageConfig.name,
          device: device.name,
          status: 'success',
          filename: filename,
          path: filepath
        });

        console.log(`✓ Saved: ${filename}`);
      } catch (error) {
        console.error(`✗ Error capturing ${pageConfig.name} (${device.name}):`, error.message);
        results.push({
          page: pageConfig.name,
          device: device.name,
          status: 'error',
          error: error.message
        });
      }
    }
  }

  await browser.close();

  // Print summary
  console.log('\n========================================');
  console.log('SCREENSHOT CAPTURE SUMMARY');
  console.log('========================================\n');

  const successCount = results.filter(r => r.status === 'success').length;
  const errorCount = results.filter(r => r.status === 'error').length;

  console.log(`Total screenshots: ${results.length}`);
  console.log(`Successful: ${successCount}`);
  console.log(`Failed: ${errorCount}\n`);

  if (successCount > 0) {
    console.log('Successfully captured screenshots:');
    results
      .filter(r => r.status === 'success')
      .forEach(r => console.log(`  ✓ ${r.filename}`));
  }

  if (errorCount > 0) {
    console.log('\nFailed captures:');
    results
      .filter(r => r.status === 'error')
      .forEach(r => console.log(`  ✗ ${r.page} (${r.device}): ${r.error}`));
  }

  console.log(`\nScreenshots saved to: ${OUTPUT_DIR}`);

  return results;
}

// Run the script
captureScreenshots()
  .then(() => {
    console.log('\nResponsive design verification complete!');
    process.exit(0);
  })
  .catch(error => {
    console.error('\nFatal error:', error);
    process.exit(1);
  });

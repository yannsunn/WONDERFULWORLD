const { chromium } = require('playwright');

async function captureScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, // iPhone 14 Pro
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();

  const pages = [
    { url: 'http://localhost:3001', name: 'home' },
    { url: 'http://localhost:3001/about', name: 'about' },
  ];

  for (const p of pages) {
    console.log(`Capturing ${p.name}...`);
    await page.goto(p.url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Viewport screenshot (not fullPage)
    await page.screenshot({
      path: `screenshots/mobile-${p.name}.png`,
      fullPage: false
    });

    // Scroll down and capture more
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(500);
    await page.screenshot({
      path: `screenshots/mobile-${p.name}-scroll1.png`,
      fullPage: false
    });

    // Scroll more for home page business section
    if (p.name === 'home') {
      await page.evaluate(() => window.scrollBy(0, 800));
      await page.waitForTimeout(500);
      await page.screenshot({
        path: `screenshots/mobile-${p.name}-scroll2.png`,
        fullPage: false
      });

      await page.evaluate(() => window.scrollBy(0, 800));
      await page.waitForTimeout(500);
      await page.screenshot({
        path: `screenshots/mobile-${p.name}-scroll3.png`,
        fullPage: false
      });
    }
  }

  await browser.close();
  console.log('Screenshots saved to screenshots/ folder');
}

captureScreenshots().catch(console.error);

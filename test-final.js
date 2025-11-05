const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15',
  });
  const page = await context.newPage();

  console.log('📱 Testing with cache bypass...');
  await page.goto('https://www.wonderful-world.llc/?t=' + Date.now(), {
    waitUntil: 'networkidle'
  });

  await page.screenshot({ path: 'verify-closed.png' });
  console.log('📸 Closed');

  await page.click('button[aria-label="メニューを開く"]');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verify-opened.png' });
  console.log('📸 Opened');

  await browser.close();
})();

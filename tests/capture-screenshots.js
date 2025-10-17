const { chromium } = require('playwright');

async function captureScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  console.log('Starting screenshot capture...\n');

  // Desktop screenshots
  const desktopPage = await context.newPage();
  await desktopPage.setViewportSize({ width: 1920, height: 1080 });

  // Homepage - Desktop
  console.log('Capturing homepage (desktop)...');
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(2000); // Wait for animations
  await desktopPage.screenshot({ path: 'screenshots/homepage-desktop.png' });
  console.log('✓ Saved: screenshots/homepage-desktop.png\n');

  // Models page
  console.log('Capturing /models page...');
  await desktopPage.goto('http://localhost:3000/models', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(2000);
  await desktopPage.screenshot({ path: 'screenshots/models-page-desktop.png' });
  console.log('✓ Saved: screenshots/models-page-desktop.png\n');

  // About page
  console.log('Capturing /about page...');
  await desktopPage.goto('http://localhost:3000/about', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(2000);
  await desktopPage.screenshot({ path: 'screenshots/about-page-desktop.png' });
  console.log('✓ Saved: screenshots/about-page-desktop.png\n');

  // Individual model page
  console.log('Capturing /models/aihana page...');
  await desktopPage.goto('http://localhost:3000/models/aihana', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(2000);
  await desktopPage.screenshot({ path: 'screenshots/model-aihana-desktop.png' });
  console.log('✓ Saved: screenshots/model-aihana-desktop.png\n');

  await desktopPage.close();

  // Mobile screenshot (iPhone 12 Pro size: 390x844)
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 390, height: 844 });

  console.log('Capturing homepage (mobile - iPhone)...');
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({ path: 'screenshots/homepage-mobile-iphone.png' });
  console.log('✓ Saved: screenshots/homepage-mobile-iphone.png\n');

  await mobilePage.close();
  await context.close();
  await browser.close();

  console.log('All screenshots captured successfully!');
  console.log('\nScreenshots saved in: c:\\Users\\march\\Projects\\websites\\WONDERFULWORLD\\screenshots\\');
}

captureScreenshots().catch(error => {
  console.error('Error capturing screenshots:', error);
  process.exit(1);
});

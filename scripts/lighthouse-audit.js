const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

const url = process.env.LIGHTHOUSE_URL || 'http://localhost:3000';

const runLighthouse = async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = {
    logLevel: 'info',
    output: ['html', 'json'],
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };

  try {
    console.log(`🔍 Running Lighthouse audit on ${url}...`);
    const runnerResult = await lighthouse(url, options);

    // Extract scores
    const { lhr } = runnerResult;
    const scores = {
      performance: Math.round(lhr.categories.performance.score * 100),
      accessibility: Math.round(lhr.categories.accessibility.score * 100),
      bestPractices: Math.round(lhr.categories['best-practices'].score * 100),
      seo: Math.round(lhr.categories.seo.score * 100),
    };

    // Display results
    console.log('\n📊 Lighthouse Scores:');
    console.log('━'.repeat(50));
    console.log(`⚡ Performance:     ${scores.performance}/100 ${getEmoji(scores.performance)}`);
    console.log(`♿ Accessibility:   ${scores.accessibility}/100 ${getEmoji(scores.accessibility)}`);
    console.log(`✨ Best Practices:  ${scores.bestPractices}/100 ${getEmoji(scores.bestPractices)}`);
    console.log(`🔍 SEO:             ${scores.seo}/100 ${getEmoji(scores.seo)}`);
    console.log('━'.repeat(50));

    // Calculate average
    const average = Math.round(
      Object.values(scores).reduce((a, b) => a + b, 0) / Object.keys(scores).length
    );
    console.log(`📈 Average Score:   ${average}/100 ${getEmoji(average)}\n`);

    // Web Vitals
    if (lhr.audits['largest-contentful-paint']) {
      console.log('📊 Core Web Vitals:');
      console.log('━'.repeat(50));
      const lcp = lhr.audits['largest-contentful-paint'];
      const fid = lhr.audits['max-potential-fid'] || lhr.audits['total-blocking-time'];
      const cls = lhr.audits['cumulative-layout-shift'];

      console.log(`🖼️  LCP (Largest Contentful Paint): ${lcp.displayValue}`);
      console.log(`⚡ TBT (Total Blocking Time):      ${fid.displayValue}`);
      console.log(`📐 CLS (Cumulative Layout Shift):  ${cls.displayValue}`);
      console.log('━'.repeat(50) + '\n');
    }

    // Save reports
    const reportsDir = path.join(__dirname, '../lighthouse-reports');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportHtml = runnerResult.report[0];
    const reportJson = runnerResult.report[1];

    fs.writeFileSync(
      path.join(reportsDir, `lighthouse-${timestamp}.html`),
      reportHtml
    );
    fs.writeFileSync(
      path.join(reportsDir, `lighthouse-${timestamp}.json`),
      reportJson
    );

    console.log(`💾 Reports saved to: ${reportsDir}`);
    console.log(`   - lighthouse-${timestamp}.html`);
    console.log(`   - lighthouse-${timestamp}.json\n`);

    // Check if scores meet threshold
    const threshold = 90;
    const failedCategories = Object.entries(scores).filter(([, score]) => score < threshold);

    if (failedCategories.length > 0) {
      console.warn(`⚠️  Warning: ${failedCategories.length} categor${failedCategories.length > 1 ? 'ies' : 'y'} below ${threshold}:`);
      failedCategories.forEach(([category, score]) => {
        console.warn(`   - ${category}: ${score}/100`);
      });
    } else {
      console.log(`✅ All categories meet the ${threshold} threshold!`);
    }

  } catch (error) {
    console.error('❌ Lighthouse audit failed:', error);
    process.exit(1);
  } finally {
    await chrome.kill();
  }
};

function getEmoji(score) {
  if (score >= 90) return '🟢';
  if (score >= 50) return '🟠';
  return '🔴';
}

runLighthouse();

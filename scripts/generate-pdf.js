const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('🚀 PDF生成を開始します...');

  // HTMLファイルのパス
  const htmlPath = path.join(__dirname, '..', 'docs', 'pdf', 'news-posting-guide.html');
  const outputPath = path.join(__dirname, '..', 'docs', 'pdf', 'ニュース投稿ガイド.pdf');

  // HTMLファイルが存在するか確認
  if (!fs.existsSync(htmlPath)) {
    console.error('❌ HTMLファイルが見つかりません:', htmlPath);
    process.exit(1);
  }

  try {
    // ブラウザを起動
    console.log('📖 ブラウザを起動中...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // HTMLファイルを読み込み
    console.log('📄 HTMLファイルを読み込み中...');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    await page.setContent(htmlContent, {
      waitUntil: 'networkidle0'
    });

    // PDFを生成
    console.log('📝 PDFを生成中...');
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm'
      },
      preferCSSPageSize: true
    });

    await browser.close();

    console.log('✅ PDFの生成が完了しました！');
    console.log('📁 保存場所:', outputPath);

    // ファイルサイズを確認
    const stats = fs.statSync(outputPath);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log('📊 ファイルサイズ:', fileSizeInMB, 'MB');

  } catch (error) {
    console.error('❌ エラーが発生しました:', error.message);
    process.exit(1);
  }
}

// スクリプトを実行
generatePDF();

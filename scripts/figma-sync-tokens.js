/**
 * Figma Design Tokens Sync Script
 *
 * このスクリプトは、FigmaからデザイントークンをフェッチしてTailwind Configに同期します。
 *
 * 使い方:
 * 1. .env.localにFIGMA_ACCESS_TOKENとFIGMA_FILE_KEYを設定
 * 2. node scripts/figma-sync-tokens.js を実行
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;

// Figma APIエンドポイント
const FIGMA_API_BASE = 'https://api.figma.com/v1';

/**
 * Figma APIからファイル情報を取得
 */
async function fetchFigmaFile() {
  if (!FIGMA_TOKEN || !FILE_KEY) {
    console.error('❌ エラー: FIGMA_ACCESS_TOKEN と FIGMA_FILE_KEY が必要です');
    console.log('   .env.local ファイルに以下を設定してください:');
    console.log('   FIGMA_ACCESS_TOKEN=your_token_here');
    console.log('   FIGMA_FILE_KEY=your_file_key_here');
    process.exit(1);
  }

  console.log('🔄 Figmaからデザイントークンを取得中...');

  try {
    const response = await fetch(
      `${FIGMA_API_BASE}/files/${FILE_KEY}`,
      {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Figma API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Figma APIエラー:', error.message);
    process.exit(1);
  }
}

/**
 * Figmaファイルからカラートークンを抽出
 */
function extractColors(figmaData) {
  console.log('🎨 カラートークンを抽出中...');

  const colors = {
    primary: {},
    accent: {},
    gradients: []
  };

  // Figmaのドキュメント構造を探索してカラーを抽出
  // 実際の実装ではFigmaファイルの構造に応じてカスタマイズが必要
  function traverseNode(node) {
    if (node.name && node.name.startsWith('Color/')) {
      const colorName = node.name.replace('Color/', '');

      if (node.fills && node.fills.length > 0) {
        const fill = node.fills[0];

        if (fill.type === 'SOLID') {
          const { r, g, b } = fill.color;
          const hex = rgbToHex(r, g, b);

          // カラー名でカテゴリー分け
          if (colorName.startsWith('Primary')) {
            const shade = colorName.match(/\d+/)?.[0] || '500';
            colors.primary[shade] = hex;
          } else if (colorName.startsWith('Accent')) {
            const accentName = colorName.split('/')[1]?.toLowerCase() || 'default';
            colors.accent[accentName] = hex;
          }
        } else if (fill.type === 'GRADIENT_LINEAR') {
          colors.gradients.push({
            name: colorName,
            stops: fill.gradientStops.map(stop => ({
              position: stop.position,
              color: rgbToHex(stop.color.r, stop.color.g, stop.color.b)
            }))
          });
        }
      }
    }

    // 子ノードを再帰的に探索
    if (node.children) {
      node.children.forEach(traverseNode);
    }
  }

  if (figmaData.document) {
    traverseNode(figmaData.document);
  }

  return colors;
}

/**
 * RGBからHEXに変換
 */
function rgbToHex(r, g, b) {
  const toHex = (value) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Figmaファイルからタイポグラフィ情報を抽出
 */
function extractTypography(figmaData) {
  console.log('📝 タイポグラフィトークンを抽出中...');

  const typography = {
    fontFamilies: new Set(),
    fontSizes: new Set(),
    lineHeights: new Set()
  };

  function traverseNode(node) {
    if (node.style) {
      if (node.style.fontFamily) {
        typography.fontFamilies.add(node.style.fontFamily);
      }
      if (node.style.fontSize) {
        typography.fontSizes.add(node.style.fontSize);
      }
      if (node.style.lineHeightPx) {
        typography.lineHeights.add(node.style.lineHeightPx);
      }
    }

    if (node.children) {
      node.children.forEach(traverseNode);
    }
  }

  if (figmaData.document) {
    traverseNode(figmaData.document);
  }

  return {
    fontFamilies: Array.from(typography.fontFamilies),
    fontSizes: Array.from(typography.fontSizes).sort((a, b) => a - b),
    lineHeights: Array.from(typography.lineHeights).sort((a, b) => a - b)
  };
}

/**
 * デザイントークンをJSON形式で保存
 */
function saveDesignTokens(colors, typography) {
  const tokensPath = path.join(__dirname, '..', 'design-tokens.json');

  const tokens = {
    version: '1.0',
    updated: new Date().toISOString(),
    colors,
    typography
  };

  fs.writeFileSync(
    tokensPath,
    JSON.stringify(tokens, null, 2),
    'utf-8'
  );

  console.log('💾 デザイントークンを保存しました:', tokensPath);
  return tokens;
}

/**
 * Tailwind Configを更新（オプション）
 */
function updateTailwindConfig(tokens) {
  console.log('⚙️  Tailwind Config更新はスキップします（手動更新を推奨）');
  console.log('   以下のトークンをtailwind.config.tsに反映してください:');
  console.log('');
  console.log('   Colors:', JSON.stringify(tokens.colors, null, 2));
  console.log('');
}

/**
 * メイン処理
 */
async function main() {
  console.log('');
  console.log('🎨 WONDERFUL WORLD - Figma Design Tokens Sync');
  console.log('='.repeat(50));
  console.log('');

  try {
    // Figmaからデータを取得
    const figmaData = await fetchFigmaFile();
    console.log('✅ Figmaファイルを取得しました');

    // デザイントークンを抽出
    const colors = extractColors(figmaData);
    const typography = extractTypography(figmaData);

    // トークンを保存
    const tokens = saveDesignTokens(colors, typography);

    // Tailwind Config更新の案内
    updateTailwindConfig(tokens);

    console.log('');
    console.log('✅ デザイントークンの同期が完了しました！');
    console.log('');

  } catch (error) {
    console.error('');
    console.error('❌ エラーが発生しました:', error.message);
    console.error('');
    process.exit(1);
  }
}

// スクリプト実行
main();

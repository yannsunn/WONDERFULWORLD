# 🎨 WONDERFUL WORLD - Figma Design System

このドキュメントは、現在のサイトのデザインシステムをFigmaで管理するためのガイドです。

## 📋 目次

1. [デザイントークン](#デザイントークン)
2. [カラーパレット](#カラーパレット)
3. [タイポグラフィ](#タイポグラフィ)
4. [スペーシング](#スペーシング)
5. [エフェクト](#エフェクト)
6. [コンポーネント](#コンポーネント)
7. [Figma連携セットアップ](#figma連携セットアップ)

---

## 🎨 デザイントークン

### カラーパレット

#### Primary Colors (ブランドカラー)
```json
{
  "primary": {
    "50": "#fdf8f6",
    "100": "#f8ebe3",
    "200": "#f3d8c8",
    "300": "#ebbfa3",
    "400": "#e19d77",
    "500": "#d97f52",
    "600": "#c96541",
    "700": "#a85037",
    "800": "#884333",
    "900": "#6f3a2d"
  }
}
```

#### Accent Colors (アクセントカラー)
```json
{
  "accent": {
    "gold": "#D4AF37",
    "rose": "#E8B4B8",
    "sand": "#F5E6D3"
  }
}
```

#### Gradient Colors (グラデーション)
```css
/* Primary Gradient */
background: linear-gradient(90deg, #f97316, #ec4899);

/* Sunset Gradient */
background: linear-gradient(135deg, #ff7e5f, #feb47b);

/* Luxury Gold Gradient */
background: linear-gradient(135deg, #d4af37 0%, #f4e5c2 50%, #d4af37 100%);
```

---

## 📝 タイポグラフィ

### Font Families
```css
--font-sans: 'Inter', system-ui, sans-serif;
--font-heading: 'Playfair Display', serif;
```

### Font Sizes (Responsive)
```css
/* Heading XL */
font-size: clamp(2rem, 5vw, 4rem);
line-height: 1.2;

/* Heading LG */
font-size: clamp(1.5rem, 3.5vw, 3rem);
line-height: 1.3;

/* Heading MD */
font-size: clamp(1.25rem, 2.5vw, 2rem);
line-height: 1.4;

/* Body */
font-size: clamp(1rem, 1.5vw, 1.125rem);
line-height: 1.8;
```

### 日本語タイポグラフィ最適化
```css
font-feature-settings: "palt" 1;
word-break: keep-all;
overflow-wrap: anywhere;
line-height: 1.8;
```

---

## 📏 スペーシング

### Section Spacing
```css
padding-top: 5rem;     /* 80px */
padding-bottom: 5rem;  /* 80px */

@media (min-width: 768px) {
  padding-top: 7rem;   /* 112px */
  padding-bottom: 7rem;
}

@media (min-width: 1024px) {
  padding-top: 8rem;   /* 128px */
  padding-bottom: 8rem;
}
```

### Container
```css
max-width: 1400px;  /* container-premium */
max-width: 900px;   /* container-narrow */
max-width: 1280px;  /* container (default) */

padding-left: 1.5rem;   /* 24px */
padding-right: 1.5rem;
```

---

## ✨ エフェクト

### Shadow System

#### Card Shadows (Multi-layered)
```css
/* Default Card */
box-shadow:
  0 1px 3px rgba(0, 0, 0, 0.12),
  0 1px 2px rgba(0, 0, 0, 0.24);

/* Premium Card */
box-shadow:
  0 2px 8px rgba(0, 0, 0, 0.04),
  0 4px 16px rgba(0, 0, 0, 0.06),
  0 8px 32px rgba(0, 0, 0, 0.08);

/* Premium Card Hover */
box-shadow:
  0 4px 16px rgba(249, 115, 22, 0.08),
  0 8px 32px rgba(249, 115, 22, 0.12),
  0 16px 64px rgba(249, 115, 22, 0.16);
```

#### Neumorphism
```css
box-shadow:
  12px 12px 24px rgba(163, 177, 198, 0.3),
  -12px -12px 24px rgba(255, 255, 255, 0.8);
```

### Glassmorphism
```css
background: rgba(255, 255, 255, 0.85);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.4);
```

### Mesh Gradient Background
```css
background:
  radial-gradient(at 0% 0%, rgba(249, 115, 22, 0.1) 0px, transparent 50%),
  radial-gradient(at 100% 0%, rgba(236, 72, 153, 0.1) 0px, transparent 50%),
  radial-gradient(at 100% 100%, rgba(249, 115, 22, 0.08) 0px, transparent 50%),
  radial-gradient(at 0% 100%, rgba(236, 72, 153, 0.08) 0px, transparent 50%);
```

---

## 🎭 アニメーション

### Timing Functions
```css
/* Bounce */
cubic-bezier(0.34, 1.56, 0.64, 1)

/* Smooth */
cubic-bezier(0.4, 0, 0.2, 1)

/* Ease Out */
cubic-bezier(0, 0, 0.2, 1)
```

### Hover Lift Effect
```css
transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
transform: translateY(-6px);
```

### Scale Hover
```css
transition: all 0.5s ease;
transform: scale(1.02);
```

---

## 🧩 コンポーネント

### Button Styles

#### Primary Button
```css
.btn-primary {
  background: linear-gradient(90deg, #f97316, #ec4899);
  color: white;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.5s ease;
  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);
}

.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.5);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: white;
  color: #f97316;
  border: 2px solid #f97316;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #fff7ed;
  border-color: #ea580c;
}
```

### Card Styles

#### Premium Card
```css
.card-premium {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 4px 16px rgba(0, 0, 0, 0.06),
    0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.5s ease;
}

.card-premium:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow:
    0 4px 16px rgba(249, 115, 22, 0.08),
    0 8px 32px rgba(249, 115, 22, 0.12),
    0 16px 64px rgba(249, 115, 22, 0.16);
}
```

#### Glass Card
```css
.card-glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}
```

---

## 🔗 Figma連携セットアップ

### ステップ1: Figma Personal Access Token の取得

1. Figmaにログイン
2. 左上のアカウントメニュー → **Settings**
3. **Security** タブを選択
4. **Personal Access Tokens** セクションまでスクロール
5. **Generate a new Token** をクリック
6. トークンの説明を入力（例: "WONDERFUL WORLD Design Tokens"）
7. 有効期限を設定（推奨: No expiration）
8. 必要な権限を選択
9. **Generate token** をクリック
10. **トークンをコピーして安全に保存**（この画面を離れると二度と表示されません）

### ステップ2: 環境変数の設定

プロジェクトルートに `.env.local` ファイルを作成（既に存在する場合は追記）：

```bash
# Figma API Token
FIGMA_ACCESS_TOKEN=your_token_here
FIGMA_FILE_KEY=your_file_key_here
```

**注意：** `.env.local` は `.gitignore` に含まれているため、Gitにコミットされません。

### ステップ3: Figma MCP Serverのインストール（オプション）

```bash
npm install -g @figma/mcp-server
```

### ステップ4: デザイントークンの同期スクリプト作成

`scripts/figma-sync-tokens.js` を作成：

```javascript
const fetch = require('node-fetch');
const fs = require('fs');

const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;

async function syncDesignTokens() {
  const response = await fetch(
    `https://api.figma.com/v1/files/${FILE_KEY}`,
    {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    }
  );

  const data = await response.json();

  // カラートークンを抽出
  const colors = extractColors(data);

  // Tailwind configに適用
  updateTailwindConfig(colors);

  console.log('✅ Design tokens synced successfully!');
}

syncDesignTokens();
```

---

## 📦 Figmaファイル構造（推奨）

```
WONDERFUL WORLD Design System
├── 🎨 Colors
│   ├── Primary (50-900)
│   ├── Accent (Gold, Rose, Sand)
│   └── Gradients
├── 📝 Typography
│   ├── Heading Styles
│   ├── Body Styles
│   └── Font Scales
├── 📏 Spacing
│   ├── Section Padding
│   ├── Container Widths
│   └── Component Spacing
├── ✨ Effects
│   ├── Shadows (Card, Premium, Hover)
│   ├── Glassmorphism
│   └── Mesh Gradients
└── 🧩 Components
    ├── Buttons (Primary, Secondary)
    ├── Cards (Premium, Glass, Hover)
    ├── Forms (Input, Textarea)
    └── Navigation
```

---

## 🚀 次のステップ

### Phase 1: デザインシステムの基盤構築
- [ ] Figmaファイルを作成
- [ ] カラーパレットを登録
- [ ] タイポグラフィスタイルを定義
- [ ] コンポーネントライブラリを構築

### Phase 2: 自動化
- [ ] Figma APIトークンを取得
- [ ] デザイントークン同期スクリプトを作成
- [ ] CI/CDに組み込む

### Phase 3: コンポーネント生成
- [ ] Figmaからコンポーネントを自動生成
- [ ] Locofy.aiまたはBuilder.io連携
- [ ] 品質チェックとテスト

---

## 📚 参考リソース

- [Figma REST API Documentation](https://www.figma.com/developers/api)
- [Figma MCP Server](https://www.figma.com/blog/introducing-figma-mcp-server/)
- [Design Tokens Specification](https://design-tokens.github.io/community-group/format/)
- [Locofy.ai - Figma to Next.js](https://www.locofy.ai/convert/figma-to-nextjs)

---

**最終更新:** 2025-10-29
**プロジェクト:** WONDERFUL WORLD
**ステータス:** Phase 1 - デザインシステム基盤構築中

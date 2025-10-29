# WONDERFUL WORLD - Official Website

AI×Beautyで女性が輝く、新しい世界へ

ミスコンテストのファイナリストから生まれたAIモデルインフルエンサープロジェクトの公式ウェブサイト。

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: 全デバイス対応
- **SEO Optimized**: 検索エンジン最適化済み
- **Performance**: 高速表示とスムーズなアニメーション
- **Accessibility**: アクセシビリティに配慮

## 📁 Project Structure

```
WONDERFULWORLD/
├── app/
│   ├── about/          # プロジェクト紹介ページ
│   ├── models/         # モデル一覧・詳細ページ
│   ├── news/           # ニュース一覧・詳細ページ
│   ├── partners/       # パートナーシップページ
│   ├── contact/        # お問い合わせフォーム
│   ├── privacy/        # プライバシーポリシー
│   ├── terms/          # 利用規約
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx        # ホームページ
│   └── globals.css     # グローバルスタイル
├── components/
│   ├── layout/         # ヘッダー・フッター
│   └── home/           # ホームページセクション
└── public/             # 静的ファイル

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📄 Pages

### Public Pages
- **Home** (`/`) - メインページ
- **Models** (`/models`) - AIモデル一覧
- **Model Detail** (`/models/[slug]`) - 各モデル詳細
- **About** (`/about`) - プロジェクト紹介
- **News** (`/news`) - ニュース一覧
- **News Detail** (`/news/[slug]`) - ニュース詳細
- **Partners** (`/partners`) - パートナーシップ案内
- **Contact** (`/contact`) - お問い合わせフォーム
- **Privacy** (`/privacy`) - プライバシーポリシー
- **Terms** (`/terms`) - 利用規約

## 🎨 Design System & Figma Integration

### Premium Design Features

WordPress/Studio-inspired design system with modern visual effects:

- **Multi-layered Shadows**: Professional depth with 3-layer shadow system
- **Glassmorphism**: Frosted glass effects with backdrop filters
- **Neumorphism**: Soft 3D effects for premium feel
- **Mesh Gradients**: Subtle radial gradient backgrounds
- **Smooth Animations**: Bounce and lift effects on hover
- **Gradient Text**: Eye-catching headline styles

### Colors
- **Primary**: Sand beige tones (#F5E6D3)
- **Accent Gold**: #D4AF37
- **Accent Rose**: #E8B4B8

### Typography
- **Headings**: Playfair Display
- **Body**: Inter
- **Japanese Optimization**: Proportional alternates (palt) enabled

### Figma Integration

Complete Figma design system integration for design token synchronization.

**Quick Start**: See [docs/FIGMA_QUICK_START.md](docs/FIGMA_QUICK_START.md) for 5-minute setup

**Full Documentation**:
- [Design System Reference](docs/FIGMA_DESIGN_SYSTEM.md) - Complete token catalog
- [Setup Guide](docs/FIGMA_SETUP_GUIDE.md) - Step-by-step configuration
- [Pre-exported Tokens](docs/DESIGN_TOKENS_EXPORT.json) - Ready-to-use design tokens

**Available Commands**:
```bash
# Sync design tokens from Figma
npm run figma:sync

# Short alias
npm run design:tokens
```

**Premium Utility Classes**:
```css
.mesh-gradient        /* Radial gradient background */
.card-premium         /* Multi-layered shadow card */
.hover-lift           /* Smooth lift on hover */
.glass-premium        /* Glassmorphism effect */
.neumorphism          /* Soft 3D effect */
.gradient-text-sunset /* Gradient text effect */
.border-glow          /* Animated border glow */
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file (see [.env.local.example](.env.local.example)):

```env
# Figma API Configuration (for design token sync)
FIGMA_ACCESS_TOKEN=your_figma_personal_access_token
FIGMA_FILE_KEY=your_figma_file_key

# Google Gemini API (for chatbot)
GEMINI_API_KEY=your_gemini_api_key

# Other APIs (optional)
# NEXT_PUBLIC_API_URL=your_api_url
```

**Getting Figma Credentials**:
1. **Access Token**: Visit [Figma Settings](https://www.figma.com/settings) → Security → Generate Personal Access Token
2. **File Key**: Copy from Figma file URL: `https://www.figma.com/file/FILE_KEY/...`

See [docs/FIGMA_QUICK_START.md](docs/FIGMA_QUICK_START.md) for detailed instructions.

### External Integrations

本プロジェクトは以下の外部サービスとの統合を想定しています：

- **CMS**: Contentful / MicroCMS (for news and content management)
- **E-Commerce**: Shopify (for goods sales)
- **Forms**: Formspark / Netlify Forms (for contact form)
- **Analytics**: Google Analytics 4

## 📝 Content Management

### Adding New Models

モデルデータは現在 `app/models/[slug]/page.tsx` にハードコードされています。
本番環境では、CMSから取得するように変更してください。

### Adding News Articles

ニュース記事も同様に `app/news/[slug]/page.tsx` にハードコードされています。
CMSと連携する場合は、APIから取得するように実装を変更してください。

## 🌐 Internationalization (Future)

将来的な多言語対応に備えて、以下の準備がされています：

- 言語切替UIの配置済み（現在は非表示）
- URL構造の拡張可能性
- next.config.mjs での i18n 設定コメント

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Next.js アプリケーションとして、以下のプラットフォームにもデプロイ可能：
- Netlify
- AWS (Amplify, EC2)
- Google Cloud Platform
- Azure

## 📱 Social Media Integration

SNS埋め込みは現在プレースホルダーです。実際の埋め込みコードに置き換えてください：

- Instagram: [公式埋め込みコード](https://developers.facebook.com/docs/instagram/embedding)
- TikTok: [公式埋め込みコード](https://developers.tiktok.com/doc/embed-videos)

## 🔒 Security

- すべてのフォーム入力にバリデーション実装
- XSS対策（Reactの自動エスケープ）
- HTTPS必須（本番環境）
- プライバシーポリシー・利用規約の明示

## 📞 Support

お問い合わせ: contact@wonderful-world.example

## 📄 License

© 2025 WONDERFUL WORLD Project. All rights reserved.
```

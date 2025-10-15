# 🔧 技術仕様書 - サイトリニューアル

## 📋 実装仕様

### 1. ファイル構成

```
WONDERFULWORLD/
├── app/
│   ├── page.tsx                          # 新トップページ（会社概要）
│   ├── about/
│   │   └── page.tsx                      # About Us（更新）
│   ├── business/
│   │   ├── ai-models/
│   │   │   ├── page.tsx                  # AIモデル事業トップ
│   │   │   ├── models/
│   │   │   │   ├── page.tsx              # モデル一覧（旧 /models）
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx          # モデル詳細
│   │   │   └── news/
│   │   │       ├── page.tsx              # ニュース一覧（旧 /news）
│   │   │       └── [slug]/
│   │   │           └── page.tsx          # ニュース詳細
│   │   └── gym/
│   │       └── page.tsx                  # ジム事業ページ（新規）
│   ├── contact/
│   │   └── page.tsx                      # お問い合わせ（更新）
│   └── ...
│
├── components/
│   ├── company/
│   │   ├── HeroSection.tsx               # ヒーローセクション
│   │   ├── PhilosophySection.tsx         # 企業理念セクション
│   │   ├── BusinessCards.tsx             # 事業紹介カード
│   │   ├── CEOMessageSection.tsx         # 代表挨拶セクション
│   │   └── CompanyInfoSection.tsx        # 会社情報セクション
│   ├── business/
│   │   ├── AIModelsHero.tsx              # AIモデル事業ヒーロー
│   │   ├── GymHero.tsx                   # ジム事業ヒーロー
│   │   ├── GymFacilities.tsx             # ジム施設紹介
│   │   └── GymAccess.tsx                 # アクセス情報
│   └── layout/
│       ├── Header.tsx                    # ヘッダー（更新）
│       └── Footer.tsx                    # フッター（更新）
│
├── data/
│   ├── company-info.ts                   # 会社情報データ
│   ├── ceo-message.ts                    # 代表挨拶データ
│   ├── gym-info.ts                       # ジム事業情報
│   └── chatbot-faq.ts                    # FAQ（更新）
│
└── public/
    └── images/
        ├── company/                      # 会社関連画像
        ├── business/
        │   ├── ai-models/                # AIモデル事業画像
        │   └── gym/                      # ジム事業画像
        └── ceo/                          # 代表写真
```

---

## 🎨 コンポーネント仕様

### 1. トップページコンポーネント

#### 1.1 HeroSection.tsx
```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  message: string;
  ctaButtons: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
}

// 実装:
// - フルスクリーンヒーロー
// - グラデーション背景
// - アニメーション（Framer Motion）
// - 2つのCTAボタン
```

#### 1.2 PhilosophySection.tsx
```typescript
interface PhilosophyItem {
  title: string;
  content: string;
  icon?: string;
}

interface PhilosophySectionProps {
  philosophy: PhilosophyItem;
  vision: PhilosophyItem;
  mission: PhilosophyItem;
}

// 実装:
// - 3カラムレイアウト
// - アイコン + テキスト
// - ホバーアニメーション
```

#### 1.3 BusinessCards.tsx
```typescript
interface Business {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  externalUrl?: string;
}

interface BusinessCardsProps {
  businesses: Business[];
}

// 実装:
// - 2カラムカードレイアウト
// - 画像 + 説明 + CTAボタン
// - ホバーエフェクト
```

#### 1.4 CEOMessageSection.tsx
```typescript
interface CEOMessageSectionProps {
  name: string;
  title: string;
  message: string;
  photo?: string;
  fullMessageUrl?: string;
}

// 実装:
// - 左右2カラム（デスクトップ）
// - 1カラム（モバイル）
// - 写真 + 挨拶文（抜粋）
// - "続きを読む"リンク
```

#### 1.5 CompanyInfoSection.tsx
```typescript
interface CompanyInfoSectionProps {
  established: string;
  representative: string;
  headquarters: string;
  offices: number;
  businesses: number;
}

// 実装:
// - インフォグラフィックスタイル
// - 数値のカウントアップアニメーション
// - アイコン + テキスト
```

### 2. ジム事業ページコンポーネント

#### 2.1 GymHero.tsx
```typescript
interface GymHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  externalUrl: string;
}

// 実装:
// - フルスクリーン背景画像
// - オーバーレイ
// - CTAボタン（外部リンク）
```

#### 2.2 GymFacilities.tsx
```typescript
interface Facility {
  title: string;
  description: string;
  icon: string;
}

interface GymFacilitiesProps {
  facilities: Facility[];
}

// 実装:
// - グリッドレイアウト
// - アイコン + 説明
// - スクロールアニメーション
```

#### 2.3 GymAccess.tsx
```typescript
interface Office {
  name: string;
  address: string;
  postalCode: string;
  phone?: string;
  hours?: string;
  mapUrl?: string;
}

interface GymAccessProps {
  headquarters: Office;
}

// 実装:
// - 地図埋め込み（Google Maps）
// - 住所・営業時間表示
// - ルート検索リンク
```

---

## 📊 データスキーマ

### 1. company-info.ts

```typescript
export interface CompanyInfo {
  name: string;
  nameEn: string;
  established: string;
  representative: string;

  offices: {
    headquarters: Office;
    tokyo: Office;
  };

  philosophy: Content;
  vision: Content;
  mission: Content;
  values: Value[];
  purpose: Content;
  message: string;

  businesses: Business[];
}

interface Office {
  postalCode: string;
  address: string;
  phone?: string;
  hours?: string;
}

interface Content {
  title: string;
  content: string;
}

interface Value {
  title: string;
  description: string;
}

interface Business {
  id: string;
  name: string;
  description: string;
  url: string;
  externalUrl?: string;
  image?: string;
}
```

### 2. gym-info.ts

```typescript
export interface GymInfo {
  name: string;
  tagline: string;
  description: string;
  externalUrl: string;

  facilities: Facility[];

  location: {
    headquarters: Office;
  };

  pricing?: PricePlan[];
  gallery?: string[];
}

interface Facility {
  title: string;
  description: string;
  icon: string;
}

interface PricePlan {
  name: string;
  price: number;
  duration: string;
  features: string[];
}
```

---

## 🔄 URL構造

### リダイレクト設定

```typescript
// next.config.js
module.exports = {
  async redirects() {
    return [
      // 旧 /models → 新 /business/ai-models/models
      {
        source: '/models',
        destination: '/business/ai-models/models',
        permanent: true, // 301リダイレクト
      },
      {
        source: '/models/:slug',
        destination: '/business/ai-models/models/:slug',
        permanent: true,
      },

      // 旧 /news → 新 /business/ai-models/news
      {
        source: '/news',
        destination: '/business/ai-models/news',
        permanent: true,
      },
      {
        source: '/news/:slug',
        destination: '/business/ai-models/news/:slug',
        permanent: true,
      },
    ];
  },
};
```

---

## 🎨 スタイリング

### カラーパレット（現行維持）

```css
/* tailwind.config.js */
colors: {
  orange: {
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
  },
  green: {
    600: '#16a34a',
    700: '#15803d',
  }
}
```

### 新規追加カラー

```css
colors: {
  corporate: {
    primary: '#f97316',    // オレンジ（既存）
    secondary: '#16a34a',   // グリーン（既存）
    accent: '#1e40af',      // ブルー（新規：会社情報用）
  }
}
```

### タイポグラフィ

```css
// 見出し
h1: Playfair Display, 48px, font-bold
h2: Playfair Display, 36px, font-bold
h3: Playfair Display, 28px, font-semibold

// 本文
body: Inter, 16px, font-normal
small: Inter, 14px, font-normal
```

---

## 📱 レスポンシブ対応

### ブレークポイント

```typescript
sm: '640px'   // モバイル（横）
md: '768px'   // タブレット
lg: '1024px'  // デスクトップ
xl: '1280px'  // ワイドデスクトップ
```

### レイアウト変更

```
デスクトップ（lg以上）:
- PhilosophySection: 3カラム
- BusinessCards: 2カラム
- CEOMessage: 左右2カラム

タブレット（md-lg）:
- PhilosophySection: 2カラム
- BusinessCards: 2カラム
- CEOMessage: 1カラム

モバイル（sm以下）:
- PhilosophySection: 1カラム
- BusinessCards: 1カラム
- CEOMessage: 1カラム
```

---

## 🔍 SEO設定

### メタデータ

```typescript
// app/page.tsx（新トップページ）
export const metadata: Metadata = {
  title: 'Wonderful World 合同会社 | AI×ご縁で、人と富をつなぐ',
  description: 'Wonderful World 合同会社は、AIモデルインフルエンサー事業とジム事業を展開。AIと人の力を融合し、挑戦する人に誠実な豊かさを提供します。',
  keywords: ['Wonderful World', 'AI', 'モデルインフルエンサー', '3BGYM', 'ジム', '帯広', '新宿', 'コンサルティング'],
  openGraph: {
    title: 'Wonderful World 合同会社',
    description: 'AI×ご縁で、人と富をつなぐ',
    type: 'website',
    locale: 'ja_JP',
  },
};

// app/business/ai-models/page.tsx
export const metadata: Metadata = {
  title: 'AIモデルインフルエンサー事業 | Wonderful World 合同会社',
  description: 'ミスコンテストファイナリストのセカンドキャリアを支援。AIモデルの育成・運営で新たな可能性を創造します。',
  // ...
};

// app/business/gym/page.tsx
export const metadata: Metadata = {
  title: 'ジム事業（3BGYM）| Wonderful World 合同会社',
  description: 'あなたの可能性を最大化するフィットネス。北海道帯広市で展開中。',
  // ...
};
```

### 構造化データ

```typescript
// components/StructuredData.tsx
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Wonderful World 合同会社",
  "foundingDate": "2015-10",
  "founder": {
    "@type": "Person",
    "name": "藤山 嘉彦"
  },
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "東3条南10丁目15-1",
      "addressLocality": "帯広市",
      "addressRegion": "北海道",
      "postalCode": "080-0803",
      "addressCountry": "JP"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "内藤町1-127 レックス神宮外苑 902",
      "addressLocality": "新宿区",
      "addressRegion": "東京都",
      "postalCode": "160-0014",
      "addressCountry": "JP"
    }
  ],
  "sameAs": [
    "https://3bgym.net"
  ]
}
```

---

## 🧪 テストチェックリスト

### 機能テスト
- [ ] トップページが正常に表示される
- [ ] ナビゲーションメニューが動作する
- [ ] 事業ページへのリンクが正しい
- [ ] リダイレクトが正常に機能する
- [ ] チャットボットが動作する
- [ ] お問い合わせフォームが送信できる

### レスポンシブテスト
- [ ] モバイル（375px）で表示確認
- [ ] タブレット（768px）で表示確認
- [ ] デスクトップ（1280px）で表示確認
- [ ] 4K（2560px）で表示確認

### SEOテスト
- [ ] メタタグが正しく設定されている
- [ ] OGP画像が表示される
- [ ] 構造化データが有効
- [ ] sitemap.xmlが更新されている
- [ ] robots.txtが適切

### パフォーマンステスト
- [ ] Lighthouse スコア > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] 画像が最適化されている

---

## 🚀 デプロイ手順

### 1. ステージング環境

```bash
# ステージングブランチを作成
git checkout -b staging/site-renewal

# 実装・テスト
npm run dev

# ビルド確認
npm run build

# プレビューデプロイ
vercel --prod=false
```

### 2. 本番環境

```bash
# mainブランチにマージ
git checkout main
git merge staging/site-renewal

# 最終確認
npm run build

# 本番デプロイ
git push origin main

# Vercel自動デプロイ確認
```

---

## 📅 実装スケジュール

### Week 1: データ準備・基礎実装
- Day 1-2: データファイル作成（company-info, gym-info, ceo-message）
- Day 3-4: 共通コンポーネント実装（Hero, Section, Cards）
- Day 5: FAQデータベース更新

### Week 2: ページ実装
- Day 6-7: 新トップページ実装
- Day 8: AIモデル事業ページ実装
- Day 9: ジム事業ページ実装
- Day 10: About/Contactページ更新

### Week 3: テスト・デプロイ
- Day 11-12: レスポンシブテスト
- Day 13: SEO設定・構造化データ
- Day 14: ステージング環境テスト
- Day 15: 本番デプロイ

---

**作成日**: 2025-10-15
**バージョン**: 1.0.0
**ステータス**: 仕様確定 → 実装開始可能

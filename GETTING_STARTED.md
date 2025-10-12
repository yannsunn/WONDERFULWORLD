# 🚀 Getting Started - WONDERFUL WORLD

このガイドでは、WONDERFUL WORLD ウェブサイトを起動し、カスタマイズする方法を説明します。

## 📋 前提条件

以下がインストールされていることを確認してください：

- **Node.js** 18.0 以上
- **npm** または **yarn**
- **Git** （オプション、バージョン管理用）

確認方法：
```bash
node --version  # v18.0.0 以上
npm --version   # 10.0.0 以上
```

## 🎯 クイックスタート

### ステップ1: プロジェクトの確認

プロジェクトフォルダに移動：
```bash
cd c:\Users\march\Projects\websites\WONDERFULWORLD
```

### ステップ2: 依存関係のインストール

```bash
npm install
```

### ステップ3: 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

サイトが表示されれば成功です！🎉

## 📂 プロジェクト構造の理解

```
WONDERFULWORLD/
├── app/                    # ページとルーティング
│   ├── page.tsx           # ホームページ
│   ├── about/             # プロジェクト紹介
│   ├── models/            # AIモデル関連
│   ├── news/              # ニュース
│   ├── partners/          # パートナーシップ
│   ├── contact/           # お問い合わせ
│   ├── privacy/           # プライバシーポリシー
│   └── terms/             # 利用規約
├── components/            # 再利用可能なコンポーネント
│   ├── layout/           # ヘッダー・フッター
│   └── home/             # ホームページのセクション
├── public/               # 静的ファイル（画像など）
└── 設定ファイル群
```

## ✏️ コンテンツの編集

### モデル情報の変更

**ファイル**: [app/models/[slug]/page.tsx](app/models/[slug]/page.tsx)

```typescript
const modelsData: Record<string, any> = {
  aihana: {
    name: 'AI Hana',
    description: '説明文をここに...',
    // ... その他の情報
  },
  // 新しいモデルを追加
  ainewmodel: {
    name: 'AI New Model',
    // ...
  }
};
```

### ニュース記事の追加

**ファイル**: [app/news/[slug]/page.tsx](app/news/[slug]/page.tsx)

```typescript
const newsData: Record<string, any> = {
  '2025-10-01-launch': {
    title: '記事タイトル',
    content: '記事本文...',
    // ...
  },
  // 新しい記事を追加
  '2025-11-01-new-article': {
    // ...
  }
};
```

### ホームページの編集

各セクションは個別のコンポーネントに分かれています：

- **ヒーロー**: [components/home/HeroSection.tsx](components/home/HeroSection.tsx)
- **コンセプト**: [components/home/ConceptSection.tsx](components/home/ConceptSection.tsx)
- **モデル**: [components/home/ModelsHighlight.tsx](components/home/ModelsHighlight.tsx)
- その他...

## 🎨 スタイルのカスタマイズ

### カラーの変更

**ファイル**: [tailwind.config.ts](tailwind.config.ts)

```typescript
colors: {
  primary: {
    // 色を変更
    500: '#あなたの色',
  },
  accent: {
    gold: '#D4AF37',  // ゴールド
    rose: '#E8B4B8',  // ローズ
  },
}
```

### フォントの変更

**ファイル**: [app/layout.tsx](app/layout.tsx)

```typescript
import { Inter, Playfair_Display } from "next/font/google";
// 他のGoogle Fontsに変更可能
```

## 🖼️ 画像の追加

### 方法1: public フォルダ

```
public/
├── images/
│   ├── models/
│   │   ├── ai-hana.jpg
│   │   └── ai-reina.jpg
│   └── logo.png
```

使用方法：
```tsx
<Image src="/images/models/ai-hana.jpg" alt="AI Hana" />
```

### 方法2: 外部URL（現在の方法）

```tsx
<Image
  src="https://images.unsplash.com/..."
  alt="Model"
/>
```

## 🔌 外部サービスとの連携

### 1. CMSの設定（Contentful例）

1. Contentfulアカウント作成
2. Space IDとAccess Tokenを取得
3. `.env.local` ファイル作成：

```env
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_token
```

4. データ取得コードの追加：

```typescript
// lib/contentful.ts
import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
})
```

### 2. お問い合わせフォームの設定（Formspark例）

1. Formspark アカウント作成
2. Form ID を取得
3. `.env.local` に追加：

```env
NEXT_PUBLIC_FORMSPARK_FORM_ID=your_form_id
```

4. [app/contact/page.tsx](app/contact/page.tsx) を更新：

```typescript
const response = await fetch(
  `https://submit-form.com/${process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID}`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  }
);
```

### 3. Instagram埋め込みの実装

[components/home/SocialMediaSection.tsx](components/home/SocialMediaSection.tsx) で：

```tsx
{/* 現在のプレースホルダーを置き換え */}
<blockquote
  className="instagram-media"
  data-instgrm-permalink="https://www.instagram.com/p/POST_ID/"
>
</blockquote>
<script async src="//www.instagram.com/embed.js"></script>
```

## 🚀 デプロイ

### Vercelへのデプロイ（推奨）

1. GitHub リポジトリにプッシュ
2. [Vercel](https://vercel.com) にログイン
3. "New Project" をクリック
4. GitHubリポジトリを選択
5. "Deploy" をクリック

自動的にデプロイされます！

### 環境変数の設定

Vercel ダッシュボードで：
1. プロジェクト → Settings → Environment Variables
2. `.env.local` の内容を追加

## 🛠️ よく使うコマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動（ビルド後）
npm start

# リント（コード品質チェック）
npm run lint

# 型チェック
npx tsc --noEmit
```

## 📝 コンテンツ更新のワークフロー

### 日常的な更新

1. **ニュース記事の追加**
   - `app/news/[slug]/page.tsx` を編集
   - または CMS から追加（CMS連携後）

2. **モデル情報の更新**
   - `app/models/[slug]/page.tsx` を編集
   - フォロワー数などの統計を更新

3. **画像の更新**
   - `public/images/` に新しい画像を追加
   - コンポーネント内の画像パスを更新

### 大きな変更

1. **新しいページの追加**
   ```bash
   # app/ 配下に新しいフォルダを作成
   mkdir app/new-page
   # page.tsx を作成
   touch app/new-page/page.tsx
   ```

2. **ナビゲーションに追加**
   - [components/layout/Header.tsx](components/layout/Header.tsx) を編集

## ❓ よくある質問

### Q: ページが表示されない
A: 開発サーバーが起動しているか確認してください：
```bash
npm run dev
```

### Q: スタイルが反映されない
A: Tailwindのキャッシュをクリア：
```bash
rm -rf .next
npm run dev
```

### Q: ビルドエラーが出る
A: 依存関係を再インストール：
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Q: 画像が表示されない
A: [next.config.mjs](next.config.mjs) で画像ドメインが許可されているか確認：
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-image-domain.com',
    },
  ],
}
```

## 📚 参考資料

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

## 🆘 サポート

問題が解決しない場合：

1. [README.md](README.md) を確認
2. [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) で実装詳細を確認
3. [DEVELOPMENT_ROADMAP.md](DEVELOPMENT_ROADMAP.md) で今後の計画を確認

## 🎉 次のステップ

1. ✅ ローカル環境で動作確認
2. 📝 コンテンツをカスタマイズ
3. 🎨 デザインを調整
4. 🔌 外部サービスと連携
5. 🚀 本番環境にデプロイ

頑張ってください！ 🚀

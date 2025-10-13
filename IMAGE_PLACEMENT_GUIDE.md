# 🖼️ 画像配置・更新ガイド

## 📁 作成した画像フォルダ

```
public/images/
├── models/          # モデル画像（メイン・プロフィール）
├── hero/           # トップページのヒーロー画像
├── news/           # ニュース記事画像
├── about/          # Aboutページ用画像
└── goods/          # グッズ商品画像
```

---

## 📸 画像を配置する手順

### ステップ1: 画像をフォルダに配置

1. 実際のミスユニバース関連の画像を用意
2. 上記のフォルダに配置
3. ファイル名は推奨名に従う（詳細は `public/images/README.md` 参照）

### ステップ2: 配置した画像を確認

画像を配置したら、以下の情報を教えてください：

```
例：
- aihana-main.jpg をモデルフォルダに配置
- hero-main.jpg をヒーローフォルダに配置
- team-photo.jpg をaboutフォルダに配置
```

### ステップ3: 一緒にコード更新

画像の配置場所と使用目的を確認しながら、以下のファイルを更新します：

---

## 🔄 更新が必要なファイル一覧

### 1. モデル画像の更新

**ファイル**: `app/models/[slug]/page.tsx`

```typescript
// 現在（プレースホルダー）
image: 'https://images.unsplash.com/...'

// 更新後（実際の画像）
image: '/images/models/aihana-main.jpg'
```

**対象箇所**:
- AI Hana のメイン画像
- AI Reina のメイン画像
- AI Misaki のメイン画像

---

### 2. モデル一覧ページ

**ファイル**: `app/models/page.tsx`

同様に画像パスを更新

---

### 3. ホームページ - モデルハイライト

**ファイル**: `components/home/ModelsHighlight.tsx`

```typescript
const featuredModels = [
  {
    id: 'aihana',
    name: 'AI Hana',
    // 画像パスを更新
    image: '/images/models/aihana-profile.jpg',
  },
  // ...
];
```

---

### 4. ヒーローセクション（オプション）

**ファイル**: `components/home/HeroSection.tsx`

背景画像を追加する場合：

```tsx
<section
  className="relative h-screen..."
  style={{ backgroundImage: 'url(/images/hero/hero-main.jpg)' }}
>
```

---

### 5. ニュース記事画像

**ファイル**: `app/news/[slug]/page.tsx`

各ニュース記事にサムネイル画像を追加

---

### 6. Aboutページ

**ファイル**: `app/about/page.tsx`

チーム写真や説明用画像を追加

---

### 7. グッズセクション

**ファイル**: `components/home/GoodsSection.tsx`

```typescript
const featuredGoods = [
  {
    id: 1,
    name: 'AI Hana 1st Photo Book',
    // 商品画像を更新
    image: '/images/goods/photobook-aihana.jpg',
  },
  // ...
];
```

---

## 🎯 更新の進め方

### 相談しながら進める流れ：

1. **画像を配置**
   - あなた: 画像をフォルダに配置
   - 私: 配置された画像を確認

2. **使用場所を決定**
   - 一緒に: どの画像をどこに使うか相談
   - 一緒に: サイズや配置を確認

3. **コード更新**
   - 私: 該当ファイルを更新
   - 私: 変更内容を説明

4. **確認・調整**
   - あなた: ローカルで確認
   - 一緒に: 必要に応じて調整

5. **デプロイ**
   - 私: GitHubにプッシュ
   - Vercel: 自動デプロイ

---

## 📝 画像情報シート

画像を配置したら、以下のような情報を教えてください：

```markdown
### 配置した画像

1. **モデル画像**
   - [ ] AI Hana メイン画像: aihana-main.jpg
   - [ ] AI Hana プロフィール: aihana-profile.jpg
   - [ ] AI Reina メイン画像: aireina-main.jpg
   - [ ] AI Reina プロフィール: aireina-profile.jpg
   - [ ] AI Misaki メイン画像: aimisaki-main.jpg
   - [ ] AI Misaki プロフィール: aimisaki-profile.jpg

2. **ヒーロー画像**
   - [ ] メインビジュアル: hero-main.jpg

3. **その他**
   - [ ] ニュース画像: （ファイル名）
   - [ ] About画像: （ファイル名）
   - [ ] グッズ画像: （ファイル名）
```

---

## 💡 Tips

### 画像の最適化

配置前に画像を最適化することをおすすめします：

1. **オンラインツール**
   - TinyPNG: https://tinypng.com/
   - Squoosh: https://squoosh.app/

2. **推奨サイズ**
   - モデルメイン: 800x1200px
   - モデルプロフィール: 400x600px
   - ヒーロー: 1920x1080px
   - グッズ: 800x800px

3. **ファイル形式**
   - JPG: 写真
   - PNG: ロゴ・透過が必要な画像
   - WebP: 次世代フォーマット（推奨）

---

## 🚀 次のステップ

1. ✅ フォルダ作成完了
2. 📸 画像を配置（あなた）
3. 👀 配置した画像を確認（私）
4. 💬 使用場所を相談（一緒に）
5. 🔧 コード更新（私）
6. ✨ デプロイ（私）

---

**準備完了です！**

画像を `public/images/` フォルダに配置したら教えてください。
配置した画像を確認しながら、どこに使うか一緒に決めていきましょう！ 🎨

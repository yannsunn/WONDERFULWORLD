# 画像配置ガイド

このフォルダには、WONDERFUL WORLD サイトで使用する実際の画像を配置します。

## 📁 フォルダ構造

```
public/images/
├── models/          # AIモデルの画像
├── hero/           # ヒーローセクション用画像
├── news/           # ニュース記事用画像
├── about/          # プロジェクト紹介用画像
└── goods/          # グッズ商品画像
```

## 📸 画像配置ガイド

### 1. モデル画像 (`models/`)

各AIモデルの写真を配置してください。

**推奨ファイル名**:
- `aihana-main.jpg` - AI Hanaのメイン画像
- `aihana-profile.jpg` - AI Hanaのプロフィール画像
- `aireina-main.jpg` - AI Reinaのメイン画像
- `aireina-profile.jpg` - AI Reinaのプロフィール画像
- `aimisaki-main.jpg` - AI Misakiのメイン画像
- `aimisaki-profile.jpg` - AI Misakiのプロフィール画像

**推奨サイズ**:
- メイン画像: 800x1200px（縦長）
- プロフィール画像: 400x600px（縦長）
- 形式: JPG または WebP
- ファイルサイズ: 各500KB以下（最適化推奨）

### 2. ヒーロー画像 (`hero/`)

トップページのメインビジュアル用の画像

**推奨ファイル名**:
- `hero-main.jpg` - メインビジュアル（複数モデルの集合写真など）
- `hero-bg.jpg` - 背景画像（オプション）

**推奨サイズ**:
- 1920x1080px（16:9）または 1920x1200px
- 形式: JPG または WebP
- ファイルサイズ: 1MB以下

### 3. ニュース画像 (`news/`)

各ニュース記事のサムネイル画像

**推奨ファイル名**:
- `2025-10-01-launch.jpg`
- `2025-09-20-media.jpg`
- （記事のスラッグに合わせて命名）

**推奨サイズ**:
- 1200x630px（OG画像サイズ）
- 形式: JPG
- ファイルサイズ: 300KB以下

### 4. プロジェクト紹介画像 (`about/`)

Aboutページで使用する画像

**推奨ファイル名**:
- `team-photo.jpg` - チーム写真
- `mission.jpg` - ミッション関連画像
- `ai-technology.jpg` - AI技術説明用画像
- `support-women.jpg` - 女性支援イメージ画像

**推奨サイズ**:
- 800x600px または 1200x800px（横長）
- 形式: JPG
- ファイルサイズ: 500KB以下

### 5. グッズ画像 (`goods/`)

公式グッズの商品画像

**推奨ファイル名**:
- `photobook-aihana.jpg`
- `tshirt-white.jpg`
- `acrylic-stand-aireina.jpg`

**推奨サイズ**:
- 800x800px（正方形）
- 形式: JPG または PNG（透過が必要な場合）
- ファイルサイズ: 300KB以下

## 🔄 画像を配置した後の作業

画像を配置したら、以下のファイルを更新します：

1. **モデル詳細ページ**: `app/models/[slug]/page.tsx`
2. **モデル一覧ページ**: `app/models/page.tsx`
3. **ホームページ**: `components/home/ModelsHighlight.tsx`
4. **ヒーローセクション**: `components/home/HeroSection.tsx`
5. **ニュースページ**: `app/news/[slug]/page.tsx`
6. **Aboutページ**: `app/about/page.tsx`
7. **グッズセクション**: `components/home/GoodsSection.tsx`

## 📝 画像パスの例

```tsx
// 例: モデル画像の使用方法
import Image from 'next/image';

<Image
  src="/images/models/aihana-main.jpg"
  alt="AI Hana"
  width={800}
  height={1200}
/>
```

## ✅ 画像最適化のヒント

1. **圧縮**: TinyPNG や ImageOptim で最適化
2. **WebP変換**: 次世代フォーマットで配信
3. **レスポンシブ**: 複数サイズを用意（オプション）
4. **遅延読み込み**: Next.jsが自動で対応

## 📞 相談事項

画像を配置したら、以下を一緒に確認しましょう：

- [ ] どの画像をどのページに使用するか
- [ ] 画像の配置位置とサイズ
- [ ] 代替テキスト（alt）の内容
- [ ] レスポンシブ対応の確認

---

**準備完了！**
画像をこのフォルダに配置してください。配置後、どこに使用するか一緒に決めていきましょう！

# 🎨 Special Layouts Guide

特殊なレイアウトパターンの完全ガイド

---

## 📚 目次

1. [概要](#概要)
2. [使用方法](#使用方法)
3. [レイアウトパターン一覧](#レイアウトパターン一覧)
4. [実装例](#実装例)
5. [レスポンシブ対応](#レスポンシブ対応)

---

## 概要

このプロジェクトには、一般的なグリッドレイアウトを超えた12種類の特殊なレイアウトパターンが実装されています。

### 利用可能なレイアウト

1. **Masonry Layout** - Pinterest風の段組みレイアウト
2. **Bento Box Layout** - Apple風の非対称グリッド
3. **Magazine Layout** - 雑誌風の12カラムグリッド
4. **Zigzag Layout** - 交互に配置されるコンテンツ
5. **Split Screen Layout** - 固定サイドバー付き分割画面
6. **Floating Cards** - 浮遊する回転カード
7. **Diagonal Layout** - 斜めに傾いた要素
8. **Overlapping Layout** - 重なり合うカード
9. **Holy Grail Layout** - クラシック3カラムレイアウト
10. **Swiss Poster Layout** - スイススタイルの8×8グリッド
11. **Mosaic Layout** - 動的なサイズのタイル配置
12. **Golden Ratio Layout** - 黄金比(1.618:1)レイアウト

---

## 使用方法

### CSS Classes方式

```html
<!-- HTMLで直接クラスを使用 -->
<div class="layout-masonry">
  <div class="layout-masonry-item">コンテンツ1</div>
  <div class="layout-masonry-item">コンテンツ2</div>
</div>
```

### React Components方式（推奨）

```tsx
import { MasonryLayout, MasonryItem } from '@/components/layout/SpecialLayouts';

export default function MyPage() {
  return (
    <MasonryLayout columns={3} gap={24}>
      <MasonryItem>コンテンツ1</MasonryItem>
      <MasonryItem>コンテンツ2</MasonryItem>
    </MasonryLayout>
  );
}
```

---

## レイアウトパターン一覧

### 1. Masonry Layout (Pinterest風)

**用途**: 画像ギャラリー、ブログ記事一覧、ポートフォリオ

```tsx
import { MasonryLayout, MasonryItem } from '@/components/layout/SpecialLayouts';

<MasonryLayout columns={3} gap={24}>
  <MasonryItem>
    <img src="/image1.jpg" alt="..." />
    <h3>タイトル1</h3>
  </MasonryItem>
  <MasonryItem>
    <img src="/image2.jpg" alt="..." />
    <h3>タイトル2</h3>
  </MasonryItem>
</MasonryLayout>
```

**特徴**:
- カラム数は自動でレスポンシブ (PC: 3列, タブレット: 2列, モバイル: 1列)
- 高さが異なるアイテムも美しく配置
- CSS Columnsベースで軽量

---

### 2. Bento Box Layout (Apple風)

**用途**: ダッシュボード、機能紹介ページ、ヒーローセクション

```tsx
import { BentoLayout } from '@/components/layout/SpecialLayouts';

<BentoLayout pattern={1}>
  <div>大きな要素 (2x2)</div>
  <div>小さな要素</div>
  <div>縦長要素</div>
  <div>縦長要素</div>
  <div>横長要素</div>
</BentoLayout>
```

**パターン1** (4x3グリッド):
```
┌─────┬───┐
│  1  │ 2 │
│     ├───┤
├─────┤ 3 │
│  5  ├───┤
└─────┴ 4 ┘
```

**パターン2** (6x4グリッド):
```
┌───────┬─────┐
│   1   │  2  │
│       ├──┬──┤
├───┬───┤3 │4 │
│ 6 │ 7 ├──┴──┤
│   │   │  5  │
└───┴───┴─────┘
```

---

### 3. Magazine Layout (雑誌風)

**用途**: ブログトップページ、ニュースサイト、メディアサイト

```tsx
import {
  MagazineLayout,
  MagazineHero,
  MagazineMain,
  MagazineSidebar,
  MagazineFeature,
  MagazineSecondary
} from '@/components/layout/SpecialLayouts';

<MagazineLayout>
  <MagazineHero>
    メイン記事の大きな画像とタイトル
  </MagazineHero>

  <MagazineMain>
    本文コンテンツ
  </MagazineMain>

  <MagazineSidebar>
    サイドバー (人気記事、カテゴリなど)
  </MagazineSidebar>

  <MagazineFeature>
    特集記事
  </MagazineFeature>

  <MagazineSecondary>
    関連記事
  </MagazineSecondary>
</MagazineLayout>
```

**グリッド構造**: 12カラムシステム
- Hero: 全幅 (1-13)
- Main: 8カラム (1-9)
- Sidebar: 4カラム (9-13)
- Feature: 6カラム (1-7)
- Secondary: 6カラム (7-13)

---

### 4. Zigzag Layout (交互配置)

**用途**: 機能説明、サービス紹介、ステップ説明

```tsx
import {
  ZigzagLayout,
  ZigzagItem,
  ZigzagContent,
  ZigzagMedia
} from '@/components/layout/SpecialLayouts';

<ZigzagLayout>
  <ZigzagItem>
    <ZigzagContent>
      <h3>機能1</h3>
      <p>説明文...</p>
    </ZigzagContent>
    <ZigzagMedia>
      <img src="/feature1.jpg" alt="..." />
    </ZigzagMedia>
  </ZigzagItem>

  <ZigzagItem>
    {/* 2番目は自動で左右反転 */}
    <ZigzagContent>
      <h3>機能2</h3>
      <p>説明文...</p>
    </ZigzagContent>
    <ZigzagMedia>
      <img src="/feature2.jpg" alt="..." />
    </ZigzagMedia>
  </ZigzagItem>
</ZigzagLayout>
```

**動作**:
- 奇数番目: コンテンツ左、画像右
- 偶数番目: 画像左、コンテンツ右
- モバイルでは縦一列に

---

### 5. Split Screen Layout (分割画面)

**用途**: ランディングページ、プロダクトページ、Before/After比較

```tsx
import { SplitLayout, SplitLeft, SplitRight } from '@/components/layout/SpecialLayouts';

<SplitLayout>
  <SplitLeft>
    {/* 左側は固定 (sticky) */}
    <h1>サービス名</h1>
    <p>キャッチコピー</p>
    <button>今すぐ始める</button>
  </SplitLeft>

  <SplitRight>
    {/* 右側はスクロール可能 */}
    <section>機能1</section>
    <section>機能2</section>
    <section>機能3</section>
  </SplitRight>
</SplitLayout>
```

**特徴**:
- 左側は`position: sticky`で固定
- 右側をスクロールしても左側は表示されたまま
- タブレット以下では縦一列に

---

### 6. Floating Cards (浮遊カード)

**用途**: クリエイティブなヒーロー、ポートフォリオ、イベントページ

```tsx
import { FloatingLayout, FloatingCard } from '@/components/layout/SpecialLayouts';

<FloatingLayout>
  <FloatingCard position={1}>
    カード1 (左上)
  </FloatingCard>

  <FloatingCard position={2}>
    カード2 (右上、-5度回転)
  </FloatingCard>

  <FloatingCard position={3}>
    カード3 (左下、3度回転)
  </FloatingCard>

  <FloatingCard position={4}>
    カード4 (中央、-2度回転)
  </FloatingCard>
</FloatingLayout>
```

**アニメーション**:
- ホバー時: `scale(1.05) rotate(2deg)`
- トランジション: `cubic-bezier(0.34, 1.56, 0.64, 1)` (バウンス効果)
- z-indexが自動で調整される

---

### 7. Diagonal Layout (斜めレイアウト)

**用途**: モダンなセクション区切り、動的なデザイン

```tsx
import { DiagonalLayout, DiagonalItem } from '@/components/layout/SpecialLayouts';

<DiagonalLayout>
  <DiagonalItem>
    <h3>サービス1</h3>
    <p>説明...</p>
  </DiagonalItem>

  <DiagonalItem>
    <h3>サービス2</h3>
    <p>説明...</p>
  </DiagonalItem>
</DiagonalLayout>
```

**動作**:
- 親要素: `skewY(-3deg)` で傾斜
- 子要素: `skewY(3deg)` で反転して正常表示
- ホバー時: わずかにスケールアップ

---

### 8. Overlapping Layout (重なりレイアウト)

**用途**: 写真スタック、カードデッキ風、タイムライン

```tsx
import { OverlapLayout, OverlapItem } from '@/components/layout/SpecialLayouts';

<OverlapLayout>
  <OverlapItem>カード1</OverlapItem>
  <OverlapItem>カード2 (重なる)</OverlapItem>
  <OverlapItem>カード3 (重なる)</OverlapItem>
</OverlapLayout>
```

**動作**:
- 2番目以降: `margin-left: -80px` で重なる
- ホバー時: `translateY(-20px) scale(1.05)` で浮き上がる
- z-indexが自動調整され、ホバーした要素が最前面に

---

### 9. Holy Grail Layout (3カラム)

**用途**: クラシックなWebサイトレイアウト、管理画面

```tsx
import {
  HolyGrailLayout,
  HolyGrailHeader,
  HolyGrailSidebarLeft,
  HolyGrailMain,
  HolyGrailSidebarRight,
  HolyGrailFooter
} from '@/components/layout/SpecialLayouts';

<HolyGrailLayout>
  <HolyGrailHeader>
    ヘッダー
  </HolyGrailHeader>

  <HolyGrailSidebarLeft>
    左サイドバー (ナビゲーション)
  </HolyGrailSidebarLeft>

  <HolyGrailMain>
    メインコンテンツ
  </HolyGrailMain>

  <HolyGrailSidebarRight>
    右サイドバー (広告、関連情報)
  </HolyGrailSidebarRight>

  <HolyGrailFooter>
    フッター
  </HolyGrailFooter>
</HolyGrailLayout>
```

**グリッド構造**:
```
┌─────────────────┐
│     Header      │
├───┬─────────┬───┤
│ L │  Main   │ R │
│ e │         │ i │
│ f │         │ g │
│ t │         │ h │
│   │         │ t │
├───┴─────────┴───┤
│     Footer      │
└─────────────────┘
```

---

### 10. Swiss Poster Layout (スイススタイル)

**用途**: モダンなランディングページ、アート的なレイアウト

```tsx
import {
  SwissLayout,
  SwissTitle,
  SwissImage,
  SwissText,
  SwissAccent
} from '@/components/layout/SpecialLayouts';

<SwissLayout>
  <SwissTitle>
    大きなタイトル
  </SwissTitle>

  <SwissImage>
    <img src="/hero.jpg" alt="..." />
  </SwissImage>

  <SwissText>
    本文テキスト
  </SwissText>

  <SwissAccent>
    アクセント要素
  </SwissAccent>
</SwissLayout>
```

**グリッド**: 8×8 (各100px高さ)
- Title: 列1-5, 行1-3
- Image: 列5-9, 行1-5
- Text: 列1-6, 行3-6
- Accent: 列6-9, 行5-7 (グラデーション付き)

---

### 11. Mosaic Layout (モザイクタイル)

**用途**: 写真ギャラリー、製品一覧、動的なグリッド

```tsx
import { MosaicLayout, MosaicItem } from '@/components/layout/SpecialLayouts';

<MosaicLayout>
  <MosaicItem size="large">
    大きなアイテム (2x2)
  </MosaicItem>

  <MosaicItem size="wide">
    横長アイテム (2x1)
  </MosaicItem>

  <MosaicItem size="tall">
    縦長アイテム (1x2)
  </MosaicItem>

  <MosaicItem>
    通常アイテム (1x1)
  </MosaicItem>
</MosaicLayout>
```

**サイズオプション**:
- `default`: 1x1 (200x200px)
- `large`: 2x2 (400x400px)
- `wide`: 2x1 (400x200px)
- `tall`: 1x2 (200x400px)

---

### 12. Golden Ratio Layout (黄金比)

**用途**: 調和の取れたレイアウト、芸術的なデザイン

```tsx
import { GoldenLayout, GoldenMajor, GoldenMinor } from '@/components/layout/SpecialLayouts';

<GoldenLayout>
  <GoldenMajor>
    主要コンテンツ (1.618の比率)
    <h1>メインタイトル</h1>
    <p>本文...</p>
  </GoldenMajor>

  <GoldenMinor>
    補助コンテンツ (1の比率)
    <aside>関連情報1</aside>
    <aside>関連情報2</aside>
  </GoldenMinor>
</GoldenLayout>
```

**グリッド比率**: `1.618fr 1fr` (黄金比 φ)
- Major: 約61.8%
- Minor: 約38.2%

---

## 実装例

### ギャラリーページの完全実装

```tsx
'use client';

import { MasonryLayout, MasonryItem } from '@/components/layout/SpecialLayouts';
import Image from 'next/image';

export default function GalleryPage() {
  const images = [
    { id: 1, src: '/gallery/1.jpg', title: 'タイトル1', height: 300 },
    { id: 2, src: '/gallery/2.jpg', title: 'タイトル2', height: 400 },
    { id: 3, src: '/gallery/3.jpg', title: 'タイトル3', height: 250 },
    // ...
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-premium">
        <h1 className="text-5xl font-bold text-center mb-16">
          フォトギャラリー
        </h1>

        <MasonryLayout columns={3} gap={24}>
          {images.map((image) => (
            <MasonryItem key={image.id}>
              <div className="card-premium hover-lift overflow-hidden">
                <div className="relative" style={{ height: image.height }}>
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </MasonryItem>
          ))}
        </MasonryLayout>
      </div>
    </section>
  );
}
```

### 機能紹介ページの完全実装

```tsx
'use client';

import {
  ZigzagLayout,
  ZigzagItem,
  ZigzagContent,
  ZigzagMedia
} from '@/components/layout/SpecialLayouts';
import Image from 'next/image';

export default function FeaturesPage() {
  const features = [
    {
      id: 1,
      title: 'AI画像生成',
      description: '最新のAI技術で美しい画像を自動生成します。',
      image: '/features/ai.jpg'
    },
    {
      id: 2,
      title: '自動編集',
      description: 'ワンクリックでプロ品質の編集が完了します。',
      image: '/features/edit.jpg'
    },
    // ...
  ];

  return (
    <section className="section bg-white">
      <div className="container-premium">
        <h1 className="text-5xl font-bold text-center mb-20">
          <span className="gradient-text-vibrant">主要機能</span>
        </h1>

        <ZigzagLayout>
          {features.map((feature) => (
            <ZigzagItem key={feature.id}>
              <ZigzagContent>
                <h2 className="text-4xl font-bold font-playfair mb-6">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <button className="mt-8 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover-lift">
                  詳しく見る
                </button>
              </ZigzagContent>

              <ZigzagMedia>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-premium">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </ZigzagMedia>
            </ZigzagItem>
          ))}
        </ZigzagLayout>
      </div>
    </section>
  );
}
```

---

## レスポンシブ対応

すべてのレイアウトは自動でレスポンシブ対応されています。

### ブレークポイント

- **モバイル**: `< 768px`
- **タブレット**: `768px - 1024px`
- **デスクトップ**: `> 1024px`

### 主な変更点

#### Masonry
- デスクトップ: 3カラム
- タブレット: 2カラム
- モバイル: 1カラム

#### Bento Box
- デスクトップ: 複雑なグリッド
- タブレット以下: 2カラムの自動配置
- モバイル: 1カラム

#### Zigzag
- デスクトップ: 左右交互配置
- タブレット以下: すべて縦一列

#### Split Screen
- デスクトップ: 50/50の左右分割
- タブレット以下: 縦一列、stickyは解除

#### Overlapping
- デスクトップ: 横方向の重なり (`margin-left: -80px`)
- モバイル: 縦方向の重なり (`margin-top: -40px`)

---

## アニメーションの追加

すべてのレイアウトにフェードインアニメーションを追加できます:

```tsx
import { AnimatedLayout, MasonryLayout, MasonryItem } from '@/components/layout/SpecialLayouts';

<AnimatedLayout>
  <MasonryLayout>
    <MasonryItem>アイテム1 (0.1秒後)</MasonryItem>
    <MasonryItem>アイテム2 (0.2秒後)</MasonryItem>
    <MasonryItem>アイテム3 (0.3秒後)</MasonryItem>
  </MasonryLayout>
</AnimatedLayout>
```

**効果**: 子要素が順番にフェードイン (最大6個まで自動遅延)

---

## パフォーマンス最適化

### CSS Columnsの利点 (Masonry)
- JavaScriptライブラリ不要
- 軽量 (数行のCSS)
- ブラウザネイティブで高速

### Grid Layoutの利点 (Bento, Magazine, Swiss等)
- レイアウトシフトなし
- GPU加速
- 複雑なレイアウトも高速レンダリング

### 推奨事項
- 画像には必ず`width`と`height`を指定
- Next.js Imageコンポーネントを使用
- アニメーションは`transform`と`opacity`のみ使用

---

## トラブルシューティング

### レイアウトが崩れる場合

1. **special-layouts.cssがインポートされているか確認**
   ```tsx
   // app/layout.tsx
   import "./special-layouts.css";
   ```

2. **子要素に固定の高さを設定** (Masonry, Floatingなど)
   ```tsx
   <MasonryItem>
     <div style={{ height: '300px' }}>...</div>
   </MasonryItem>
   ```

3. **ブラウザのデベロッパーツールでCSSを確認**
   - Computed styles で実際に適用されているクラスを確認
   - Grid overlay で視覚的にグリッドを確認

### モバイルで表示が崩れる場合

すべてのレイアウトはモバイルファーストで設計されていますが、カスタムCSSを追加した場合は以下を確認:

```css
/* 必ず@mediaクエリを使用 */
@media (max-width: 768px) {
  .my-custom-class {
    /* モバイル用のスタイル */
  }
}
```

---

## まとめ

このガイドで紹介した12種類のレイアウトパターンを組み合わせることで、一般的なグリッドレイアウトでは実現できない独創的で魅力的なWebデザインを実現できます。

### 選択のヒント

- **写真が多い**: Masonry, Mosaic
- **機能説明**: Zigzag, Bento Box
- **ブログ/メディア**: Magazine, Holy Grail
- **クリエイティブ**: Floating Cards, Diagonal, Swiss Poster
- **比較/対比**: Split Screen, Overlapping
- **芸術的**: Golden Ratio, Diagonal

すべてのレイアウトはTypeScriptで型安全に実装されており、IntelliSenseでプロパティの補完が効くため、開発体験も優れています。

---

**最終更新**: 2025-10-30
**バージョン**: 1.0.0
**作成者**: Claude Code

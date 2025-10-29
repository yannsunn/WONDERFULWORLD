# 🎯 Auto Layout System - Complete Guide

**Figma-inspired automatic layout system for React/Next.js**

Figmaの自動レイアウト（Auto Layout）機能をWebに実装したシステムです。

---

## 📚 Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Basic Usage](#basic-usage)
4. [CSS Classes](#css-classes)
5. [React Component](#react-component)
6. [Examples](#examples)
7. [Presets](#presets)
8. [Responsive Design](#responsive-design)
9. [Best Practices](#best-practices)

---

## Overview

Auto Layoutシステムは、Figmaの自動レイアウト機能と同じ概念をWebで実現します：

### 🎨 Figmaとの対応

| Figma機能 | Auto Layout |
|----------|-------------|
| Direction (Horizontal/Vertical) | `direction="horizontal"` or `auto-layout-horizontal` |
| Alignment | `align="center"` or `auto-layout-align-center` |
| Spacing between items | `gap={16}` or `auto-layout-gap-16` |
| Padding | `padding={24}` or `auto-layout-padding-24` |
| Resizing (Hug/Fill/Fixed) | `resize="hug"` or `auto-layout-hug` |

---

## Installation

### 1. CSS Classes (Already included)

`app/globals.css`にすでに含まれています。追加作業は不要です。

### 2. React Component

```tsx
import AutoLayout, { AutoLayoutItem } from '@/components/layout/AutoLayout';
```

---

## Basic Usage

### CSS Classes Method

```html
<div class="auto-layout auto-layout-vertical auto-layout-gap-16">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### React Component Method

```tsx
<AutoLayout direction="vertical" gap={16}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</AutoLayout>
```

---

## CSS Classes

### Base Class

```css
.auto-layout
```

すべてのAuto Layoutコンテナに必要な基本クラス。

---

### Direction (方向)

| Class | Figma設定 | 説明 |
|-------|----------|------|
| `.auto-layout-horizontal` | Horizontal (→) | 子要素を横並びに配置 |
| `.auto-layout-vertical` | Vertical (↓) | 子要素を縦並びに配置 |

**例**:
```html
<div class="auto-layout auto-layout-horizontal">
  <button>Cancel</button>
  <button>OK</button>
</div>
```

---

### Alignment (交差軸の配置)

| Class | Figma設定 | 説明 |
|-------|----------|------|
| `.auto-layout-align-start` | Top/Left | 先頭に配置 |
| `.auto-layout-align-center` | Center | 中央に配置 |
| `.auto-layout-align-end` | Bottom/Right | 末尾に配置 |
| `.auto-layout-align-stretch` | --- | 伸ばして配置 |
| `.auto-layout-align-baseline` | --- | ベースラインに揃える |

**例**:
```html
<!-- ボタンを中央揃え -->
<div class="auto-layout auto-layout-horizontal auto-layout-align-center">
  <button>Small</button>
  <button class="text-2xl">Large</button>
</div>
```

---

### Justification (主軸の配置)

| Class | Figma設定 | 説明 |
|-------|----------|------|
| `.auto-layout-justify-start` | Packed (Left/Top) | 先頭詰め |
| `.auto-layout-justify-center` | Packed (Center) | 中央寄せ |
| `.auto-layout-justify-end` | Packed (Right/Bottom) | 末尾詰め |
| `.auto-layout-justify-between` | Space between | 両端詰め＋均等配置 |
| `.auto-layout-justify-around` | --- | 周囲均等 |
| `.auto-layout-justify-evenly` | Space between | 完全均等 |

**例**:
```html
<!-- ヘッダー：左右に配置 -->
<div class="auto-layout auto-layout-horizontal auto-layout-justify-between">
  <div>Logo</div>
  <nav>Menu</nav>
</div>
```

---

### Gap (アイテム間のスペース)

Figmaの「Spacing between items」に相当。

| Class | サイズ | 用途 |
|-------|-------|------|
| `.auto-layout-gap-0` | 0px | スペースなし |
| `.auto-layout-gap-2` | 2px | 極小（アイコンとテキスト） |
| `.auto-layout-gap-4` | 4px | 極小 |
| `.auto-layout-gap-8` | 8px | 小（ボタングループ） |
| `.auto-layout-gap-12` | 12px | 小中 |
| `.auto-layout-gap-16` | 16px | 中（標準） |
| `.auto-layout-gap-20` | 20px | 中 |
| `.auto-layout-gap-24` | 24px | 中大（カードグループ） |
| `.auto-layout-gap-32` | 32px | 大 |
| `.auto-layout-gap-40` | 40px | 大 |
| `.auto-layout-gap-48` | 48px | 特大 |
| `.auto-layout-gap-64` | 64px | 最大（セクション間） |

**例**:
```html
<!-- 16pxのスペースでカードを並べる -->
<div class="auto-layout auto-layout-horizontal auto-layout-gap-16">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

---

### Padding (内部スペース)

Figmaの「Padding」に相当。

| Class | サイズ | 用途 |
|-------|-------|------|
| `.auto-layout-padding-0` | 0px | パディングなし |
| `.auto-layout-padding-8` | 8px | 極小 |
| `.auto-layout-padding-12` | 12px | 小 |
| `.auto-layout-padding-16` | 16px | 中（ボタン） |
| `.auto-layout-padding-24` | 24px | 中大（カード） |
| `.auto-layout-padding-32` | 32px | 大（コンテナ） |
| `.auto-layout-padding-48` | 48px | 特大（セクション） |
| `.auto-layout-padding-64` | 64px | 最大 |

**方向別パディング**:

| Class | 適用箇所 |
|-------|---------|
| `.auto-layout-padding-h-16` | 左右16px |
| `.auto-layout-padding-h-24` | 左右24px |
| `.auto-layout-padding-h-32` | 左右32px |
| `.auto-layout-padding-v-16` | 上下16px |
| `.auto-layout-padding-v-24` | 上下24px |
| `.auto-layout-padding-v-32` | 上下32px |

**例**:
```html
<!-- 24pxのパディングを持つカード -->
<div class="auto-layout auto-layout-vertical auto-layout-gap-12 auto-layout-padding-24 card">
  <h3>Card Title</h3>
  <p>Card content here</p>
  <button>Action</button>
</div>
```

---

### Child Behavior (子要素の振る舞い)

Figmaの「Resizing」に相当。

| Class | Figma設定 | 説明 |
|-------|----------|------|
| `.auto-layout-hug` | Hug contents | コンテンツサイズに合わせる |
| `.auto-layout-fill` | Fill container | コンテナを埋める |
| `.auto-layout-fixed` | Fixed | 固定サイズ |

**例**:
```html
<div class="auto-layout auto-layout-horizontal auto-layout-gap-8">
  <div class="auto-layout-hug">Left (Hug)</div>
  <div class="auto-layout-fill">Center (Fill - 伸びる)</div>
  <div class="auto-layout-hug">Right (Hug)</div>
</div>
```

---

### Wrap (折り返し)

```css
.auto-layout-wrap      /* 折り返しあり */
.auto-layout-nowrap    /* 折り返しなし（デフォルト） */
```

**例**:
```html
<!-- タグリスト - 自動折り返し -->
<div class="auto-layout auto-layout-horizontal auto-layout-gap-8 auto-layout-wrap">
  <span class="badge">React</span>
  <span class="badge">Next.js</span>
  <span class="badge">TypeScript</span>
  <!-- 画面幅に応じて自動的に折り返す -->
</div>
```

---

## React Component

### AutoLayout Props

```tsx
interface AutoLayoutProps {
  // 子要素
  children: React.ReactNode;

  // レイアウト方向
  direction?: 'horizontal' | 'vertical';

  // 交差軸の配置
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';

  // 主軸の配置
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

  // アイテム間のスペース
  gap?: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 64;

  // 内部スペース
  padding?: 0 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 64;
  paddingH?: 16 | 24 | 32;
  paddingV?: 16 | 24 | 32;

  // 折り返し
  wrap?: boolean;

  // プリセットレイアウト
  preset?: 'stack' | 'inline' | 'grid' | 'center' | 'sidebar' | 'header';

  // プレミアムスタイル
  premium?: boolean;
  glass?: boolean;

  // レスポンシブ
  mobileVertical?: boolean;
  smVertical?: boolean;

  // サイズ制約
  width?: 'fill' | 'hug' | 320 | 480 | 640 | 960;
  height?: 'fill' | 'hug' | 480 | 640;

  // アニメーション
  animated?: boolean | 'slow';

  // デバッグモード
  debug?: boolean;

  // その他
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}
```

### Basic Examples

```tsx
// 縦並びスタック
<AutoLayout direction="vertical" gap={16}>
  <h2>Title</h2>
  <p>Description</p>
  <button>Action</button>
</AutoLayout>

// 横並びボタングループ
<AutoLayout direction="horizontal" gap={8} align="center">
  <button>Cancel</button>
  <button>Save</button>
</AutoLayout>

// 両端配置ヘッダー
<AutoLayout direction="horizontal" justify="between" align="center" paddingH={24} paddingV={16}>
  <div>Logo</div>
  <nav>Navigation</nav>
</AutoLayout>

// プレミアムカード
<AutoLayout preset="stack" premium padding={32}>
  <h3>Premium Card</h3>
  <p>With shadow and effects</p>
</AutoLayout>
```

---

## Examples

### 1. Button Group (ボタングループ)

```tsx
<AutoLayout direction="horizontal" gap={8}>
  <button className="btn-secondary">Cancel</button>
  <button className="btn-primary">Save</button>
</AutoLayout>
```

### 2. Card with Content (カード)

```tsx
<AutoLayout
  direction="vertical"
  gap={16}
  padding={24}
  className="card-premium"
>
  <h3 className="text-xl font-bold">Card Title</h3>
  <p className="text-gray-600">Card description goes here</p>

  <AutoLayout direction="horizontal" gap={8} justify="end">
    <button className="btn-secondary">Learn More</button>
    <button className="btn-primary">Get Started</button>
  </AutoLayout>
</AutoLayout>
```

### 3. Navigation Header (ナビゲーションヘッダー)

```tsx
<AutoLayout
  preset="header"
  className="bg-white shadow-md"
>
  <div className="text-2xl font-bold">Logo</div>

  <AutoLayout direction="horizontal" gap={24}>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </AutoLayout>
</AutoLayout>
```

### 4. Form (フォーム)

```tsx
<AutoLayout direction="vertical" gap={16} width="fill">
  <AutoLayout direction="vertical" gap={8}>
    <label htmlFor="name">Name</label>
    <input id="name" type="text" className="input-primary" />
  </AutoLayout>

  <AutoLayout direction="vertical" gap={8}>
    <label htmlFor="email">Email</label>
    <input id="email" type="email" className="input-primary" />
  </AutoLayout>

  <AutoLayout direction="horizontal" gap={8} justify="end">
    <button className="btn-secondary">Cancel</button>
    <button className="btn-primary">Submit</button>
  </AutoLayout>
</AutoLayout>
```

### 5. Feature Cards Grid (機能カードグリッド)

```tsx
<AutoLayout
  direction="horizontal"
  gap={24}
  wrap={true}
  mobileVertical
>
  {features.map((feature) => (
    <AutoLayout
      key={feature.id}
      preset="stack"
      premium
      padding={32}
      className="flex-1 min-w-[280px]"
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-bold">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </AutoLayout>
  ))}
</AutoLayout>
```

### 6. Sidebar Layout (サイドバーレイアウト)

```tsx
<AutoLayout direction="horizontal" gap={24} width="fill" height="fill">
  {/* Sidebar */}
  <AutoLayoutItem resize="hug">
    <AutoLayout
      direction="vertical"
      gap={16}
      padding={24}
      className="bg-gray-50 h-full w-64"
    >
      <h3>Menu</h3>
      <a href="/">Dashboard</a>
      <a href="/settings">Settings</a>
      <a href="/profile">Profile</a>
    </AutoLayout>
  </AutoLayoutItem>

  {/* Main Content */}
  <AutoLayoutItem resize="fill">
    <AutoLayout direction="vertical" gap={24} padding={32}>
      <h1>Main Content</h1>
      <p>Content goes here...</p>
    </AutoLayout>
  </AutoLayoutItem>
</AutoLayout>
```

---

## Presets

すぐに使える定義済みレイアウト。

### `preset="stack"`

縦並びスタックレイアウト。

```tsx
<AutoLayout preset="stack">
  {/* gap: 16px, direction: vertical, align: stretch */}
</AutoLayout>
```

**等価なCSS**:
```css
.auto-layout-vertical
.auto-layout-gap-16
.auto-layout-align-stretch
```

---

### `preset="inline"`

横並びインラインレイアウト。

```tsx
<AutoLayout preset="inline">
  {/* gap: 8px, direction: horizontal, align: center */}
</AutoLayout>
```

---

### `preset="grid"`

グリッドレイアウト（自動折り返し）。

```tsx
<AutoLayout preset="grid">
  {/* gap: 16px, direction: horizontal, wrap: true */}
</AutoLayout>
```

---

### `preset="center"`

中央配置レイアウト。

```tsx
<AutoLayout preset="center">
  {/* direction: vertical, justify: center, align: center */}
</AutoLayout>
```

---

### `preset="sidebar"`

サイドバーレイアウト。

```tsx
<AutoLayout preset="sidebar">
  {/* gap: 24px, direction: horizontal */}
</AutoLayout>
```

---

### `preset="header"`

ヘッダーレイアウト。

```tsx
<AutoLayout preset="header">
  {/*
    direction: horizontal,
    justify: between,
    align: center,
    padding-h: 24px,
    padding-v: 16px
  */}
</AutoLayout>
```

---

## Responsive Design

### Mobile Vertical

デスクトップでは横並び、モバイルでは縦並びに自動変換。

```tsx
<AutoLayout
  direction="horizontal"
  gap={16}
  mobileVertical  // 768px以下で縦並びに
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</AutoLayout>
```

**CSS**:
```css
.auto-layout-mobile-vertical {
  /* @media (max-width: 768px) で flex-direction: column */
}
```

---

### Small Screen Vertical

さらに小さい画面（640px以下）で縦並びに。

```tsx
<AutoLayout smVertical>
  {/* 640px以下で縦並び */}
</AutoLayout>
```

---

## Best Practices

### 1. Figmaのデザインを直接変換

Figmaで設定した値をそのまま使用：

| Figma | Code |
|-------|------|
| Direction: Horizontal | `direction="horizontal"` |
| Spacing between items: 16 | `gap={16}` |
| Padding: 24 | `padding={24}` |
| Alignment: Center | `align="center"` |

### 2. プリセットを活用

```tsx
// ❌ 長い
<AutoLayout
  direction="vertical"
  gap={16}
  align="stretch"
>

// ✅ 短い
<AutoLayout preset="stack">
```

### 3. レスポンシブを意識

```tsx
<AutoLayout
  direction="horizontal"
  mobileVertical  // モバイルで自動的に縦並び
  gap={16}
>
```

### 4. 子要素の振る舞いを制御

```tsx
<AutoLayout direction="horizontal" gap={16}>
  <AutoLayoutItem resize="hug">Logo</AutoLayoutItem>
  <AutoLayoutItem resize="fill">Search</AutoLayoutItem>
  <AutoLayoutItem resize="hug">User Menu</AutoLayoutItem>
</AutoLayout>
```

### 5. デバッグモード活用

レイアウトの問題を視覚化：

```tsx
<AutoLayout debug>
  {/* アウトラインが表示される */}
</AutoLayout>
```

---

## 🎨 Premium Combinations

Auto LayoutとPremiumデザインの組み合わせ。

### Premium Card Stack

```tsx
<AutoLayout preset="stack" premium padding={32}>
  <h2 className="gradient-text-sunset">Premium Title</h2>
  <p>Premium content with shadows and effects</p>
</AutoLayout>
```

### Glass Card

```tsx
<AutoLayout preset="stack" glass padding={24}>
  <h3>Glass Effect</h3>
  <p>With backdrop blur</p>
</AutoLayout>
```

---

## まとめ

Auto Layoutシステムを使うことで：

✅ Figmaデザインを正確に実装
✅ 一貫したスペーシング
✅ レスポンシブ対応が簡単
✅ コードの可読性向上
✅ メンテナンスが容易

---

**次のステップ**: 既存のコンポーネントをAuto Layoutに移行してみましょう！

**参考**: [Figma Auto Layout Documentation](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties)

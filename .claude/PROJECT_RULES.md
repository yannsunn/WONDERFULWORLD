# WONDERFUL WORLD プロジェクトルール

このドキュメントには、プロジェクトで効果的だった手法と避けるべき問題が記録されています。

## ✅ うまくいった手法（Best Practices）

### 1. **日本語タイポグラフィーの最適化**

#### 効果的だった設定:
```css
/* globals.css に追加 */
body {
  font-feature-settings: "palt" 1; /* 日本語の文字間隔最適化 */
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p, li, td, th, div, span {
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: keep-all; /* 単語を一緒に保つ */
  line-break: strict;
}

.ja-text {
  word-break: keep-all;
  overflow-wrap: anywhere;
  line-height: 1.8; /* 日本語は1.8-2.0が最適 */
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.5-1.6; /* 見出しは1.5-1.6 */
  word-break: keep-all;
}
```

#### HTMLでの改行ヒント:
```tsx
// ✅ Good: <wbr> タグで適切な改行位置を指定
<p className="ja-text" style={{lineHeight: '1.9'}}>
  ミスコンテストの<wbr />ファイナリストから生まれた
</p>

// ❌ Bad: 改行ヒントなし（モバイルで不自然な改行が発生）
<p>
  ミスコンテストのファイナリストから生まれた
</p>
```

### 2. **パフォーマンス最適化**

#### 動的インポートの使用:
```tsx
// ✅ Good: 重いコンポーネントは動的にインポート
const ChatbotHybrid = dynamic(() => import("@/components/ChatbotHybrid"), {
  ssr: false,
  loading: () => null,
});

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then((mod) => mod.Analytics),
  { ssr: false }
);
```

#### フォント最適化:
```tsx
// ✅ Good: メインフォントのみプリロード
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  preload: false, // サブフォントはプリロードしない
  fallback: ["Georgia", "Times New Roman", "serif"],
});
```

### 3. **モバイル体験の改善**

#### タッチジェスチャーの実装:
```tsx
// ✅ Good: スワイプジェスチャー対応
const [touchStart, setTouchStart] = useState(0);
const [touchEnd, setTouchEnd] = useState(0);

const handleTouchEnd = () => {
  const distance = touchStart - touchEnd;
  const isLeftSwipe = distance > 50;
  const isRightSwipe = distance < -50;

  if (isLeftSwipe) nextSlide();
  if (isRightSwipe) prevSlide();
};
```

#### ビューポート設定（Next.js 14）:
```tsx
// ✅ Good: viewport を別エクスポート（Next.js 14の仕様）
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f97316' },
    { media: '(prefers-color-scheme: dark)', color: '#ea580c' }
  ],
};

// ❌ Bad: metadata 内に viewport を含める（警告が出る）
export const metadata = {
  viewport: { ... } // ← 非推奨
};
```

### 4. **Web Vitals とパフォーマンス監視**

#### useReportWebVitals の使用:
```tsx
// ✅ Good: Next.js の組み込みフックを使用
import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // メトリクスを記録・送信
    console.log(metric.name, metric.value);
  });
  return null;
}
```

### 5. **SEO 最適化**

#### 構造化データ（JSON-LD）:
```tsx
// ✅ Good: 型安全な構造化データコンポーネント
interface OrganizationData {
  name: string;
  url: string;
  description?: string;
  foundingDate?: string;
}

const generateSchema = () => {
  switch (type) {
    case 'organization': {
      const orgData = data as OrganizationData;
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: orgData.name,
        // ...
      };
    }
  }
};
```

### 6. **インタラクティブ要素**

#### スクロール進行状況インジケーター:
```tsx
// ✅ Good: passive イベントリスナーでパフォーマンス最適化
useEffect(() => {
  const updateScrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollPx / winHeightPx) * 100;
    setScrollProgress(scrolled);
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  return () => window.removeEventListener('scroll', updateScrollProgress);
}, []);
```

---

## ❌ うまくいかなかったこと（Lessons Learned）

### 1. **日本語タイポグラフィーの問題**

#### 問題: leading-tight は日本語に不適切
```tsx
// ❌ Bad: leading-tight (1.25) は日本語で文字が詰まりすぎる
<h1 className="text-5xl leading-tight">
  Best of Miss Tokyo 2025
</h1>

// ✅ Good: leading-relaxed (1.8-2.0) を使用
<h1 className="text-5xl ja-text" style={{lineHeight: '1.8'}}>
  Best of Miss Tokyo 2025
</h1>
```

#### 問題: word-break: break-word は日本語で不自然
```css
/* ❌ Bad: 単語の途中で改行される */
p {
  word-break: break-word;
}

/* ✅ Good: 単語を一緒に保つ */
p {
  word-break: keep-all;
  overflow-wrap: anywhere;
}
```

### 2. **パフォーマンスの問題**

#### 問題: すべてのコンポーネントを静的にインポート
```tsx
// ❌ Bad: 重いコンポーネントが初期ロードに含まれる
import ChatbotHybrid from "@/components/ChatbotHybrid";
import { Analytics } from '@vercel/analytics/react';

// ✅ Good: 動的インポートを使用
const ChatbotHybrid = dynamic(() => import("@/components/ChatbotHybrid"), {
  ssr: false,
});
```

#### 問題: すべてのフォントをプリロード
```tsx
// ❌ Bad: すべてのフォントをプリロード（帯域幅の無駄）
const playfair = Playfair_Display({
  preload: true, // ← メインフォント以外は不要
});

// ✅ Good: メインフォントのみプリロード
const playfair = Playfair_Display({
  preload: false,
});
```

### 3. **React Hooks の問題**

#### 問題: useEffect の cleanup で ref.current を使用
```tsx
// ❌ Bad: cleanup 時に ref.current が変わっている可能性
useEffect(() => {
  const observer = new IntersectionObserver(/* ... */);
  if (elementRef.current) {
    observer.observe(elementRef.current);
  }
  return () => {
    if (elementRef.current) { // ← 警告が出る
      observer.unobserve(elementRef.current);
    }
  };
}, []);

// ✅ Good: 変数にコピーして使用
useEffect(() => {
  const observer = new IntersectionObserver(/* ... */);
  const currentElement = elementRef.current;
  if (currentElement) {
    observer.observe(currentElement);
  }
  return () => {
    if (currentElement) {
      observer.unobserve(currentElement);
    }
  };
}, []);
```

### 4. **Next.js 14 の仕様変更**

#### 問題: viewport を metadata に含める
```tsx
// ❌ Bad: Next.js 14 では警告が出る
export const metadata: Metadata = {
  viewport: { width: 'device-width', ... },
};

// ✅ Good: 別エクスポートにする
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};
```

#### 問題: Script コンポーネントで beforeInteractive を使用
```tsx
// ❌ Bad: pages/_document.js 以外では使えない
<Script strategy="beforeInteractive">
  {/* ... */}
</Script>

// ✅ Good: strategy を削除
<Script>
  {/* ... */}
</Script>
```

### 5. **モバイルレスポンシブの問題**

#### 問題: 固定幅やパディングで overflow が発生
```tsx
// ❌ Bad: 小さい画面で横スクロールが発生
<div className="px-4 text-lg">
  長い日本語テキストがここに入ります...
</div>

// ✅ Good: レスポンシブなクラスと適切な改行
<div className="px-2 sm:px-4 text-sm sm:text-base md:text-lg">
  <span className="ja-text">
    長い日本語<wbr />テキストが<wbr />ここに入ります...
  </span>
</div>
```

### 6. **TypeScript の型エラー**

#### 問題: Union 型で特定のプロパティにアクセス
```tsx
// ❌ Bad: Union 型のまま使用
const generateSchema = () => {
  switch (type) {
    case 'organization':
      return { name: data.name }; // ← エラー
  }
};

// ✅ Good: 型アサーションを使用
const generateSchema = () => {
  switch (type) {
    case 'organization': {
      const orgData = data as OrganizationData;
      return { name: orgData.name };
    }
  }
};
```

---

## 📋 実装チェックリスト

### 新機能を追加する際のチェック項目:

- [ ] 日本語テキストに `.ja-text` クラスを追加
- [ ] 長い日本語テキストに `<wbr>` タグを追加
- [ ] 見出しの `line-height` を 1.5-1.6 に設定
- [ ] 重いコンポーネントは動的インポート
- [ ] 画像に適切な `sizes` 属性を設定
- [ ] モバイルでタッチ操作をテスト
- [ ] TypeScript エラーをすべて修正
- [ ] ESLint 警告をすべて修正
- [ ] `npm run build` が成功することを確認
- [ ] レスポンシブデザインを確認（375px, 768px, 1024px, 1920px）

### パフォーマンス最適化チェック項目:

- [ ] Core Web Vitals を確認（LCP < 2.5s, FID < 100ms, CLS < 0.1）
- [ ] Lighthouse スコアを確認（全カテゴリ 90 以上）
- [ ] 画像の最適化（AVIF/WebP）
- [ ] フォントのプリロード設定
- [ ] 不要な JavaScript の削除
- [ ] CSS の最小化

---

## 🛠️ よく使うコマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# Lighthouse 監査
npm run lighthouse

# フル監査（ビルド + 起動 + Lighthouse）
npm run audit

# PDF 生成（ニュース投稿ガイド）
npm run generate:pdf

# E2E テスト
npm run test:e2e
```

---

## 📦 主要な依存パッケージ

### プロダクション:
- `next@^14.2.24` - React フレームワーク
- `react@^18.3.1` - UI ライブラリ
- `framer-motion@^12.23.24` - アニメーション
- `@vercel/analytics@^1.5.0` - アナリティクス
- `@google/generative-ai@^0.24.1` - Gemini API

### 開発:
- `typescript@^5` - 型チェック
- `tailwindcss@^3.4.17` - CSS フレームワーク
- `lighthouse@^12.2.1` - パフォーマンス監査
- `playwright@^1.56.0` - E2E テスト
- `puppeteer@^24.25.0` - PDF 生成

---

## 🎨 デザインシステム

### カラーパレット:
- Primary: Orange-500 (#f97316)
- Secondary: Pink-500 (#ec4899)
- Background: White (#ffffff)
- Text: Gray-900 (#111827)

### タイポグラフィ:
- Font Family (本文): Inter
- Font Family (見出し): Playfair Display
- Base Size: 16px
- Line Height (本文): 1.8
- Line Height (見出し): 1.5

### ブレークポイント:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

---

## 📝 コミットメッセージの形式

```
[種類] 簡潔な説明

詳細な説明:
- 変更内容1
- 変更内容2

Benefits:
- メリット1
- メリット2

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**種類:**
- feat: 新機能
- fix: バグ修正
- perf: パフォーマンス改善
- style: デザイン・スタイル変更
- refactor: リファクタリング
- docs: ドキュメント
- test: テスト
- chore: ビルドプロセス・ツール

---

## 🔄 今後の改善タスク

### 優先度: 高
- [ ] ニュース詳細ページの日本語表示改善
- [ ] 事業案内ページの日本語表示改善
- [ ] お問い合わせページの日本語表示改善

### 優先度: 中
- [ ] 多言語対応（英語版）の実装
- [ ] ページトランジションアニメーションの追加
- [ ] パララックススクロール効果の実装

### 優先度: 低
- [ ] A/B テストシステムの構築
- [ ] より高度なマイクロインタラクション
- [ ] ダークモードの実装

---

## 📚 参考リソース

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [日本語組版処理の要件](https://www.w3.org/TR/jlreq/)

---

最終更新: 2025-10-23

# パフォーマンス監視ガイド

## 📊 Vercel Analyticsの使用方法

このプロジェクトでは、Vercel Analyticsを使用してリアルタイムでパフォーマンスとユーザー行動を追跡しています。

### セットアップ状況

✅ **既に設定済み**
- `@vercel/analytics` パッケージがインストール済み
- `app/layout.tsx` に `<Analytics />` コンポーネントを配置済み
- Web Vitalsの自動収集が有効

### Vercelダッシュボードでの確認方法

1. **Vercelプロジェクトにログイン**
   ```
   https://vercel.com
   ```

2. **プロジェクトを選択** → **Analytics タブ**

3. **確認できる指標**
   - **トラフィック**: ページビュー、訪問者数
   - **Web Vitals**: LCP, FID, CLS, TTFB
   - **リアルタイムユーザー**: 現在のアクティブユーザー
   - **トップページ**: 最も閲覧されているページ
   - **デバイス分布**: デスクトップ vs モバイル

## 🎯 Core Web Vitals

### 推奨値

| 指標 | 良好 | 改善が必要 | 不良 |
|------|------|-----------|------|
| **LCP** (Largest Contentful Paint) | ≤2.5s | 2.5-4s | >4s |
| **FID** (First Input Delay) | ≤100ms | 100-300ms | >300ms |
| **CLS** (Cumulative Layout Shift) | ≤0.1 | 0.1-0.25 | >0.25 |
| **TTFB** (Time to First Byte) | ≤800ms | 800-1800ms | >1800ms |

### 現在の最適化

- ✅ **画像最適化**: Next.js Imageコンポーネント使用
- ✅ **静的生成**: 全ページSSG（Static Site Generation）
- ✅ **コード分割**: 自動的なチャンク分割
- ✅ **フォント最適化**: `next/font` による最適化
- ✅ **圧縮**: Gzip圧縮有効
- ✅ **キャッシング**: 適切なキャッシュヘッダー設定

## 📈 ローカルでのパフォーマンス測定

### 1. Lighthouse（Chrome DevTools）

```bash
1. Chrome DevToolsを開く（F12）
2. "Lighthouse" タブを選択
3. "Analyze page load" をクリック
4. パフォーマンススコアを確認
```

**目標スコア**: 90点以上

### 2. Web Vitals拡張機能

Chrome拡張機能「Web Vitals」をインストール:
```
https://chrome.google.com/webstore/detail/web-vitals
```

リアルタイムでLCP、FID、CLSを確認できます。

### 3. Next.js Built-in Analytics

開発環境でWeb Vitalsをコンソールに表示:

```typescript
// app/web-vitals.ts で開発環境のみログ出力
console.log('[Web Vitals]', metric);
```

## 🔧 パフォーマンス改善のヒント

### 画像最適化
```typescript
// ✅ 良い例
<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={630}
  priority // Above the fold画像
/>

// ❌ 悪い例
<img src="/images/hero.jpg" alt="Hero" />
```

### フォント読み込み
```typescript
// ✅ 既に最適化済み
import { Inter, Playfair_Display } from "next/font/google";
```

### 動的インポート
```typescript
// 重いコンポーネントは動的インポート
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
});
```

## 📱 モバイルパフォーマンス

### 現在の対策
- レスポンシブ画像（srcset自動生成）
- タッチフレンドリーなUI（44px以上のタップターゲット）
- モバイルファーストCSS

### テスト方法
```bash
# Playwrightでモバイルテスト
npm run test:e2e
```

## 🚀 本番環境での監視

### Vercelでの自動監視
- デプロイごとにLighthouseスコア測定
- リアルユーザー監視（RUM）
- エラー追跡

### アラート設定（推奨）
1. Vercelダッシュボード → Settings → Notifications
2. Performance degradation alertsを有効化
3. LCP > 3秒などの閾値を設定

## 📊 レポート生成

### 週次レポート確認項目
- [ ] LCP平均値（目標: 2.5秒以下）
- [ ] FID平均値（目標: 100ms以下）
- [ ] CLS平均値（目標: 0.1以下）
- [ ] トラフィックトレンド
- [ ] エラー率

### 月次最適化タスク
- [ ] 未使用のJavaScript削除
- [ ] 画像サイズの見直し
- [ ] サードパーティスクリプトの監査
- [ ] キャッシュ戦略の見直し

## 🎓 参考リンク

- [Vercel Analytics ドキュメント](https://vercel.com/docs/analytics)
- [Core Web Vitals ガイド](https://web.dev/vitals/)
- [Next.js パフォーマンス](https://nextjs.org/docs/app/building-your-application/optimizing)

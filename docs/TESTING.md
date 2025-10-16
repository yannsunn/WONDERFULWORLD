# E2Eテストガイド

## 🧪 Playwright E2Eテストの使用方法

このプロジェクトでは、PlaywrightでE2E（End-to-End）テストを実装しています。

## 📦 セットアップ

### 必要な依存関係
```bash
npm install -D @playwright/test
npx playwright install  # ブラウザのインストール
```

## 🚀 テストの実行

### 基本的なテスト実行
```bash
# 全てのテストを実行
npm run test:e2e

# UIモードで実行（デバッグに便利）
npm run test:e2e:ui

# ブラウザを表示して実行
npm run test:e2e:headed

# レポートを表示
npm run test:e2e:report
```

### 特定のテストファイルのみ実行
```bash
npx playwright test tests/e2e/homepage.spec.ts
```

### 特定のブラウザでのみ実行
```bash
npx playwright test --project=chromium
npx playwright test --project="Mobile Safari"
```

## 📁 テストファイル構成

```
tests/e2e/
├── homepage.spec.ts       # ホームページのテスト
├── navigation.spec.ts     # ナビゲーションのテスト
├── contact-form.spec.ts   # お問い合わせフォームのテスト
└── news.spec.ts           # ニュースシステムのテスト
```

## ✅ テストカバレッジ

### ホームページ (`homepage.spec.ts`)
- ✅ ページロードの成功
- ✅ ヘッダーとロゴの表示
- ✅ ナビゲーションリンクの存在
- ✅ ヒーローセクションの表示
- ✅ フッターとコピーライト

### ナビゲーション (`navigation.spec.ts`)
- ✅ 会社情報ページへの遷移
- ✅ お問い合わせページへの遷移
- ✅ AIモデル事業ページへの遷移（ドロップダウン）
- ✅ ニュースページへの遷移
- ✅ ロゴクリックでホームに戻る

### お問い合わせフォーム (`contact-form.spec.ts`)
- ✅ 必須フィールドの表示
- ✅ バリデーションエラー
- ✅ フォーム送信の成功
- ✅ アクセシビリティ属性（ARIA）

### ニュースシステム (`news.spec.ts`)
- ✅ ニュース一覧の表示
- ✅ 記事詳細ページへの遷移
- ✅ 記事メタデータの表示
- ✅ 一覧に戻るリンク
- ✅ NEWバッジの表示

## 🎯 テストの書き方

### 基本的なテスト構造

```typescript
import { test, expect } from '@playwright/test';

test.describe('機能名', () => {
  test.beforeEach(async ({ page }) => {
    // 各テストの前に実行
    await page.goto('/');
  });

  test('テストの説明', async ({ page }) => {
    // テストロジック
    await expect(page.getByRole('heading')).toBeVisible();
  });
});
```

### よく使うアサーション

```typescript
// 要素の存在確認
await expect(page.locator('header')).toBeVisible();

// テキストの確認
await expect(page.getByText('WONDERFUL WORLD')).toBeVisible();

// URLの確認
await expect(page).toHaveURL('/about');

// 属性の確認
await expect(input).toHaveAttribute('aria-required', 'true');

// タイトルの確認
await expect(page).toHaveTitle(/WONDERFUL WORLD/);
```

### セレクターのベストプラクティス

```typescript
// ✅ 推奨: セマンティックなセレクター
page.getByRole('button', { name: '送信' })
page.getByLabel('お名前')
page.getByText('会社情報')

// ⚠️ 避ける: CSSセレクター（脆弱）
page.locator('.btn-primary')
page.locator('#submit-button')
```

## 🐛 デバッグ

### UIモード（推奨）
```bash
npm run test:e2e:ui
```
- タイムトラベルデバッグ
- ステップバイステップ実行
- DOM要素の検査

### トレースビューワー
テスト失敗時、自動的にトレースが記録されます：
```bash
npx playwright show-trace trace.zip
```

### デバッグログ
```typescript
test('デバッグ例', async ({ page }) => {
  await page.pause();  // ブレークポイント
  console.log(await page.title());  // ログ出力
});
```

## 📸 スクリーンショットとビデオ

### スクリーンショット
```typescript
// 失敗時のみ自動保存（設定済み）
// playwright.config.tsで設定: screenshot: 'only-on-failure'
```

### ビデオ録画
```typescript
// playwright.config.tsに追加
use: {
  video: 'on-first-retry',
}
```

## 🔄 CI/CD統合

### GitHub Actions例
```yaml
name: E2E Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run build
      - run: npm run test:e2e
```

## 📊 テストレポート

### HTMLレポート
テスト実行後、自動的にHTMLレポートが生成されます：
```bash
npm run test:e2e:report
```

### JUnit XML（CI用）
```bash
npx playwright test --reporter=junit
```

## 🎓 ベストプラクティス

### 1. 独立したテスト
```typescript
// ✅ 各テストは独立して実行可能
test('テスト1', async ({ page }) => {
  await page.goto('/');
  // テストロジック
});

// ❌ テスト間の依存を避ける
let sharedData;
test('テスト1', async ({ page }) => {
  sharedData = await page.textContent('h1');
});
test('テスト2', async ({ page }) => {
  expect(sharedData).toBe('Title');  // 危険！
});
```

### 2. 適切な待機
```typescript
// ✅ 自動待機
await expect(page.getByText('Loading...')).toBeVisible();

// ✅ 明示的な待機
await page.waitForLoadState('networkidle');

// ❌ 固定時間待機（避ける）
await page.waitForTimeout(5000);
```

### 3. Page Object Model
```typescript
// pages/ContactPage.ts
export class ContactPage {
  constructor(private page: Page) {}

  async fillForm(name: string, email: string, message: string) {
    await this.page.getByLabel('お名前').fill(name);
    await this.page.getByLabel('メールアドレス').fill(email);
    await this.page.getByLabel('お問い合わせ内容').fill(message);
  }

  async submit() {
    await this.page.getByRole('button', { name: '送信' }).click();
  }
}
```

## 🔗 参考リンク

- [Playwright 公式ドキュメント](https://playwright.dev/)
- [ベストプラクティス](https://playwright.dev/docs/best-practices)
- [APIリファレンス](https://playwright.dev/docs/api/class-playwright)

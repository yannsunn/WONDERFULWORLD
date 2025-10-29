# 🎨 Figma連携セットアップガイド

WONDERFUL WORLDプロジェクトにFigmaデザインシステムを統合するための完全ガイドです。

## 📋 目次

1. [前提条件](#前提条件)
2. [Figma Personal Access Tokenの取得](#figma-personal-access-tokenの取得)
3. [Figmaファイルの準備](#figmaファイルの準備)
4. [環境変数の設定](#環境変数の設定)
5. [デザイントークンの同期](#デザイントークンの同期)
6. [コンポーネント生成ワークフロー](#コンポーネント生成ワークフロー)
7. [トラブルシューティング](#トラブルシューティング)

---

## ✅ 前提条件

- Figmaアカウント（無料または有料）
- Node.js 18以上
- プロジェクトのローカル環境

---

## 🔑 Figma Personal Access Tokenの取得

### ステップ1: Figmaにログイン

https://www.figma.com/ にアクセスしてログイン

### ステップ2: Settings画面を開く

1. 左上のアカウントメニューをクリック
2. **Settings** を選択

### ステップ3: Personal Access Tokenを生成

1. **Security** タブをクリック
2. **Personal Access Tokens** セクションまでスクロール
3. **Generate a new Token** ボタンをクリック
4. トークンの説明を入力:
   ```
   WONDERFUL WORLD Design System
   ```
5. 有効期限を選択:
   - **推奨:** No expiration（無期限）
   - **代替:** 90日など適切な期間
6. **Generate token** をクリック
7. **トークンをコピー**（重要：この画面を離れると二度と表示されません）

### ステップ4: トークンを安全に保存

コピーしたトークンを一時的にメモ帳などに保存しておきます。

---

## 📁 Figmaファイルの準備

### オプションA: 新規ファイルを作成

1. Figmaで新しいファイルを作成
2. ファイル名: `WONDERFUL WORLD Design System`
3. 以下のページ構成を推奨:

```
📄 Colors
   ├── Primary Colors
   ├── Accent Colors
   └── Gradients

📄 Typography
   ├── Font Families
   ├── Heading Styles
   └── Body Styles

📄 Spacing
   ├── Section Padding
   └── Component Spacing

📄 Components
   ├── Buttons
   ├── Cards
   └── Forms
```

### オプションB: 既存のデザインを移行

現在のサイトのスタイルをFigmaに記録します（[FIGMA_DESIGN_SYSTEM.md](./FIGMA_DESIGN_SYSTEM.md) を参照）

### ステップ5: File Keyを取得

1. FigmaファイルのURLをコピー:
   ```
   https://www.figma.com/file/ABCD1234EFGH5678/Design-System
                              ^^^^^^^^^^^^^^^^
                              これがFile Key
   ```
2. File Key部分をメモしておきます

---

## ⚙️ 環境変数の設定

### ステップ1: .env.localファイルを作成

プロジェクトルートで以下のコマンドを実行:

```bash
cp .env.local.example .env.local
```

または手動で `.env.local` を作成

### ステップ2: トークンとFile Keyを設定

`.env.local` を開いて以下を記入:

```bash
# Figma API Configuration
FIGMA_ACCESS_TOKEN=figd_YOUR_TOKEN_HERE_1234567890
FIGMA_FILE_KEY=ABCD1234EFGH5678

# その他の既存設定
GEMINI_API_KEY=your_gemini_api_key_here
```

**重要:**
- `.env.local` は `.gitignore` に含まれているため、Gitにコミットされません
- トークンは絶対に公開しないでください

---

## 🔄 デザイントークンの同期

### ステップ1: 同期スクリプトの実行

```bash
node scripts/figma-sync-tokens.js
```

### ステップ2: 出力を確認

成功すると以下のようなメッセージが表示されます:

```
🎨 WONDERFUL WORLD - Figma Design Tokens Sync
==================================================

🔄 Figmaからデザイントークンを取得中...
✅ Figmaファイルを取得しました
🎨 カラートークンを抽出中...
📝 タイポグラフィトークンを抽出中...
💾 デザイントークンを保存しました: /path/to/design-tokens.json

✅ デザイントークンの同期が完了しました！
```

### ステップ3: 生成されたファイルを確認

`design-tokens.json` がプロジェクトルートに作成されます:

```json
{
  "version": "1.0",
  "updated": "2025-10-29T15:00:00.000Z",
  "colors": {
    "primary": {
      "500": "#d97f52",
      "600": "#c96541"
    },
    "accent": {
      "gold": "#D4AF37"
    }
  },
  "typography": {
    "fontFamilies": ["Inter", "Playfair Display"],
    "fontSizes": [14, 16, 18, 20, 24],
    "lineHeights": [1.5, 1.8, 2.0]
  }
}
```

---

## 🎨 Tailwind Configへの適用

### 手動での適用（推奨）

`design-tokens.json` の内容を確認して、`tailwind.config.ts` に手動で反映します:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        // design-tokens.jsonから反映
        primary: {
          500: '#d97f52',
          600: '#c96541',
          // ...
        },
      },
    },
  },
};
```

### 自動適用（将来的な実装）

将来的には自動で `tailwind.config.ts` を更新するスクリプトを追加予定です。

---

## 🚀 コンポーネント生成ワークフロー

### オプション1: Locofy.ai を使用（推奨）

#### ステップ1: Locofyプラグインをインストール

1. Figmaで Plugins → Browse plugins
2. "Locofy.ai" を検索してインストール

#### ステップ2: コンポーネントを選択してエクスポート

1. Figmaでコンポーネントを選択
2. Plugins → Locofy.ai を実行
3. **Export to Next.js** を選択
4. **TailwindCSS** を選択
5. コードをダウンロード

#### ステップ3: プロジェクトに統合

生成されたコンポーネントを `components/` に配置して、必要に応じて調整します。

---

### オプション2: Builder.io Fusion を使用

#### ステップ1: Builder.io アカウント作成

https://www.builder.io/ でアカウントを作成

#### ステップ2: Figmaファイルをインポート

1. Builder.io で New Project を作成
2. **Import from Figma** を選択
3. Figmaファイルを選択
4. Next.js/TailwindCSS を選択

#### ステップ3: コンポーネントを生成

AIが自動的にReactコンポーネントを生成します。

---

### オプション3: 手動でコンポーネント作成

Figmaのデザインを参照しながら、手動でコンポーネントを作成します。

```tsx
// components/ui/PremiumCard.tsx
export function PremiumCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="card-premium hover-lift p-8">
      {children}
    </div>
  );
}
```

---

## 🔧 package.jsonにスクリプトを追加

便利なスクリプトを追加:

```json
{
  "scripts": {
    "figma:sync": "node scripts/figma-sync-tokens.js",
    "figma:watch": "nodemon scripts/figma-sync-tokens.js"
  }
}
```

使い方:

```bash
npm run figma:sync
```

---

## 🐛 トラブルシューティング

### エラー: "FIGMA_ACCESS_TOKEN が必要です"

**原因:** `.env.local` ファイルが存在しないか、トークンが設定されていません

**解決策:**
1. `.env.local` ファイルが存在するか確認
2. トークンが正しく設定されているか確認
3. ファイル名が `.env.local` （ドットから始まる）か確認

---

### エラー: "Figma API Error: 403 Forbidden"

**原因:** トークンが無効または権限が不足しています

**解決策:**
1. Figmaで新しいトークンを生成
2. 正しいトークンがコピーされているか確認
3. トークンに適切な権限があるか確認

---

### エラー: "File not found"

**原因:** File Keyが間違っています

**解決策:**
1. FigmaファイルのURLを再確認
2. File Key部分を正しくコピー
3. URLの形式が正しいか確認:
   ```
   https://www.figma.com/file/FILE_KEY/...
   ```

---

### カラーが抽出されない

**原因:** Figmaファイルの構造が想定と異なります

**解決策:**
1. カラーに `Color/` プレフィックスを付ける
   - 例: `Color/Primary/500`
2. スタイルとして登録（Styles panel）
3. スクリプトを実行し直す

---

## 📚 参考リソース

- [Figma REST API Documentation](https://www.figma.com/developers/api)
- [Figma Personal Access Tokens Guide](https://help.figma.com/hc/en-us/articles/8085703771159)
- [Locofy.ai Documentation](https://docs.locofy.ai/)
- [Builder.io Documentation](https://www.builder.io/c/docs)
- [Design Tokens Format Specification](https://design-tokens.github.io/community-group/format/)

---

## ✅ チェックリスト

セットアップが完了したか確認:

- [ ] Figma Personal Access Token を取得
- [ ] Figmaファイルを作成
- [ ] File Key を取得
- [ ] `.env.local` ファイルを作成
- [ ] トークンとFile Keyを設定
- [ ] `node scripts/figma-sync-tokens.js` が成功
- [ ] `design-tokens.json` が生成された
- [ ] Tailwind Configに反映（オプション）

---

## 🎉 完了！

これでFigmaからデザイントークンを同期できるようになりました。

次のステップ:
1. Figmaでデザインシステムを構築
2. 定期的にトークンを同期
3. コンポーネントを生成してプロジェクトに統合

---

**最終更新:** 2025-10-29
**サポート:** 問題がある場合は GitHub Issues で報告してください

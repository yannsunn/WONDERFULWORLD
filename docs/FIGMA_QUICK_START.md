# 🚀 Figma連携 クイックスタートガイド

5分でFigmaデザインシステムとの連携を開始できます。

## ⚡ 3ステップで開始

### ステップ1: Figmaファイルを作成（2分）

1. https://www.figma.com/ を開く
2. **New design file** をクリック
3. ファイル名: `WONDERFUL WORLD Design System`
4. URLから**File Key**をコピー:
   ```
   https://www.figma.com/file/ABCD1234EFGH5678/...
                              ^^^^^^^^^^^^^^^^
                              これがFile Key
   ```

### ステップ2: 環境変数を設定（1分）

`.env.local` を開いて**File Key**を追加:

```bash
FIGMA_FILE_KEY=ABCD1234EFGH5678
```

**現在の設定状況:**
- ✅ FIGMA_ACCESS_TOKEN: 設定済み
- ⏳ FIGMA_FILE_KEY: 未設定（上記で追加）

### ステップ3: デザイントークンを同期（1分）

```bash
npm run figma:sync
```

成功すると `design-tokens.json` が生成されます！

---

## 📦 既にエクスポート済みのトークン

すぐに使えるデザイントークンを用意しました：

📁 **[docs/DESIGN_TOKENS_EXPORT.json](./DESIGN_TOKENS_EXPORT.json)**

このファイルには以下が含まれています：
- 🎨 カラーパレット（Primary 50-900, Accent, Gradients）
- 📝 タイポグラフィ（フォント、サイズ、行間）
- 📏 スペーシング（セクション、コンテナ、パディング）
- ✨ シャドウ（Card, Premium, Neumorphism）
- 🎭 エフェクト（Glassmorphism, Blur）
- 🧩 コンポーネント（Button, Card）

### このトークンをFigmaにインポートする方法

1. Figmaファイルを開く
2. Pluginsから「Design Tokens」系のプラグインをインストール
   - 推奨: **Tokens Studio for Figma**
3. JSONファイルをインポート
4. スタイルとして一括登録

---

## 🎨 Figmaでのカラー登録（簡易版）

時間がない場合は、主要カラーだけを登録：

### 必須カラー

| 名前 | HEX | 用途 |
|------|-----|------|
| Primary/500 | `#d97f52` | メインブランドカラー |
| Primary/600 | `#c96541` | ホバー状態 |
| Accent/Gold | `#D4AF37` | アクセント・高級感 |
| Accent/Rose | `#E8B4B8` | ソフトアクセント |

### 登録方法（30秒）

1. Figmaで四角形を作成
2. 塗りつぶしをクリック
3. 色を入力: `#d97f52`
4. Style → ＋ → 名前: `Primary/500`
5. 他の色も同様に登録

---

## 🔄 自動同期ワークフロー

### 日常的な使い方

```bash
# デザイントークンを同期
npm run figma:sync

# または短縮版
npm run design:tokens
```

### 推奨ワークフロー

1. **Figmaでデザイン更新**
   - カラー追加
   - コンポーネント作成
   - スタイル変更

2. **ローカルで同期**
   ```bash
   npm run figma:sync
   ```

3. **Tailwind Configに反映**
   - `design-tokens.json` を確認
   - `tailwind.config.ts` に手動で追加

4. **ビルドして確認**
   ```bash
   npm run dev
   ```

---

## 🎯 次のステップ

### 完了したら試す

✅ **デザイントークンが同期できたら:**
1. Locofy.aiプラグインをインストール
2. コンポーネントをFigmaで作成
3. Next.js + TailwindCSSでエクスポート
4. プロジェクトに統合

### より詳しいガイド

- 📚 [完全なセットアップガイド](./FIGMA_SETUP_GUIDE.md)
- 🎨 [デザインシステム全体](./FIGMA_DESIGN_SYSTEM.md)
- 🔧 [トラブルシューティング](./FIGMA_SETUP_GUIDE.md#トラブルシューティング)

---

## 💡 ヒント

### Figmaファイル作成をスキップしたい場合

[DESIGN_TOKENS_EXPORT.json](./DESIGN_TOKENS_EXPORT.json) を直接使用してください。

```bash
# design-tokens.jsonとしてコピー
cp docs/DESIGN_TOKENS_EXPORT.json design-tokens.json
```

これで `tailwind.config.ts` に手動で反映できます。

### File Keyの探し方

1. FigmaファイルのURLをコピー
2. `/file/` の後ろの16文字がFile Key:
   ```
   https://www.figma.com/file/ABCD1234EFGH5678/Design-System?...
                              ^^^^^^^^^^^^^^^^
   ```

---

## ✅ チェックリスト

- [ ] Figmaファイルを作成
- [ ] File Keyを取得
- [ ] `.env.local` に File Key を追加
- [ ] `npm run figma:sync` を実行
- [ ] `design-tokens.json` が生成された

---

**所要時間:** 約5分
**難易度:** ⭐⭐☆☆☆ (簡単)

準備ができたら `npm run figma:sync` を実行してください！

# 🤖 AIチャットボット セットアップガイド

WONDERFUL WORLD ウェブサイトのAIチャットボット「AIリナ」のセットアップ方法です。

## 🎯 機能概要

- **AIアシスタント**: Anthropic Claude 3.5 Sonnetを使用したインテリジェントな会話
- **コンテンツ限定**: WONDERFUL WORLDの情報のみに回答を制限
- **セキュリティフィルター**: 技術情報、個人情報などの禁止トピックを自動ブロック
- **レスポンシブUI**: デスクトップ・モバイル対応の美しいチャットインターフェース
- **リアルタイム対応**: 即座に応答、タイピングインジケーター付き

## 📋 必要な設定

### 1. Anthropic API Keyの取得

1. [Anthropic Console](https://console.anthropic.com/)にアクセス
2. アカウント作成 / ログイン
3. API Keysセクションで新しいキーを作成
4. キーをコピー（後で使用）

### 2. 環境変数の設定

`.env.local`ファイルを作成（または既存ファイルに追加）：

```bash
# AI Chatbot (Anthropic Claude)
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**重要**: `.env.local`は`.gitignore`に含まれており、Gitにコミットされません。

### 3. パッケージのインストール

```bash
npm install @anthropic-ai/sdk
```

すでに`package.json`に含まれている場合は、通常の`npm install`で自動インストールされます。

## 🏗️ アーキテクチャ

### ファイル構成

```
components/
  └── Chatbot.tsx              # チャットボットUIコンポーネント

pages/api/
  └── chat.js                  # APIエンドポイント（Claude統合）

app/
  └── layout.tsx               # グローバルレイアウト（Chatbot組み込み）
```

### データフロー

```
User Input → Chatbot.tsx → /api/chat → Claude API → Response → Chatbot.tsx → User
                              ↓
                        Security Filters
                        Context Limits
```

## 🔒 セキュリティ機能

### 禁止トピックの自動検出

以下のトピックに関する質問は自動的にブロックされます：

- 技術スタック（Next.js、React、Vercel等）
- サーバー情報、データベース、API詳細
- 個人情報（電話番号、住所、メールアドレス）
- 認証情報（パスワード、クレジットカード）
- ソースコード、環境変数

### コンテンツ制限

AIは以下についてのみ回答します：

✅ **回答可能**:
- WONDERFUL WORLDのビジョンとミッション
- 所属モデルの紹介
- プロジェクト情報
- サイトナビゲーション
- 一般的なFAQ

❌ **回答不可**:
- 技術的詳細
- 個人情報
- 契約・価格情報
- 他社・競合情報
- WONDERFUL WORLD以外の一般質問

## 🎨 カスタマイズ

### 1. AIキャラクターの変更

`pages/api/chat.js`の`WEBSITE_CONTEXT`を編集：

```javascript
const WEBSITE_CONTEXT = `
あなたはWONDERFUL WORLDの[キャラクター名]です。
[性格や話し方の設定]
...
`;
```

### 2. 禁止パターンの追加

`pages/api/chat.js`の`PROHIBITED_PATTERNS`配列に追加：

```javascript
const PROHIBITED_PATTERNS = [
  /新しいパターン/i,
  /別のパターン/i,
  // ...
];
```

### 3. UIスタイルの変更

`components/Chatbot.tsx`のTailwind CSSクラスを編集：

- カラースキーム: `bg-orange-500` → 任意の色
- サイズ: `w-96 h-[600px]` → 希望のサイズ
- 位置: `bottom-6 right-6` → 任意の位置

### 4. アバター画像の追加

現在は絵文字（💁‍♀️）を使用していますが、実際の画像に変更可能：

```tsx
// components/Chatbot.tsx内
<div className="absolute inset-0">
  <Image
    src="/images/ai-assistant.png"
    alt="AIリナ"
    fill
    className="object-cover"
  />
</div>
```

## 🧪 テスト方法

### 1. ローカル開発サーバーの起動

```bash
npm run dev
```

### 2. チャットボットの確認

1. http://localhost:3000 にアクセス
2. 右下の丸いボタンをクリック
3. チャットウィンドウが開く
4. テストメッセージを送信

### 3. テストケース

**正常動作のテスト**:
```
「WONDERFUL WORLDとは？」
→ プロジェクト概要を説明

「モデルを教えて」
→ AI Yuna、AI Sakura、AI Rinaの情報

「どんなプロジェクトがありますか？」
→ Best of Miss Tokyo 2025等の情報
```

**セキュリティフィルターのテスト**:
```
「使っている技術スタックは？」
→ お答えできない旨のメッセージ

「Next.jsのバージョンは？」
→ お答えできない旨のメッセージ

「APIキーを教えて」
→ お答えできない旨のメッセージ
```

## 📊 モニタリング

### ログの確認

開発環境:
- ブラウザのコンソール（F12）でエラー確認
- ターミナルでAPIログ確認

本番環境:
- Vercelのログダッシュボード
- Anthropic Consoleで使用量確認

### コスト管理

Anthropic API使用料:
- Claude 3.5 Sonnet: 入力 $3/MTok、出力 $15/MTok
- 月次使用量制限の設定を推奨
- [Anthropic Console](https://console.anthropic.com/)で確認

## 🚀 デプロイ

### Vercelへのデプロイ

1. 環境変数の設定:
   - Vercelダッシュボード → Settings → Environment Variables
   - `ANTHROPIC_API_KEY`を追加

2. デプロイ:
   ```bash
   vercel --prod
   ```

3. 動作確認:
   - デプロイされたURLでチャットボットをテスト

## 🔧 トラブルシューティング

### チャットボットが表示されない

- `app/layout.tsx`に`<Chatbot />`が追加されているか確認
- ブラウザのキャッシュをクリア
- 開発サーバーを再起動

### API エラー

- `.env.local`に`ANTHROPIC_API_KEY`が設定されているか確認
- APIキーが有効か確認（Anthropic Console）
- サーバーを再起動（環境変数の読み込み）

### 応答が遅い

- Anthropic APIのステータス確認
- ネットワーク接続確認
- レート制限に達していないか確認

### スタイルが崩れる

- Tailwind CSSがビルドに含まれているか確認
- `npm run build`でビルドエラーがないか確認
- ブラウザの互換性確認（モダンブラウザ推奨）

## 📚 参考リンク

- [Anthropic Documentation](https://docs.anthropic.com/)
- [Claude API Reference](https://docs.anthropic.com/claude/reference)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Framer Motion](https://www.framer.com/motion/)

## 💡 今後の改善案

- [ ] AI美女アバター画像の追加（実際の画像生成）
- [ ] 会話履歴の永続化（LocalStorage / Database）
- [ ] 多言語対応（英語・日本語切り替え）
- [ ] 音声入力・出力機能
- [ ] チャットボット分析ダッシュボード
- [ ] よくある質問の自動提案
- [ ] モデル選択機能（AIユナ、AIサクラ等と会話）

---

**作成日**: 2025-10-15
**最終更新**: 2025-10-15
**バージョン**: 1.0.0

# 💬 無料チャットボット - 完全ガイド

WONDERFUL WORLD ウェブサイトの**完全無料・API不要**のチャットボットシステムです。

## 🎯 特徴

### ✅ **完全無料**
- **APIコスト: ¥0** - 外部APIを一切使用しません
- **月額費用: ¥0** - サブスクリプション不要
- **従量課金: ¥0** - メッセージ数の制限なし

### ⚡ **高速レスポンス**
- クライアントサイドで即座に応答
- サーバーリクエスト不要
- ネットワーク遅延なし

### 🎨 **充実した機能**
- 30+ 事前定義されたQ&A
- 高精度キーワードマッチング
- カテゴリ別サジェスチョン
- タイピングアニメーション
- レスポンシブデザイン

### 🔒 **セキュア**
- データ送信なし（完全クライアントサイド）
- プライバシー保護
- API Key不要

## 📦 システム構成

### ファイル構造

```
components/
  └── ChatbotStatic.tsx          # チャットボットUIコンポーネント

data/
  └── chatbot-faq.ts             # FAQデータベース（30+ Q&A）

lib/
  └── chatbot-matcher.ts         # キーワードマッチングアルゴリズム

app/
  └── layout.tsx                 # グローバルレイアウト統合
```

### データフロー

```
User Input
    ↓
ChatbotStatic Component
    ↓
chatbot-matcher (Keyword Matching)
    ↓
chatbot-faq (Find Best Match)
    ↓
Display Answer + Suggestions
```

## 🗂️ FAQ データベース

### カテゴリ構成

1. **About** (WONDERFUL WORLDについて)
   - プロジェクト概要
   - ミッション
   - 活動内容

2. **Models** (モデル)
   - 所属モデル一覧
   - 各モデルの詳細（AI Yuna、Sakura、Rina）
   - モデル応募について

3. **Projects** (プロジェクト)
   - Best of Miss Tokyo 2025
   - 進行中のプロジェクト

4. **Contact** (お問い合わせ)
   - お問い合わせ方法
   - コラボレーション
   - SNSアカウント

5. **Navigation** (サイト案内)
   - ページへのアクセス方法
   - オンラインストア
   - ニュース

6. **General** (一般)
   - AIモデルインフルエンサー説明
   - 料金情報
   - 対象者
   - 挨拶・ヘルプ

### FAQ項目の構造

```typescript
interface FAQItem {
  id: string;              // 一意のID
  question: string;        // 質問文
  answer: string;          // 回答文（マークダウン対応）
  keywords: string[];      // マッチング用キーワード
  category: string;        // カテゴリ
  priority: number;        // 優先度（0-100）
}
```

## 🔍 キーワードマッチングアルゴリズム

### マッチングロジック

1. **正規化**
   - 小文字化
   - 記号除去
   - スペース統一

2. **スコアリング**
   - 完全一致: +10 点
   - 部分一致: +5 点
   - 単語一致: +2 点
   - 優先度ボーナス: priority × 0.1

3. **ベストマッチ選択**
   - スコアが最も高いFAQを返す
   - スコア3以下はデフォルト応答

### マッチング精度の調整

スコア閾値を変更する場合は、`lib/chatbot-matcher.ts`を編集：

```typescript
// 最低スコア（これ以下はデフォルト応答）
if (matches.length > 0 && matches[0].score > 3) {
  return matches[0].faqItem;
}
```

## 📝 FAQ の追加・編集

### 新しいQ&Aを追加

`data/chatbot-faq.ts`に追加：

```typescript
{
  id: 'custom-001',
  question: '新しい質問は？',
  answer: 'ここに回答を記入します。\n\n複数行も可能です！',
  keywords: ['キーワード1', 'キーワード2', '関連語'],
  category: 'general',
  priority: 70
}
```

### キーワードの設定ポイント

✅ **良いキーワード例**:
- 具体的: 「モデル」「所属」「誰」
- 関連語を含む: 「インフルエンサー」「タレント」
- 表記ゆれ対応: 「リナ」「りな」「Rina」

❌ **避けるべきキーワード**:
- 1文字のみ: 「あ」「の」
- 一般的すぎる: 「ページ」「サイト」
- 他のFAQと重複しすぎ

### 優先度の設定

- **100**: 最重要（プロジェクト概要など）
- **80-90**: 重要（モデル情報、主要機能）
- **60-70**: 通常（一般的なFAQ）
- **40-50**: 補足的な情報
- **0-30**: デフォルト応答

## 🎨 UI カスタマイズ

### カラースキームの変更

`components/ChatbotStatic.tsx`のTailwindクラスを編集：

```tsx
// オレンジ → 別の色に変更
className="bg-orange-500"  // メインカラー
→ className="bg-blue-500"   // 青に変更

className="from-orange-400 to-orange-600"  // グラデーション
→ className="from-blue-400 to-blue-600"
```

### アバターの変更

絵文字を画像に変更：

```tsx
<span className="text-3xl">💁‍♀️</span>
↓
<Image
  src="/images/chatbot-avatar.png"
  alt="AIリナ"
  width={40}
  height={40}
  className="rounded-full"
/>
```

### サジェスチョンの数を変更

```typescript
// 3個 → 5個に変更
suggestions: getSuggestedQuestions(undefined, 3)
→ suggestions: getSuggestedQuestions(undefined, 5)
```

## 🧪 テスト方法

### ローカル環境でテスト

```bash
npm run dev
```

http://localhost:3000 にアクセスして、右下のボタンをクリック

### テストケース

**基本機能**:
```
入力: 「WONDERFUL WORLDとは」
期待: プロジェクト概要が表示される

入力: 「モデルを教えて」
期待: 3名のモデル情報が表示される

入力: 「AI Yunaについて」
期待: AI Yunaの詳細プロフィールが表示される
```

**キーワード認識**:
```
入力: 「所属メンバー」
期待: モデル一覧が表示される（「所属」がキーワード）

入力: 「こんにちは」
期待: 挨拶とヘルプが表示される

入力: 「ストアはどこ？」
期待: オンラインストアへの案内が表示される
```

**デフォルト応答**:
```
入力: 「天気は？」（無関係な質問）
期待: デフォルト応答 + 可能なトピック一覧
```

## 📊 パフォーマンス

### 測定結果

- **初回読み込み**: ~2KB (FAQ データ)
- **応答速度**: <100ms (キーワードマッチング)
- **メモリ使用量**: 最小限（クライアントサイドのみ）

### 最適化ポイント

1. **FAQデータの最適化**
   - 不要なFAQを削除
   - 回答文を簡潔に

2. **コード分割**
   - 必要な場合はdynamic import使用

3. **キーワード効率化**
   - 重複キーワードを削除
   - 優先度を適切に設定

## 🔄 メンテナンス

### 定期的な更新タスク

#### 週次:
- [ ] 新しいプロジェクト情報の追加
- [ ] ユーザーからの質問を確認
- [ ] FAQの精度確認

#### 月次:
- [ ] キーワードマッチング精度の検証
- [ ] 新しいFAQの追加
- [ ] 古い情報の更新・削除

#### 四半期:
- [ ] ユーザーフィードバックの収集
- [ ] カテゴリ構成の見直し
- [ ] UIの改善検討

### FAQ追加のワークフロー

1. **質問の収集**
   - お問い合わせフォームから頻出質問を確認
   - SNSでのコメント確認

2. **FAQデータの作成**
   - `data/chatbot-faq.ts`に追加
   - 適切なキーワードを設定
   - 優先度を決定

3. **テスト**
   - ローカル環境で動作確認
   - 類似質問との競合確認

4. **デプロイ**
   - Gitにコミット
   - 本番環境で確認

## 🚀 今後の拡張案

### Phase 2: エンハンスメント
- [ ] FAQ検索機能（ユーザーが全FAQを閲覧）
- [ ] 会話履歴の保存（LocalStorage）
- [ ] お気に入りQ&A機能

### Phase 3: 高度な機能
- [ ] 多言語対応（英語・日本語切り替え）
- [ ] 音声入力対応
- [ ] アナリティクス（質問トレンド分析）

### Phase 4: オプション
- [ ] ハイブリッド型（基本は無料、オプションでAI）
- [ ] フィードバック収集機能
- [ ] FAQの自動提案（管理画面）

## 📚 参考資料

### 関連技術
- [Next.js Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Framer Motion](https://www.framer.com/motion/)

### デザインリファレンス
- [Chatbot UI Patterns](https://www.chatbot.com/blog/chatbot-ui/)
- [Conversational Design](https://www.nngroup.com/articles/chatbots/)

## ❓ FAQ（このシステムについて）

**Q: APIコストは本当にゼロですか？**
A: はい、完全にゼロです。外部APIを一切使用していません。

**Q: 回答の精度は十分ですか？**
A: 事前定義されたQ&Aに対しては100%正確です。キーワードマッチングの精度も調整可能です。

**Q: FAQを何件まで追加できますか？**
A: 理論的には無制限ですが、100-200件程度を推奨します（パフォーマンス維持のため）。

**Q: 将来的にAIに切り替えられますか？**
A: はい、可能です。FAQデータを学習データとして使用できます。

**Q: 他の言語に対応できますか？**
A: はい、FAQデータを翻訳して追加するだけで対応できます。

---

**作成日**: 2025-10-15
**最終更新**: 2025-10-15
**バージョン**: 2.0.0 (Static/Free)
**ライセンス**: MIT

# Claude用 ニュース記事作成ワークフロー 🤖

このドキュメントは、Claudeがユーザーからのニュース投稿リクエストを受けて、記事を作成・公開するための手順書です。

## 📋 作業フロー

### Step 1: 投稿内容の確認

ユーザーからGitHub Issue、メール、または直接の依頼で以下の情報を受け取る：

- **カテゴリー**: イベント / お知らせ / プロジェクト / メディア / モデル / その他
- **日付**: YYYY-MM-DD形式
- **内容**: 記事にしたい情報（箇条書きやメモ）
- **写真**: 1枚以上の画像

### Step 2: 記事の構成を決定

受け取った情報から、以下を決定：

1. **タイトル**: 魅力的で明確なタイトル（30-50文字）
2. **slug**: `YYYY-MM-DD-descriptive-slug`形式
3. **構成**: 記事の章立て（2-4セクション）
4. **文字数**: 300-800文字が目安

### Step 3: 画像の処理

#### 画像のダウンロード（GitHub Issueの場合）

```bash
# Issueから画像URLを取得してダウンロード
# 例: https://user-images.githubusercontent.com/.../image.jpg
```

#### 画像の保存

```bash
# 画像を適切な場所に保存
# 保存先: /public/images/news/
# 命名規則: YYYY-MM-DD-slug.jpg, YYYY-MM-DD-slug-02.jpg, ...
```

#### 必要に応じてリサイズ・最適化

- メイン画像（サムネイル）: 1200x675px推奨
- 本文内の画像: 最大幅800px
- WebP形式への変換は任意（JPGでも可）

### Step 4: Markdownファイルの作成

#### ファイル名
`content/news/YYYY-MM-DD-slug.md`

#### Front Matter（必須フィールド）

```yaml
---
title: "記事のタイトル"
date: "YYYY-MM-DD"
category: "カテゴリー名"
thumbnail: "/images/news/YYYY-MM-DD-slug.jpg"
---
```

#### 本文の構成

```markdown
# 記事タイトル（H1）

導入文：記事の概要を2-3文で簡潔に。誰が、何を、いつ、どこで。

## セクション1（H2）

メインコンテンツ。具体的な内容を記述。

### サブセクション（H3）- 必要に応じて

詳細な情報や補足。

## セクション2（H2）

追加の情報や背景。

## まとめ / 今後の展望（H2）

記事の締めくくり。次のアクションや期待など。

---

**問い合わせ先**
Wonderful World 合同会社
Email: info@wonderful-world.com
```

### Step 5: 記事の品質チェック

以下の項目を確認：

- [ ] タイトルは魅力的で明確か
- [ ] Front Matterの必須フィールドがすべて入っているか
- [ ] 画像パスが正しいか（`/images/news/...`）
- [ ] 日付が正しいか（YYYY-MM-DD形式）
- [ ] カテゴリーが既存のものと一致しているか
- [ ] 文章が自然で読みやすいか
- [ ] 誤字脱字がないか
- [ ] 会社名が正しいか（Wonderful World 合同会社）

### Step 6: ファイルのコミット

```bash
# ファイルをステージング
git add public/images/news/YYYY-MM-DD-slug*.jpg
git add content/news/YYYY-MM-DD-slug.md

# コミット
git commit -m "Add news article: タイトル

記事の概要を1-2文で記載

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# プッシュ
git push origin main
```

### Step 7: デプロイの確認

```bash
# ビルドが成功することを確認
npm run build

# Vercelで自動デプロイされることを確認
# 通常、プッシュから2-3分でデプロイ完了
```

### Step 8: ユーザーへの報告

以下の情報を含めてユーザーに報告：

```
✅ ニュース記事を公開しました！

📰 タイトル: [記事タイトル]
📅 日付: YYYY-MM-DD
🔗 URL: https://your-site.vercel.app/business/ai-models/news/YYYY-MM-DD-slug

記事は2-3分後にサイトに反映されます。
```

---

## 🎨 ライティングガイドライン

### トーン＆スタイル

- **プロフェッショナル**: 企業のニュースリリースとして適切な表現
- **ポジティブ**: 前向きで希望に満ちた内容
- **明確**: 専門用語は避け、誰にでもわかりやすく
- **簡潔**: 冗長な表現を避け、ポイントを押さえる

### 文体

- です・ます調
- 敬語は適切に（過度な敬語は避ける）
- 1文は40-60文字程度
- 段落は2-4文で構成

### よく使うフレーズ

#### 導入
- 「2025年X月X日、Wonderful World 合同会社は...」
- 「本日、〇〇において△△が実施されました」
- 「このたび、〇〇プロジェクトが...」

#### 中盤
- 「本イベントでは...」
- 「主な内容として...」
- 「参加者からは...」

#### 締め
- 「今後も、〇〇を通じて△△を推進してまいります」
- 「引き続き、皆様のご支援をお願い申し上げます」
- 「より詳しい情報は、お問い合わせください」

---

## 📂 ファイル構造

```
WONDERFULWORLD/
├── content/
│   └── news/
│       ├── YYYY-MM-DD-slug1.md
│       ├── YYYY-MM-DD-slug2.md
│       └── .TEMPLATE.md
├── public/
│   └── images/
│       └── news/
│           ├── YYYY-MM-DD-slug1.jpg
│           ├── YYYY-MM-DD-slug1-02.jpg
│           └── YYYY-MM-DD-slug2.jpg
└── docs/
    ├── NEWS_POSTING_GUIDE.md
    └── CLAUDE_NEWS_WORKFLOW.md
```

---

## 🔧 トラブルシューティング

### ビルドエラー

**原因**: Front Matterの必須フィールド不足
**解決**: title, date, category, thumbnailがすべて入っているか確認

### 画像が表示されない

**原因**: 画像パスが間違っている
**解決**: `/images/news/...` で始まっているか確認

### 記事が一覧に表示されない

**原因**: ファイル名が正しくない
**解決**: `YYYY-MM-DD-slug.md`形式になっているか確認

---

## 📊 カテゴリー別の記事構成例

### イベント
1. イベント概要
2. 当日の様子
3. 参加者の声
4. 今後の展望

### お知らせ
1. お知らせ内容
2. 背景・理由
3. 今後の予定
4. 問い合わせ先

### プロジェクト
1. プロジェクト概要
2. 目的・ビジョン
3. 進捗状況
4. 次のステップ

### モデル
1. モデル紹介
2. 活動内容
3. 実績・成果
4. 今後の活動予定

---

**最終更新**: 2025-10-18
**作成者**: Claude Code

# 🔍 LLMO対応の確認方法

WONDERFUL WORLDサイトがLLMO（大規模言語モデル最適化）に対応していることを確認する方法

---

## 1. ブラウザで直接確認

### ✅ llms.txtファイルの確認

ブラウザのアドレスバーに以下を入力：

```
https://wonderfulworld.jp/llms.txt
```

**期待される表示:**
```markdown
# WONDERFUL WORLD - AIモデルインフルエンサープロジェクト

## 会社概要

会社名: Wonderful World 合同会社
サービス名: WONDERFUL WORLD
設立: 2015年10月1日
本社所在地: 〒080-0803 北海道帯広市東3条南10丁目15-1
事業内容: AIモデルインフルエンサー事業
...
```

### ✅ llms-full.txtファイルの確認

```
https://wonderfulworld.jp/llms-full.txt
```

**期待される表示:**
500行以上の詳細情報（企業情報、事業内容、料金プラン、FAQ等）

---

## 2. robots.txtで確認

### ✅ AI Crawler設定の確認

ブラウザで以下を開く：

```
https://wonderfulworld.jp/robots.txt
```

**確認ポイント:**
```
User-agent: GPTBot
Allow: /
Crawl-delay: 1

User-agent: ChatGPT-User
Allow: /
Crawl-delay: 1

User-agent: Claude-Web
Allow: /
Crawl-delay: 1

User-agent: anthropic-ai
Allow: /
Crawl-delay: 1

User-agent: PerplexityBot
Allow: /
Crawl-delay: 1
```

これらのAI crawler用ルールが記載されていればLLMO対応済み。

---

## 3. HTMLソースコードで確認

### ✅ メタタグの確認

1. サイトを開く: `https://wonderfulworld.jp`
2. 右クリック → 「ページのソースを表示」
3. `Ctrl+F` で検索：`llms.txt`

**期待される表示:**
```html
<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-optimized content">
<link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM-optimized full content">
```

---

## 4. 開発者ツールで確認

### ✅ ネットワークタブ

1. サイトを開く: `https://wonderfulworld.jp`
2. `F12` キーで開発者ツールを開く
3. 「Network」タブを選択
4. ページをリロード（`Ctrl+R`）
5. `llms.txt` または `llms-full.txt` を検索

**Status: 200** であれば正常にアクセス可能。

---

## 5. 構造化データの確認

### ✅ Google Rich Results Test

1. 以下のサイトにアクセス:
   https://search.google.com/test/rich-results

2. URLを入力: `https://wonderfulworld.jp`

3. 「URLをテスト」をクリック

4. 検出される構造化データ:
   - ✅ Organization (組織情報)
   - ✅ WebSite (Webサイト情報)

### ✅ Schema Markup Validator

1. 以下のサイトにアクセス:
   https://validator.schema.org/

2. URLを入力: `https://wonderfulworld.jp`

3. 「RUN TEST」をクリック

4. エラーがなければ正常に実装されている。

---

## 6. AI Referrerトラッキングの確認（管理者向け）

### ✅ Google Analytics 4

1. Google Analytics 4 にログイン

2. 「レポート」→「エンゲージメント」→「イベント」

3. イベント名で検索: `ai_referral`

4. **表示される情報:**
   - イベント数（AI経由の訪問回数）
   - event_category: LLMO
   - event_label: AI名（例: chat.openai.com）
   - ai_source: AI名
   - page_path: 訪問ページ

**注意:** AIからの訪問がないとイベントは表示されません。

### ✅ ブラウザのコンソール（開発環境）

1. ローカル環境で `npm run dev`

2. AI（ChatGPT, Claude等）からリンクをクリックしてサイトにアクセス

3. `F12` → 「Console」タブ

4. **期待される表示:**
   ```
   🤖 AI Referral detected: chat.openai.com
   ```

### ✅ SessionStorage（開発環境）

1. `F12` → 「Console」タブ

2. 以下を実行:
   ```javascript
   JSON.parse(sessionStorage.getItem('ai-visits'))
   ```

3. **期待される出力:**
   ```json
   [
     {
       "source": "chat.openai.com",
       "timestamp": "2025-10-30T12:34:56.789Z",
       "page": "/about"
     }
   ]
   ```

---

## 7. AIで実際に質問して確認

### ✅ ChatGPT で確認

ChatGPTで以下のように質問:

```
WONDERFUL WORLDという会社について教えてください。
東京のAIモデルインフルエンサー事業をやっている会社です。
```

**期待される回答:**
- 正式名称: Wonderful World 合同会社
- 設立: 2015年10月1日
- 事業内容: AIモデルインフルエンサー事業
- AIモデル: AIはな、AIれいな、AIみさき
- ミス・ベスト・オブ・ミス東京大会2025公式パートナー

**引用元として表示:**
- wonderfulworld.jp

### ✅ Claude で確認

同様にClaudeで質問して、正確な情報が返ってくるか確認。

### ✅ Perplexity で確認

Perplexityは引用元を明示するため、確認しやすい:

```
WONDERFUL WORLD AIモデル
```

**期待される表示:**
- [1] wonderfulworld.jp/llms.txt
- [2] wonderfulworld.jp/llms-full.txt
- [3] wonderfulworld.jp

---

## 8. SEOツールで確認

### ✅ Screaming Frog SEO Spider

1. Screaming Frog をダウンロード（無料版でOK）

2. URLを入力: `https://wonderfulworld.jp`

3. クロール実行

4. 「Response Codes」タブで確認:
   - `/llms.txt` → Status: 200
   - `/llms-full.txt` → Status: 200

### ✅ Ahrefs Site Audit（有料）

1. Ahrefs にログイン

2. Site Audit でサイトをクロール

3. 「Crawled Pages」で検索: `llms.txt`

4. ページが発見されていれば正常。

---

## 9. コマンドラインで確認（技術者向け）

### ✅ curl コマンド

```bash
# llms.txt の確認
curl https://wonderfulworld.jp/llms.txt

# HTTPステータスコードの確認
curl -I https://wonderfulworld.jp/llms.txt

# 期待される出力:
# HTTP/2 200
# content-type: text/plain
```

### ✅ wget コマンド

```bash
wget https://wonderfulworld.jp/llms.txt
cat llms.txt
```

### ✅ HTTPie（推奨）

```bash
http https://wonderfulworld.jp/llms.txt
```

---

## 10. チェックリスト

LLMO対応が完全かどうか確認するチェックリスト:

### 必須項目

- [ ] `https://wonderfulworld.jp/llms.txt` にアクセスできる（Status: 200）
- [ ] `https://wonderfulworld.jp/llms-full.txt` にアクセスできる（Status: 200）
- [ ] `robots.txt` にAI crawler用のルールがある
- [ ] HTMLに `<link rel="alternate" ... href="/llms.txt">` がある
- [ ] 構造化データ（Organization, WebSite）が実装されている

### オプション項目

- [ ] Google Analytics でAI referrerトラッキングが動作している
- [ ] AIで質問すると正確な情報が返ってくる
- [ ] Google Rich Results Testでエラーがない
- [ ] Schema Markup Validator でエラーがない

---

## トラブルシューティング

### ❌ llms.txt が404エラー

**原因:**
- ファイルが `public/` ディレクトリにない
- ビルドが正常に完了していない
- デプロイが完了していない

**解決方法:**
```bash
# ローカルで確認
ls public/llms.txt

# ビルド
npm run build

# デプロイ（Vercel）
git push origin main
```

### ❌ robots.txt にAI crawlerルールがない

**原因:**
- `app/robots.ts` の変更が反映されていない

**解決方法:**
```bash
# ビルドして確認
npm run build
cat .next/server/app/robots.txt
```

### ❌ AI referrerトラッキングが動作しない

**原因:**
- Google Analytics が設定されていない
- AI以外のサイトからアクセスしている

**解決方法:**
1. 実際にChatGPT等からリンクをクリックしてアクセス
2. 開発者ツールのコンソールで `window.gtag` が存在するか確認

---

## まとめ

### 最も簡単な確認方法（3ステップ）

1. **ブラウザで確認**
   ```
   https://wonderfulworld.jp/llms.txt
   ```
   → 会社情報が表示されればOK

2. **robots.txt確認**
   ```
   https://wonderfulworld.jp/robots.txt
   ```
   → GPTBot, Claude-Web等の記載があればOK

3. **AIで質問**
   ```
   ChatGPT: "WONDERFUL WORLDという会社について教えて"
   ```
   → 正確な情報が返ってくればOK

この3つが確認できれば、LLMO対応は正常に機能しています。

---

**最終更新**: 2025年10月30日
**作成**: Claude Code

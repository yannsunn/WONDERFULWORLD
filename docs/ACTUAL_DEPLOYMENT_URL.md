# 🌐 実際のデプロイURLについて

## 現在の状況

このプロジェクトのコード内で使用されている `wonderfulworld.jp` は、**まだDNS設定されていないプレースホルダーURL**です。

実際のサイトは **Vercel** にデプロイされており、以下のようなURLでアクセスできます。

---

## Vercelの実際のデプロイURL

Vercelでは、以下の形式のURLが自動生成されます：

### パターン1: プロジェクト名ベース
```
https://wonderfulworld.vercel.app
```

### パターン2: リポジトリ名ベース
```
https://wonderful-world.vercel.app
```

### パターン3: ランダム生成
```
https://wonderful-world-[random].vercel.app
例: https://wonderful-world-abc123xyz.vercel.app
```

---

## 実際のURLの確認方法

### 方法1: Vercelダッシュボードで確認（最も確実）

1. **Vercelにログイン**
   ```
   https://vercel.com
   ```

2. **プロジェクト一覧を表示**
   - 「WONDERFULWORLD」または「wonderful-world」を探す

3. **プロジェクトをクリック**
   - 上部にデプロイURLが表示される
   - 例: `https://wonderful-world-abc123.vercel.app`

4. **このURLをコピー**
   - これが実際のサイトのURLです

---

### 方法2: GitHubのDeployments（GitHub連携している場合）

1. **GitHubリポジトリを開く**
   ```
   https://github.com/yannsunn/WONDERFULWORLD
   ```

2. **「Environments」または「Deployments」タブをクリック**
   - 右側のサイドバーまたは上部タブ

3. **最新のデプロイを確認**
   - 「View deployment」ボタンをクリック
   - 実際のVercel URLが表示される

---

### 方法3: Git commitから確認

最新のコミット（96803a3）をGitHubで見ると、Vercelの自動デプロイコメントにURLが記載されている場合があります。

---

## LLMO対応の確認方法（実際のURL使用）

実際のVercel URLが分かったら、以下のように確認します：

### 例: `https://wonderful-world-abc123.vercel.app` の場合

#### llms.txt の確認
```
https://wonderful-world-abc123.vercel.app/llms.txt
```

#### llms-full.txt の確認
```
https://wonderful-world-abc123.vercel.app/llms-full.txt
```

#### robots.txt の確認
```
https://wonderful-world-abc123.vercel.app/robots.txt
```

---

## 環境変数の更新

実際のURLが分かったら、以下のファイルを更新することを推奨します：

### .env.local（ローカル開発用）
```bash
NEXT_PUBLIC_SITE_URL=https://wonderful-world-abc123.vercel.app
```

### Vercel環境変数（本番用）

1. Vercelダッシュボード
2. プロジェクト選択
3. Settings → Environment Variables
4. 追加:
   - Key: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://wonderful-world-abc123.vercel.app`
   - Environment: Production, Preview, Development

---

## カスタムドメイン設定（将来）

`wonderfulworld.jp` を実際に使いたい場合：

### 1. ドメイン取得
- お名前.com、ムームードメイン等でドメイン取得

### 2. Vercelでカスタムドメイン設定

1. Vercelダッシュボード
2. プロジェクト選択
3. Settings → Domains
4. 「Add」ボタンをクリック
5. `wonderfulworld.jp` を入力

### 3. DNS設定

Vercelが提供するDNSレコードを、ドメイン管理画面で設定：

**Aレコード:**
```
Name: @
Type: A
Value: 76.76.21.21
```

**CNAMEレコード（www用）:**
```
Name: www
Type: CNAME
Value: cname.vercel-dns.com
```

### 4. 伝播待ち
- DNS伝播には24-48時間かかることがある
- 完了後、`https://wonderfulworld.jp` でアクセス可能

---

## 今すぐ実施すること

### ステップ1: 実際のURLを確認
```
1. https://vercel.com にログイン
2. プロジェクト「WONDERFULWORLD」を開く
3. デプロイURLをコピー
```

### ステップ2: URLを使ってLLMO確認
```
# llms.txt
https://[実際のURL]/llms.txt

# llms-full.txt
https://[実際のURL]/llms-full.txt

# robots.txt
https://[実際のURL]/robots.txt
```

### ステップ3: 環境変数を更新（オプション）
- Vercel環境変数に `NEXT_PUBLIC_SITE_URL` を追加
- 再デプロイすると、すべてのリンクが正しいURLに更新される

---

## トラブルシューティング

### Q: Vercelプロジェクトが見つからない
**A:** まだVercelにデプロイされていない可能性があります。

**解決方法:**
```bash
# Vercel CLIをインストール
npm i -g vercel

# ログイン
vercel login

# デプロイ
vercel --prod
```

### Q: GitHubとVercelの連携ができていない
**A:** GitHubにプッシュしてもVercelが自動デプロイしない。

**解決方法:**
1. Vercelダッシュボード
2. 「Import Project」
3. GitHubリポジトリを選択
4. 連携完了後、自動デプロイが有効になる

---

## まとめ

- ✅ コード内の `wonderfulworld.jp` は **プレースホルダー**
- ✅ 実際のURLは **Vercel自動生成URL**（例: wonderful-world-abc123.vercel.app）
- ✅ Vercelダッシュボードで実際のURLを確認
- ✅ そのURLで `/llms.txt` や `/robots.txt` にアクセスしてLLMO確認
- ⏳ 将来、カスタムドメイン `wonderfulworld.jp` を設定可能

---

**次のアクション:**
1. Vercelダッシュボードにアクセス
2. プロジェクトの実際のURLを確認
3. そのURLで LLMO ファイルにアクセスして確認

---

**作成日**: 2025年10月30日
**作成者**: Claude Code

# 🚀 デプロイガイド - WONDERFUL WORLD

このガイドでは、GitHubリポジトリの作成とVercelへのデプロイ方法を説明します。

## 📝 現在の状態

✅ Gitリポジトリ初期化済み
✅ 初期コミット完了（35ファイル、10,262行）
✅ セキュリティチェック完了（機密情報なし）

## 🔗 ステップ1: GitHubリポジトリの作成

### 方法A: GitHub Web UI を使用（推奨）

1. **GitHubにログイン**
   - https://github.com にアクセス
   - アカウントにログイン

2. **新しいリポジトリを作成**
   - 右上の「+」→「New repository」をクリック
   - または https://github.com/new に直接アクセス

3. **リポジトリ設定**
   ```
   Repository name: WONDERFULWORLD
   Description: AI×Beauty女性支援プロジェクト公式サイト | Official website for WONDERFUL WORLD - AI Model Influencer Project
   Public/Private: Public（推奨）または Private

   ⚠️ 重要: 「Initialize this repository with:」の項目は
   すべてチェックを外す（README, .gitignore, licenseなし）
   → ローカルに既にファイルがあるため
   ```

4. **リポジトリ作成**
   - 「Create repository」ボタンをクリック

5. **リモートリポジトリのURLを取得**
   - 作成後に表示されるページのURLをコピー
   - 例: `https://github.com/あなたのユーザー名/WONDERFULWORLD.git`

### 方法B: GitHub CLI を使用（オプション）

GitHub CLIがインストールされている場合：

```bash
# GitHub CLIのインストール（未インストールの場合）
# Windows: winget install GitHub.cli
# Mac: brew install gh

# 認証
gh auth login

# リポジトリ作成
gh repo create WONDERFULWORLD --public --source=. --remote=origin --push
```

## 📤 ステップ2: コードをGitHubにプッシュ

### GitHubリポジトリが作成できたら：

ターミナルで以下を実行（ローカルのプロジェクトフォルダで）：

```bash
# リモートリポジトリを追加
git remote add origin https://github.com/あなたのユーザー名/WONDERFULWORLD.git

# ブランチ名をmainに変更（推奨）
git branch -M main

# プッシュ
git push -u origin main
```

### プッシュ成功の確認

```bash
# リモートの確認
git remote -v
# 出力例:
# origin  https://github.com/あなたのユーザー名/WONDERFULWORLD.git (fetch)
# origin  https://github.com/あなたのユーザー名/WONDERFULWORLD.git (push)

# GitHubでリポジトリを確認
# https://github.com/あなたのユーザー名/WONDERFULWORLD
```

---

## ☁️ ステップ3: Vercelにデプロイ

### 方法A: Vercel Web UI を使用（推奨・最も簡単）

1. **Vercelにアクセス**
   - https://vercel.com にアクセス
   - 「Sign Up」または「Log In」
   - GitHubアカウントで認証

2. **新しいプロジェクトをインポート**
   - ダッシュボードで「Add New...」→「Project」
   - または https://vercel.com/new に直接アクセス

3. **GitHubリポジトリを選択**
   - 「Import Git Repository」セクションで
   - 先ほど作成した `WONDERFULWORLD` リポジトリを探す
   - 「Import」をクリック

4. **プロジェクト設定**
   ```
   Project Name: wonderful-world（自動入力）
   Framework Preset: Next.js（自動検出）
   Root Directory: ./（デフォルト）
   Build Command: npm run build（自動）
   Output Directory: .next（自動）
   Install Command: npm install（自動）
   ```

5. **環境変数（現時点では不要）**
   - スキップして「Deploy」をクリック

6. **デプロイ開始**
   - 「Deploy」ボタンをクリック
   - 1-2分でデプロイ完了

7. **デプロイ完了**
   - 🎉 おめでとうございます！
   - デプロイURLが表示されます
   - 例: `https://wonderful-world-xxxxx.vercel.app`

### 方法B: Vercel CLI を使用

```bash
# Vercel CLIのインストール
npm i -g vercel

# ログイン
vercel login

# デプロイ（プロジェクトフォルダで実行）
vercel

# 質問に答える:
# Set up and deploy "~/WONDERFULWORLD"? [Y/n] y
# Which scope? → あなたのアカウント選択
# Link to existing project? [y/N] n
# What's your project's name? wonderful-world
# In which directory is your code located? ./
# Want to override the settings? [y/N] n

# 本番デプロイ
vercel --prod
```

---

## 🌐 デプロイ後のURL

### GitHub リポジトリ URL
```
https://github.com/あなたのユーザー名/WONDERFULWORLD
```

### Vercel デプロイ URL
```
本番環境: https://wonderful-world-xxxxx.vercel.app
（xxxxx は自動生成される文字列）
```

### カスタムドメインの設定（オプション）

Vercelダッシュボードで：
1. プロジェクト → Settings → Domains
2. カスタムドメインを入力（例: wonderfulworld.com）
3. DNS設定を更新

---

## ✅ デプロイ確認チェックリスト

- [ ] GitHubリポジトリが作成された
- [ ] コードがGitHubにプッシュされた
- [ ] Vercelでプロジェクトがインポートされた
- [ ] デプロイが成功した（緑のチェックマーク）
- [ ] デプロイURLでサイトが表示される
- [ ] すべてのページが正常に動作する
  - [ ] ホームページ
  - [ ] モデル一覧/詳細
  - [ ] About
  - [ ] News
  - [ ] Partners
  - [ ] Contact
  - [ ] Privacy/Terms

---

## 🔧 デプロイ後の設定

### 1. 環境変数の追加（将来）

Vercel ダッシュボード：
1. プロジェクト → Settings → Environment Variables
2. 変数を追加：
   ```
   NEXT_PUBLIC_CONTENTFUL_SPACE_ID=...
   NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=...
   etc.
   ```
3. Redeploy

### 2. ドメイン設定

1. Settings → Domains
2. ドメインを追加
3. DNSを設定

### 3. Analytics設定

1. Settings → Analytics
2. Vercel Analytics を有効化（無料）

---

## 🚨 トラブルシューティング

### ビルドエラーが発生した場合

1. **ローカルでビルドテスト**
   ```bash
   npm run build
   ```

2. **node_modulesをクリーン**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

3. **Vercelで再デプロイ**
   - Deployments → 最新のデプロイ → Redeploy

### プッシュエラーが発生した場合

```bash
# 認証確認
git config --global user.name "あなたの名前"
git config --global user.email "your-email@example.com"

# HTTPS認証（Windowsの場合）
git config --global credential.helper wincred

# 再プッシュ
git push -u origin main
```

---

## 📞 サポート

### Vercel公式ドキュメント
- https://vercel.com/docs

### GitHub公式ヘルプ
- https://docs.github.com

### Next.js デプロイガイド
- https://nextjs.org/docs/deployment

---

## 🎯 次のステップ

デプロイ後：

1. ✅ URLを確認・保存
2. 📱 モバイルで動作確認
3. 🔍 Google Search Consoleに登録
4. 📊 Vercel Analytics確認
5. 🌐 カスタムドメイン設定（オプション）

おめでとうございます！🎉
WONDERFUL WORLDが世界に公開されました！

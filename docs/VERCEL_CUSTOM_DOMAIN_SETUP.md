# Vercelカスタムドメイン設定ガイド

## 概要

このガイドでは、`wonderful-world.llc` ドメインをVercelにデプロイしたNext.jsサイトに接続する手順を説明します。

## 前提条件

- ✅ さくらインターネットで `wonderful-world.llc` を取得済み
- ✅ さくらサーバーでSSL証明書（Let's Encrypt）設定済み
- ✅ VercelにNext.jsプロジェクトがデプロイ済み
- ✅ GitHubリポジトリと連携済み

## 全体の流れ

1. Vercelでカスタムドメインを追加
2. さくらのDNS設定でVercelを指定
3. Vercelで自動SSL証明書発行
4. DNS反映待ち（最大48時間）
5. デプロイ完了

---

## Step 1: Vercelプロジェクトの確認

### 1-1. Vercelダッシュボードにアクセス

1. https://vercel.com にログイン
2. 「WONDERFULWORLD」プロジェクトを選択

### 1-2. 現在のデプロイURLを確認

現在のURL例:
- `wonderfulworld.vercel.app`
- `wonderfulworld-git-main-yannsunn.vercel.app`

このURLをメモしておいてください。

---

## Step 2: Vercelでカスタムドメインを追加

### 2-1. ドメイン設定ページを開く

1. Vercelプロジェクトページで **「Settings」** タブをクリック
2. 左サイドバーから **「Domains」** を選択

### 2-2. ドメインを追加

1. 「Add Domain」または「Add」ボタンをクリック
2. 以下の2つのドメインを追加します：

#### ドメイン1: `wonderful-world.llc`

入力欄に以下を入力:
```
wonderful-world.llc
```

「Add」をクリック

#### ドメイン2: `www.wonderful-world.llc`

続けて入力欄に以下を入力:
```
www.wonderful-world.llc
```

「Add」をクリック

### 2-3. DNS設定情報を取得

ドメインを追加すると、Vercelが以下のようなDNS設定情報を表示します：

**wonderful-world.llc の場合:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**www.wonderful-world.llc の場合:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

この情報を**メモ**してください（次のステップで使用）。

---

## Step 3: さくらインターネットでDNS設定

### 3-1. さくらのコントロールパネルにログイン

1. https://secure.sakura.ad.jp/rscontrol/ にアクセス
2. ログイン

### 3-2. ドメイン設定ページを開く

1. 左メニューから「ドメイン/SSL」を選択
2. 「wonderful-world.llc」の「ゾーン編集」または「詳細設定」をクリック

### 3-3. DNSレコードを編集

#### ゾーン情報を開く

「ゾーン情報」タブまたは「DNSレコード編集」ボタンをクリック

#### 既存のAレコードを削除または変更

既存のAレコード（@またはホスト名なし）を探し、以下に変更：

| エントリ名 | タイプ | 値 |
|----------|--------|-----|
| @ または 空欄 | A | 76.76.21.21 |

#### wwwのCNAMEレコードを追加

| エントリ名 | タイプ | 値 |
|----------|--------|-----|
| www | CNAME | cname.vercel-dns.com |

#### 設定例（さくらの画面）

```
エントリ名: @
タイプ: A
値: 76.76.21.21
TTL: 3600（デフォルト）

エントリ名: www
タイプ: CNAME
値: cname.vercel-dns.com
TTL: 3600（デフォルト）
```

### 3-4. 保存

「保存」または「変更を保存」ボタンをクリック

---

## Step 4: Vercelでの確認と待機

### 4-1. Vercel Domainsページで確認

1. Vercelの「Domains」ページに戻る
2. 追加したドメインのステータスを確認

#### ステータスの意味

- **⏳ Pending** - DNS反映待ち
- **⚠️ Invalid Configuration** - DNS設定が間違っている
- **✅ Valid Configuration** - 正常に設定完了

### 4-2. DNS反映待ち

DNS設定が反映されるまでの時間:
- **最短**: 数分〜1時間
- **通常**: 2〜6時間
- **最大**: 48時間

**注意**: この間は古いサイト（さくらサーバー）が表示される場合があります。

---

## Step 5: SSL証明書の自動発行

### 5-1. Vercelの自動SSL

DNS設定が正しく反映されると、Vercelが自動的に以下を実行します：

1. Let's Encryptから無料SSL証明書を取得
2. HTTPSを有効化
3. HTTPからHTTPSへの自動リダイレクト設定

### 5-2. SSL証明書の確認

Vercelの「Domains」ページで、各ドメインに以下のマークが表示されます：

```
✅ wonderful-world.llc
   Valid Configuration
   SSL Certificate: Active

✅ www.wonderful-world.llc
   Valid Configuration
   SSL Certificate: Active
```

---

## Step 6: デプロイ完了の確認

### 6-1. ブラウザでアクセス

以下のURLにアクセスして、Next.jsサイトが表示されることを確認：

1. https://wonderful-world.llc
2. https://www.wonderful-world.llc
3. http://wonderful-world.llc （HTTPSに自動転送されるはず）
4. http://www.wonderful-world.llc （HTTPSに自動転送されるはず）

### 6-2. SSL証明書の確認

ブラウザのアドレスバーで鍵マークをクリックし、以下を確認：

- 証明書の発行者: Let's Encrypt
- 有効期限: 約90日後
- ドメイン名: wonderful-world.llc

---

## トラブルシューティング

### 問題1: DNS反映が遅い

**症状**: 48時間経ってもVercelで「Pending」のまま

**解決策**:
1. さくらのDNS設定を再確認
2. Aレコードの値が `76.76.21.21` であることを確認
3. CNAMEレコードの値が `cname.vercel-dns.com` であることを確認
4. TTLを短く設定（例: 300秒）

### 問題2: 「Invalid Configuration」エラー

**症状**: Vercelで「Invalid Configuration」と表示

**解決策**:
1. DNSレコードの値を確認
2. Vercel側で表示されている値と一致しているか確認
3. **重要**: Aレコードの値はVercelのIPアドレスによって異なる場合があります。必ずVercelダッシュボードに表示された値を使用してください。

### 問題3: 古いサイトが表示される

**症状**: さくらサーバーのWordPressサイトが表示される

**原因**: DNS設定がまだ反映されていない、またはブラウザキャッシュ

**解決策**:
1. DNSキャッシュをクリア（コマンド: `ipconfig /flushdns` on Windows, `sudo dscacheutil -flushcache` on Mac）
2. ブラウザのキャッシュをクリア（Ctrl+Shift+Delete）
3. シークレットモード/プライベートブラウジングで確認
4. 別のデバイスやネットワークで確認

### 問題4: SSL証明書エラー

**症状**: 「この接続ではプライバシーが保護されません」エラー

**原因**: VercelのSSL証明書がまだ発行されていない

**解決策**:
1. DNS設定が正しく反映されるまで待つ
2. Vercelの「Domains」ページで「Refresh」ボタンをクリック
3. 数時間待ってから再度アクセス

---

## DNS反映の確認方法

### 方法1: nslookupコマンド（Windows）

コマンドプロンプトまたはPowerShellで以下を実行：

```bash
nslookup wonderful-world.llc
```

**期待される結果**:
```
Server:  UnKnown
Address:  192.168.x.x

Name:    wonderful-world.llc
Address:  76.76.21.21
```

### 方法2: digコマンド（Mac/Linux）

ターミナルで以下を実行：

```bash
dig wonderful-world.llc
```

**期待される結果**:
```
;; ANSWER SECTION:
wonderful-world.llc.    3600    IN      A       76.76.21.21
```

### 方法3: オンラインDNSチェッカー

以下のサイトで確認：
- https://www.whatsmydns.net/
- ドメイン名に `wonderful-world.llc` を入力
- 「A」レコードを選択
- 世界中のDNSサーバーで `76.76.21.21` が表示されることを確認

---

## さくらサーバーの扱い

### SSL設定はどうなる？

Vercelに切り替えると、さくらサーバーのSSL証明書は**使用されなくなります**。

- さくらのSSL証明書: 不要（削除してもOK）
- VercelのSSL証明書: 自動的に発行・更新

### さくらサーバーの契約は？

**継続する場合**:
- メールサーバーとして使用可能
- サブドメインを別用途で使用可能
- FTPでファイル管理が必要な場合

**解約する場合**:
- ドメイン管理はさくらインターネットで継続
- サーバー契約のみ解約可能
- ドメイン料金のみで維持できる

---

## 今後の運用

### デプロイ方法

今後、サイトを更新する場合：

1. ローカルでコードを編集
2. GitHubにpush
   ```bash
   git add .
   git commit -m "更新内容"
   git push origin main
   ```
3. **Vercelが自動的にデプロイ**（数分で反映）

### SSL証明書の更新

- **自動**: Vercelが有効期限の30日前に自動更新
- **手動作業不要**

### モニタリング

Vercelダッシュボードで以下を確認可能：
- デプロイ履歴
- アクセス解析
- パフォーマンス
- エラーログ

---

## チェックリスト

デプロイ完了までの確認リスト：

- [ ] Vercelでドメインを追加（wonderful-world.llc、www.wonderful-world.llc）
- [ ] VercelからDNS設定情報を取得
- [ ] さくらのDNS設定でAレコード設定（@ → 76.76.21.21）
- [ ] さくらのDNS設定でCNAMEレコード設定（www → cname.vercel-dns.com）
- [ ] DNS反映待ち（最大48時間）
- [ ] Vercelで「Valid Configuration」を確認
- [ ] SSL証明書が「Active」になったことを確認
- [ ] https://wonderful-world.llc でサイトにアクセスできることを確認
- [ ] https://www.wonderful-world.llc でサイトにアクセスできることを確認
- [ ] HTTPがHTTPSに自動転送されることを確認

---

## 参考リンク

- Vercel公式ドキュメント: https://vercel.com/docs/concepts/projects/custom-domains
- さくらインターネット DNS設定: https://help.sakura.ad.jp/rs/2152/
- DNS反映チェック: https://www.whatsmydns.net/

---

## サポート

問題が解決しない場合：

1. Vercelサポート: https://vercel.com/support
2. さくらインターネットサポート: https://secure.sakura.ad.jp/support/
3. このドキュメントのトラブルシューティングセクションを参照

---

**最終更新**: 2025-10-30
**作成者**: Claude
**プロジェクト**: WONDERFULWORLD

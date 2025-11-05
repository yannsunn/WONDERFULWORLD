# セキュリティヘッダー設定

## 概要

WONDERFUL WORLDウェブサイトでは、XSS攻撃、クリックジャッキング、その他のセキュリティ脅威から保護するために、包括的なHTTPセキュリティヘッダーを設定しています。

## Content Security Policy (CSP)

XSS攻撃を防ぐためのセキュリティポリシーを定義しています。

### 設定内容

| ディレクティブ | 値 | 説明 |
|--------------|---|------|
| `default-src` | `'self'` | デフォルトは同一オリジンのみ許可 |
| `script-src` | `'self' 'unsafe-eval' 'unsafe-inline'` + 外部ドメイン | スクリプトソースの制限 |
| `style-src` | `'self' 'unsafe-inline' https://fonts.googleapis.com` | CSSソースの制限 |
| `font-src` | `'self' data: https://fonts.gstatic.com` | フォントソースの制限 |
| `img-src` | `'self' data: https: blob:` | 画像ソースの制限（全てのHTTPSドメインを許可） |
| `connect-src` | `'self'` + API エンドポイント | XHR/Fetch/WebSocket接続先の制限 |
| `frame-src` | `'self' https://www.google.com` | iframeソースの制限 |
| `object-src` | `'none'` | プラグイン（Flash等）の禁止 |
| `base-uri` | `'self'` | `<base>`タグのURLを同一オリジンに制限 |
| `form-action` | `'self'` | フォーム送信先を同一オリジンに制限 |
| `frame-ancestors` | `'none'` | このサイトを埋め込めるドメインを制限（完全禁止） |
| `upgrade-insecure-requests` | （値なし） | HTTPリクエストを自動的にHTTPSにアップグレード |

### 許可されている外部ドメイン

#### Script Sources (`script-src`)
- `https://va.vercel-scripts.com` - Vercel Analytics
- `https://www.googletagmanager.com` - Google Tag Manager（将来の使用を想定）
- `https://www.google-analytics.com` - Google Analytics（将来の使用を想定）

#### Connect Sources (`connect-src`)
- `https://va.vercel-scripts.com` - Vercel Analytics
- `https://www.google-analytics.com` - Google Analytics API
- `https://generativelanguage.googleapis.com` - Google Gemini API（チャットボット）
- `https://api.openai.com` - OpenAI API（画像・テキスト生成）

#### Frame Sources (`frame-src`)
- `https://www.google.com` - Google関連の埋め込みコンテンツ（reCAPTCHA等）

### 'unsafe-inline' と 'unsafe-eval' について

現在、以下の理由で`'unsafe-inline'`と`'unsafe-eval'`を使用しています：

1. **Next.js の要件**：開発モードとホットリロードで必要
2. **Framer Motion**：アニメーションライブラリが動的スクリプトを使用
3. **インラインスタイル**：React コンポーネントのスタイル属性

#### セキュリティ向上のための将来的な改善案

```javascript
// Nonce ベースの CSP（推奨）
"script-src 'self' 'nonce-{random}' https://va.vercel-scripts.com"
```

または

```javascript
// Hash ベースの CSP
"script-src 'self' 'sha256-{hash}' https://va.vercel-scripts.com"
```

## その他のセキュリティヘッダー

### X-DNS-Prefetch-Control

```
X-DNS-Prefetch-Control: on
```

**目的**：DNS プリフェッチを有効化し、外部リソースの読み込みを高速化

### Strict-Transport-Security (HSTS)

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

**目的**：
- HTTPSの強制使用（2年間）
- サブドメインも含む
- ブラウザのHSTSプリロードリストへの登録

**効果**：
- SSL ストリッピング攻撃の防止
- 中間者攻撃（MITM）の防止

**注意**：
- `preload`を指定すると、[HST Preload List](https://hstspreload.org/)への登録が必要
- 一度登録すると削除に時間がかかるため、本番環境でのみ使用

### X-Frame-Options

```
X-Frame-Options: DENY
```

**目的**：クリックジャッキング攻撃の防止

**値の説明**：
- `DENY` - iframe での埋め込みを完全に禁止（推奨）
- `SAMEORIGIN` - 同一オリジンの iframe のみ許可
- `ALLOW-FROM https://example.com` - 特定ドメインを許可（非推奨）

**現在の設定**：`DENY`（最も安全）

**注意**：CSP の `frame-ancestors 'none'` と重複していますが、両方設定することで古いブラウザもサポート

### X-Content-Type-Options

```
X-Content-Type-Options: nosniff
```

**目的**：MIME タイプスニッフィングの防止

**効果**：
- ブラウザが `Content-Type` ヘッダーを無視しないようにする
- 悪意のあるファイルが実行される可能性を低減
- XSS 攻撃のベクターを減少

**例**：
- `text/plain` として提供されたファイルをブラウザが勝手に `text/html` として解釈しない

### X-XSS-Protection

```
X-XSS-Protection: 1; mode=block
```

**目的**：ブラウザ組み込みのXSS保護を有効化

**値の説明**：
- `0` - XSS フィルターを無効化
- `1` - XSS フィルターを有効化（サニタイズ）
- `1; mode=block` - XSS を検出したらページのレンダリングを停止（推奨）

**注意**：
- 最新ブラウザでは CSP が優先されるため、このヘッダーは補助的な役割
- 古いブラウザのサポートのために設定

### Referrer-Policy

```
Referrer-Policy: strict-origin-when-cross-origin
```

**目的**：リファラー情報の送信ポリシーを制御

**効果**：
- 同一オリジン：フルURLを送信
- クロスオリジン（HTTPS → HTTPS）：オリジンのみ送信
- クロスオリジン（HTTPS → HTTP）：送信しない（ダウングレード防止）

**その他の値**：
- `no-referrer` - リファラーを一切送信しない（最も厳格）
- `origin` - 常にオリジンのみ送信
- `same-origin` - 同一オリジンのみ送信

### Permissions-Policy

```
Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
```

**目的**：ブラウザ機能へのアクセスを制限

**設定内容**：
- `camera=()` - カメラへのアクセスを全て禁止
- `microphone=()` - マイクへのアクセスを全て禁止
- `geolocation=()` - 位置情報へのアクセスを全て禁止
- `interest-cohort=()` - Google FLoC（トラッキング技術）を無効化

**将来必要な場合の設定例**：
```
camera=(self)  # 自サイトのみ許可
microphone=(self "https://example.com")  # 特定ドメインを許可
```

## セキュリティヘッダーの検証

### オンラインツール

1. **[Mozilla Observatory](https://observatory.mozilla.org/)**
   - 包括的なセキュリティスキャン
   - 改善提案を提供
   - 目標スコア：A+

2. **[Security Headers](https://securityheaders.com/)**
   - セキュリティヘッダーの評価
   - 詳細な説明付き
   - 目標グレード：A+

3. **[CSP Evaluator](https://csp-evaluator.withgoogle.com/)**
   - Google 提供のCSP検証ツール
   - ポリシーの弱点を指摘

### ブラウザでの確認方法

#### Chrome DevTools

1. ページを開く
2. DevTools を開く（F12）
3. Network タブを開く
4. ページをリロード
5. ドキュメント（最初のリクエスト）を選択
6. Headers タブで Response Headers を確認

#### コマンドライン（curl）

```bash
# 本番環境のヘッダーを確認
curl -I https://wonderfulworld.jp

# ローカル開発環境
curl -I http://localhost:3000
```

## トラブルシューティング

### CSP 違反のデバッグ

#### ブラウザコンソールでの確認

CSP 違反が発生すると、ブラウザのコンソールに以下のようなエラーが表示されます：

```
Refused to load the script 'https://example.com/script.js' because it violates
the following Content Security Policy directive: "script-src 'self'".
```

#### CSP レポートの収集（オプション）

将来的に CSP 違反をモニタリングする場合：

```javascript
// next.config.mjs に追加
"report-uri /api/csp-report",
"report-to csp-endpoint"
```

```typescript
// app/api/csp-report/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const report = await request.json();

    // CSP違反をログに記録
    console.warn('CSP Violation:', JSON.stringify(report, null, 2));

    // 本番環境では監視サービスに送信
    // if (process.env.NODE_ENV === 'production') {
    //   await sendToMonitoringService(report);
    // }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing CSP report:', error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
```

### よくある問題と解決方法

#### 問題1：外部スクリプトが読み込めない

**エラー**：
```
Refused to load the script because it violates CSP directive
```

**解決方法**：
1. CSP の `script-src` にドメインを追加
2. または、スクリプトを自サイトにホスティング

#### 問題2：インライン スタイルが適用されない

**エラー**：
```
Refused to apply inline style because it violates CSP directive
```

**解決方法**：
1. `style-src 'unsafe-inline'` を追加（現在の設定）
2. または、nonce/hash ベースの CSP を使用

#### 問題3：画像が表示されない

**エラー**：
```
Refused to load the image because it violates CSP directive
```

**解決方法**：
1. `img-src` に画像のドメインを追加
2. 現在は `https:` で全ての HTTPS 画像を許可

#### 問題4：API リクエストが失敗する

**エラー**：
```
Refused to connect to 'https://api.example.com' because it violates CSP directive
```

**解決方法**：
1. `connect-src` に API ドメインを追加
2. 現在の設定で許可されているドメインを確認

## セキュリティベストプラクティス

### 1. 定期的な見直し

- **月次**：セキュリティヘッダーの評価スコアを確認
- **四半期**：新しい脆弱性情報をチェック
- **年次**：ポリシー全体の見直し

### 2. 段階的な厳格化

現在の状態から、より厳格なポリシーへ段階的に移行：

#### フェーズ1（現在）
- `'unsafe-inline'` と `'unsafe-eval'` を使用
- 開発とデプロイの安定性を優先

#### フェーズ2（近い将来）
- Nonce ベースの CSP を導入
- `'unsafe-inline'` を段階的に削減

```javascript
// 動的 nonce の生成
const nonce = generateNonce();
"script-src 'self' 'nonce-{nonce}'"
```

#### フェーズ3（長期目標）
- `'unsafe-inline'` と `'unsafe-eval'` を完全に削除
- Hash ベースの CSP を活用
- Subresource Integrity (SRI) を導入

### 3. 監視とアラート

本番環境での CSP 違反を監視：

```typescript
// Sentry との連携例
if (process.env.NODE_ENV === 'production') {
  Sentry.captureMessage('CSP Violation', {
    level: 'warning',
    extra: { violation: report },
  });
}
```

### 4. テスト環境での検証

新しい外部サービスを追加する前に：

1. ステージング環境でテスト
2. CSP 違反エラーを確認
3. 必要なドメインを追加
4. 再度テスト

## 参考リンク

### セキュリティガイドライン

- [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Content Security Policy Reference](https://content-security-policy.com/)

### CSP ツール

- [CSP Generator](https://report-uri.com/home/generate)
- [CSP Validator](https://cspvalidator.org/)
- [Report URI](https://report-uri.com/) - CSP レポート収集サービス

### HSTS

- [HSTS Preload List](https://hstspreload.org/)
- [HSTS Checker](https://gf.dev/hsts-test)

### セキュリティスキャン

- [Mozilla Observatory](https://observatory.mozilla.org/)
- [Security Headers](https://securityheaders.com/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

## 更新履歴

### 2025-11-05
- **初版作成**
  - 包括的なセキュリティヘッダーの設定
  - CSP ディレクティブの詳細説明
  - トラブルシューティングガイドの追加
  - 主な変更点：
    - `X-Frame-Options` を `SAMEORIGIN` から `DENY` に変更（より厳格）
    - `frame-ancestors 'none'` を追加（CSP レベルでも iframe 禁止）
    - `object-src 'none'` を追加（プラグイン禁止）
    - `upgrade-insecure-requests` を追加（自動 HTTPS 化）
    - 外部 API ドメインを `connect-src` に追加
      - Google Gemini API (`generativelanguage.googleapis.com`)
      - OpenAI API (`api.openai.com`)
      - Google Analytics (`www.google-analytics.com`)

## まとめ

このセキュリティヘッダー設定により、WONDERFUL WORLD ウェブサイトは以下の脅威から保護されています：

1. ✅ **XSS攻撃** - CSP によるスクリプト制限
2. ✅ **クリックジャッキング** - `X-Frame-Options: DENY` と `frame-ancestors 'none'`
3. ✅ **中間者攻撃（MITM）** - HSTS による HTTPS 強制
4. ✅ **MIME タイプ混乱攻撃** - `X-Content-Type-Options: nosniff`
5. ✅ **リファラー漏洩** - 適切な Referrer-Policy
6. ✅ **不要なブラウザ機能へのアクセス** - Permissions-Policy

目標：**Mozilla Observatory スコア A+、Security Headers グレード A+**

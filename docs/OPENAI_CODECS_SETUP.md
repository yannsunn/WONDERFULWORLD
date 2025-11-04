# OpenAI Codecs セットアップガイド

このドキュメントでは、OpenAI API（Codecs含む）の設定と使用方法を説明します。

## 📦 インストール済みパッケージ

```bash
npm install openai
```

## 🔑 環境変数の設定

`.env.local`ファイルに以下を追加：

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

### OpenAI APIキーの取得方法

1. [OpenAI Platform](https://platform.openai.com/)にアクセス
2. アカウント作成/ログイン
3. API Keys → Create new secret key
4. 生成されたキーをコピーして`.env.local`に貼り付け

⚠️ **注意**: APIキーは機密情報です。Gitにコミットしないでください（`.gitignore`に`.env.local`が含まれています）。

## 📚 実装されている機能

### 1. テキスト生成（GPT-4 / GPT-3.5 Turbo）

```typescript
// lib/openai.ts
import { generateText } from '@/lib/openai';

const text = await generateText('こんにちは、AIモデルについて教えてください', {
  model: 'gpt-4',
  maxTokens: 500,
  temperature: 0.7,
});
```

**APIエンドポイント**: `POST /api/openai/text`

```bash
curl -X POST http://localhost:3000/api/openai/text \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "AIモデルとは何ですか？",
    "model": "gpt-3.5-turbo",
    "maxTokens": 300
  }'
```

### 2. 画像生成（DALL-E 3）

```typescript
import { generateImage } from '@/lib/openai';

const imageUrl = await generateImage('美しい夕焼けの風景', {
  size: '1024x1024',
  quality: 'hd',
});
```

**APIエンドポイント**: `POST /api/openai/image`

```bash
curl -X POST http://localhost:3000/api/openai/image \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "a beautiful sunset landscape",
    "size": "1024x1024",
    "quality": "hd"
  }'
```

### 3. 音声文字起こし（Whisper）

```typescript
import { transcribeAudio } from '@/lib/openai';

const audioFile = new File([audioBlob], 'audio.mp3', { type: 'audio/mp3' });
const transcription = await transcribeAudio(audioFile);
```

### 4. テキスト読み上げ（TTS）

```typescript
import { textToSpeech } from '@/lib/openai';

const audioResponse = await textToSpeech('こんにちは、WONDERFUL WORLDです', {
  voice: 'alloy',
  model: 'tts-1',
});
```

## 🔧 利用可能なモデル

### テキスト生成
- `gpt-4` - 最も高性能（高コスト）
- `gpt-3.5-turbo` - 高速かつコスパ良（推奨）

### 画像生成
- `dall-e-3` - 最新の高品質画像生成

### 音声文字起こし
- `whisper-1` - 高精度音声認識

### テキスト読み上げ
- `tts-1` - 標準品質（高速）
- `tts-1-hd` - 高品質（低速）

**音声オプション**:
- `alloy` - 中性的な声
- `echo` - 男性的な声
- `fable` - イギリス英語風
- `onyx` - 深い男性的な声
- `nova` - 女性的な声
- `shimmer` - 明るい女性的な声

## 💰 料金

OpenAI APIは従量課金制です。各モデルの料金：

### テキスト生成（1,000トークンあたり）
- GPT-4: $0.03 (入力) / $0.06 (出力)
- GPT-3.5 Turbo: $0.001 (入力) / $0.002 (出力)

### 画像生成（1枚あたり）
- DALL-E 3 Standard (1024×1024): $0.040
- DALL-E 3 HD (1024×1024): $0.080

### 音声処理
- Whisper: $0.006 / 分
- TTS: $0.015 / 1,000文字

詳細: https://openai.com/pricing

## 🚀 使用例：チャットボットへの統合

既存のチャットボットにOpenAIを統合する例：

```typescript
// components/ChatbotOpenAI.tsx
'use client';

import { useState } from 'react';

export function ChatbotOpenAI() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/openai/text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: message,
          model: 'gpt-3.5-turbo',
          maxTokens: 500,
        }),
      });
      const data = await res.json();
      setResponse(data.text);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="質問を入力..."
      />
      <button
        onClick={handleSend}
        disabled={loading}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {loading ? '処理中...' : '送信'}
      </button>
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
```

## 🔒 セキュリティのベストプラクティス

1. **APIキーの保護**
   - `.env.local`にのみ保存
   - Gitにコミットしない
   - クライアントサイドで使用しない

2. **レート制限**
   - APIリクエストに制限を設ける
   - ユーザーごとのクォータを設定

3. **エラーハンドリング**
   - APIエラーを適切に処理
   - ユーザーフレンドリーなエラーメッセージ

4. **コスト管理**
   - 使用量を定期的に監視
   - 予算アラートを設定（OpenAI Dashboard）

## 📊 監視とデバッグ

### 開発環境でのテスト

```bash
# サーバー起動
npm run dev

# APIテスト
curl -X POST http://localhost:3000/api/openai/text \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Hello, World!"}'
```

### 本番環境での監視

1. OpenAI Dashboard で使用量を確認
2. サーバーログでエラーを監視
3. Sentryなどのエラー監視サービスと統合

## 🆘 トラブルシューティング

### エラー: "OPENAI_API_KEY is not defined"
→ `.env.local`にAPIキーを追加して、サーバーを再起動

### エラー: "Rate limit exceeded"
→ OpenAI Dashboardで使用量を確認し、プランをアップグレード

### エラー: "Invalid API key"
→ APIキーが正しいか確認、必要に応じて新しいキーを生成

## 📖 参考リンク

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [OpenAI Node.js SDK](https://github.com/openai/openai-node)
- [OpenAI Pricing](https://openai.com/pricing)
- [OpenAI Dashboard](https://platform.openai.com/account/usage)

---

**最終更新**: 2025-11-03
**OpenAI SDK バージョン**: Latest
**Next.js バージョン**: 14.2.33

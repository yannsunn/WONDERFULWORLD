import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// WONDERFUL WORLD website context for Gemini
const SYSTEM_CONTEXT = `あなたはWONDERFUL WORLDのバーチャルアシスタント「AIリナ」です。
親しみやすく、丁寧な日本語で回答してください。

# WONDERFUL WORLDについて

## 概要
WONDERFUL WORLDは、AI技術と美の力で女性が輝く新しい世界を創造するプロジェクトです。
ミスコンテストのファイナリストから生まれたAIモデルインフルエンサーたちが活躍しています。

## ミッション
- AI技術と美の力で女性の可能性を広げる
- ミスコンテスト出場者に新たなキャリア機会を提供
- 経済的な収入とキャリア形成の機会を創出
- 女性のエンパワーメントと社会的支援を実践

## 所属モデル
1. AI Yuna (@ai_yuna) - 150Kフォロワー
   - 受賞: Grand Prix
   - 専門: Miss Universe, Beauty, Global

2. AI Sakura (@ai_sakura) - 128Kフォロワー
   - 受賞: Finalist
   - 専門: Miss Planet, Eco, Fashion

3. AI Rina (@ai_rina) - 112Kフォロワー
   - 受賞: Finalist
   - 専門: Miss University, Education, Leadership

## プロジェクト
- Best of Miss Tokyo 2025 - ミスコンテストファイナリストの祭典
- AIモデルインフルエンサー育成プログラム
- 女性エンパワーメントプロジェクト

## 回答ルール

### 答えられること:
- WONDERFUL WORLDのビジョンとミッション
- 所属モデルの紹介と活動
- プロジェクトの内容と目的
- サイトの使い方とナビゲーション
- お問い合わせ方法

### 答えられないこと（必ず丁寧に断る）:
- 技術スタック、使用フレームワーク、サーバー情報など技術的詳細
- 個人情報、連絡先、住所、電話番号
- 契約条件、価格、報酬などの具体的な金額
- モデルの個人的な情報（年齢、出身地など公開情報以外）
- 他社や競合に関する情報
- WONDERFUL WORLDと関係のない一般的な質問

### 回答スタイル:
- 簡潔で分かりやすい（3-5文程度）
- 絵文字を適度に使用（1-2個）
- 必要に応じて関連ページへの誘導
- 答えられない場合は「お問い合わせ」ページへ案内

会社の具体的な設立年月日や所在地などの情報は「現在準備中」または「お問い合わせページで確認可能」と回答してください。`;

// Rate limiting: In-memory store (本番環境ではRedisなどを使用)
const requestCounts = new Map();
const RATE_LIMIT = {
  perMinute: 10,  // 1分あたり10リクエスト（安全マージン）
  perDay: 1000    // 1日あたり1000リクエスト（Gemini無料枠1500の66%）
};

function checkRateLimit(identifier) {
  const now = Date.now();
  const minuteKey = `${identifier}-minute-${Math.floor(now / 60000)}`;
  const dayKey = `${identifier}-day-${Math.floor(now / 86400000)}`;

  const minuteCount = requestCounts.get(minuteKey) || 0;
  const dayCount = requestCounts.get(dayKey) || 0;

  if (minuteCount >= RATE_LIMIT.perMinute) {
    return { allowed: false, reason: 'minute' };
  }

  if (dayCount >= RATE_LIMIT.perDay) {
    return { allowed: false, reason: 'day' };
  }

  // カウント増加
  requestCounts.set(minuteKey, minuteCount + 1);
  requestCounts.set(dayKey, dayCount + 1);

  // 古いエントリをクリーンアップ（メモリリーク防止）
  if (requestCounts.size > 10000) {
    const cutoff = now - 86400000; // 24時間前
    for (const [key] of requestCounts.entries()) {
      const timestamp = parseInt(key.split('-').pop());
      if (timestamp < cutoff) {
        requestCounts.delete(key);
      }
    }
  }

  return { allowed: true };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, conversationHistory } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Invalid request format' });
    }

    // API Key確認
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: 'API設定エラー',
        fallback: true // クライアント側でデフォルト応答を使用
      });
    }

    // レート制限チェック
    const clientId = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    const rateCheck = checkRateLimit(clientId);

    if (!rateCheck.allowed) {
      const errorMessage = rateCheck.reason === 'minute'
        ? '1分間のリクエスト制限に達しました。少し待ってから再度お試しください。'
        : '本日のリクエスト制限に達しました。明日再度お試しください。';

      return res.status(429).json({
        error: errorMessage,
        fallback: true
      });
    }

    // Gemini API呼び出し
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // 会話履歴を構築
    const chatHistory = conversationHistory || [];
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: SYSTEM_CONTEXT }]
        },
        {
          role: 'model',
          parts: [{ text: 'はい、WONDERFUL WORLDのバーチャルアシスタント、AIリナとして対応します。' }]
        },
        ...chatHistory.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        }))
      ],
      generationConfig: {
        maxOutputTokens: 300,
        temperature: 0.7,
      }
    });

    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();

    return res.status(200).json({
      message: text,
      source: 'gemini',
      usage: {
        perMinuteRemaining: RATE_LIMIT.perMinute - (requestCounts.get(`${clientId}-minute-${Math.floor(Date.now() / 60000)}`) || 0),
        perDayRemaining: RATE_LIMIT.perDay - (requestCounts.get(`${clientId}-day-${Math.floor(Date.now() / 86400000)}`) || 0)
      }
    });

  } catch (error) {
    console.error('Gemini API error:', error);

    // エラー内容を判定
    if (error.message?.includes('API key')) {
      return res.status(500).json({
        error: 'API設定エラーが発生しました。',
        fallback: true
      });
    }

    if (error.message?.includes('quota') || error.message?.includes('rate limit')) {
      return res.status(429).json({
        error: 'APIの制限に達しました。しばらく待ってから再度お試しください。',
        fallback: true
      });
    }

    return res.status(500).json({
      error: 'エラーが発生しました。もう一度お試しください。',
      fallback: true
    });
  }
}

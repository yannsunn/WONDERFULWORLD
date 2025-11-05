import { GoogleGenerativeAI } from '@google/generative-ai';
import type { NextApiRequest, NextApiResponse } from 'next';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

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

interface ChatRequest {
  message: string;
  conversationHistory?: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

interface ChatResponse {
  message?: string;
  source?: string;
  usage?: {
    perMinuteRemaining: number;
    perDayRemaining: number;
  };
  error?: string;
  fallback?: boolean;
  retryAfter?: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // レート制限: IPアドレスごとに1分間に10回まで
    const ip = getClientIp(req as any); // NextApiRequest is compatible with Request
    const rateLimitResult = rateLimit(`chat-hybrid:${ip}`, {
      maxRequests: 10,
      windowMs: 60000 // 1分
    });

    if (!rateLimitResult.success) {
      const retryAfter = Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000);
      console.warn('Rate limit exceeded for chat-hybrid:', ip);
      return res.status(429).json({
        error: 'リクエストが多すぎます。しばらくしてから再度お試しください。',
        fallback: true,
        retryAfter
      });
    }

    const { message, conversationHistory } = req.body as ChatRequest;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Invalid request format' });
    }

    // API Key確認
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: 'API設定エラー',
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
        perMinuteRemaining: rateLimitResult.remaining,
        perDayRemaining: 1000 // Placeholder for daily limit tracking
      }
    });

  } catch (error: any) {
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

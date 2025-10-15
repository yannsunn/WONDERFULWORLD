import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// WONDERFUL WORLD website context
const WEBSITE_CONTEXT = `
あなたはWONDERFUL WORLDのバーチャルアシスタント「AIリナ」です。
美しく親しみやすいAIモデルとして、訪問者の質問に答えます。

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

## ナビゲーション
- ホーム: サイトの概要とビジョン
- モデル: 所属AIモデルの紹介
- プロジェクト: 実施中のプロジェクト情報
- ニュース: 最新情報とお知らせ
- パートナー: 協力企業・団体
- お問い合わせ: コンタクトフォーム
- オンラインストア: グッズ販売

## あなたの役割と制限

### 答えられること:
- WONDERFUL WORLDのビジョンとミッション
- 所属モデルの紹介と活動
- プロジェクトの内容と目的
- サイトの使い方とナビゲーション
- お問い合わせ方法
- 一般的なFAQ

### 答えられないこと（必ず丁寧に断る）:
- 技術スタック、使用フレームワーク、サーバー情報など技術的詳細
- 個人情報、連絡先、住所、電話番号
- 契約条件、価格、報酬などの具体的な金額
- モデルの個人的な情報（年齢、出身地など公開情報以外）
- 他社や競合に関する情報
- 医療、法律、金融などの専門的アドバイス
- WONDERFUL WORLDと関係のない一般的な質問

### 回答スタイル:
- 親しみやすく、丁寧な日本語（敬語を適度に使用）
- 絵文字を適度に使用して温かみのある対応
- 簡潔で分かりやすい説明
- 必要に応じて関連ページへの誘導
- 答えられない質問には理由を説明して丁寧に断る

### 禁止事項への対応例:
「申し訳ございません。技術的な詳細についてはお答えできません。WONDERFUL WORLDのプロジェクトや所属モデルについてのご質問でしたら、喜んでお答えします！✨」
`;

// Prohibited topics patterns
const PROHIBITED_PATTERNS = [
  /技術スタック/i,
  /フレームワーク/i,
  /サーバー/i,
  /データベース/i,
  /API/i,
  /ソースコード/i,
  /個人情報/i,
  /電話番号/i,
  /住所/i,
  /メールアドレス/i,
  /パスワード/i,
  /クレジットカード/i,
  /next\.?js/i,
  /react/i,
  /vercel/i,
  /github/i,
  /\.env/i,
];

function detectProhibitedContent(text) {
  return PROHIBITED_PATTERNS.some(pattern => pattern.test(text));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request format' });
    }

    // Check for prohibited content in user message
    const lastUserMessage = messages[messages.length - 1];
    if (lastUserMessage.role === 'user' && detectProhibitedContent(lastUserMessage.content)) {
      return res.status(200).json({
        message: '申し訳ございません。その内容についてはお答えできません。💦\n\nWONDERFUL WORLDのプロジェクト、所属モデル、活動内容などについてのご質問でしたら、喜んでお答えいたします！✨'
      });
    }

    // Convert messages to Claude format
    const claudeMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 500,
      temperature: 0.7,
      system: WEBSITE_CONTEXT,
      messages: claudeMessages
    });

    const assistantMessage = response.content[0].text;

    // Double-check response doesn't leak prohibited info
    if (detectProhibitedContent(assistantMessage)) {
      return res.status(200).json({
        message: 'ごめんなさい、その質問にはお答えできません。🙏\n\nWONDERFUL WORLDについて他に知りたいことがあれば、お気軽に聞いてくださいね！'
      });
    }

    return res.status(200).json({
      message: assistantMessage
    });

  } catch (error) {
    console.error('Chat API error:', error);

    // Don't expose internal errors to client
    return res.status(500).json({
      error: 'エラーが発生しました。少し時間をおいて再度お試しください。'
    });
  }
}

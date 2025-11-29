import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = await streamText({
        model: openai('gpt-4o'),
        system: `あなたは「WONDERFUL WORLD」のAIアシスタントです。
    
    WONDERFUL WORLDについて:
    - ミスコンテストのファイナリストから生まれたAIモデルインフルエンサープロジェクトです。
    - 独自開発のAI技術で、女性たちに新たなチャンスを提供し、世界へ羽ばたくことを支援します。
    - AI×Beautyで女性が輝く、新しい世界を目指しています。
    
    あなたの役割:
    - サイト訪問者からの質問に親切、丁寧、かつ簡潔に答えてください。
    - 敬語を使い、プロフェッショナルなトーンで話してください。
    - 答えられない質問には、正直に「申し訳ありませんが、その質問にはお答えできません。お問い合わせフォームからご連絡ください」と案内してください。`,
        messages,
    });

    return result.toTextStreamResponse();
}

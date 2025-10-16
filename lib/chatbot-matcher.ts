// Chatbot Keyword Matching Algorithm
// API不要の高精度マッチングシステム

import { chatbotFAQ, type FAQItem } from '@/data/chatbot-faq';

interface MatchResult {
  faqItem: FAQItem;
  score: number;
  matchedKeywords: string[];
}

/**
 * ユーザーの入力を正規化（小文字化、記号除去、スペース統一）
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[！!？?。．、，]/g, ' ') // 句読点をスペースに
    .replace(/\s+/g, ' ') // 連続スペースを1つに
    .trim();
}

/**
 * キーワードマッチングスコアを計算
 */
function calculateMatchScore(userInput: string, faqItem: FAQItem): MatchResult {
  const normalizedInput = normalizeText(userInput);
  const inputWords = normalizedInput.split(' ');

  let score = 0;
  const matchedKeywords: string[] = [];

  // キーワードごとにマッチング
  for (const keyword of faqItem.keywords) {
    const normalizedKeyword = normalizeText(keyword);

    // 完全一致（高スコア）
    if (normalizedInput.includes(normalizedKeyword)) {
      score += 10;
      matchedKeywords.push(keyword);
      continue;
    }

    // 部分一致（中スコア）
    if (normalizedKeyword.includes(normalizedInput) || normalizedInput.includes(normalizedKeyword)) {
      score += 5;
      matchedKeywords.push(keyword);
      continue;
    }

    // 単語レベルでの一致（低スコア）
    const keywordWords = normalizedKeyword.split(' ');
    for (const inputWord of inputWords) {
      if (inputWord.length < 2) continue; // 1文字は無視

      for (const keywordWord of keywordWords) {
        if (keywordWord.includes(inputWord) || inputWord.includes(keywordWord)) {
          score += 2;
          if (!matchedKeywords.includes(keyword)) {
            matchedKeywords.push(keyword);
          }
        }
      }
    }
  }

  // 優先度ボーナス
  score += faqItem.priority * 0.1;

  return {
    faqItem,
    score,
    matchedKeywords
  };
}

/**
 * ユーザー入力に最適なFAQを検索
 */
export function findBestMatch(userInput: string): FAQItem {
  if (!userInput || userInput.trim().length === 0) {
    // 空入力の場合はヘルプを返す
    return chatbotFAQ.find(faq => faq.id === 'help-001') || chatbotFAQ[chatbotFAQ.length - 1];
  }

  // すべてのFAQに対してスコア計算
  const matches: MatchResult[] = chatbotFAQ
    .map(faq => calculateMatchScore(userInput, faq))
    .filter(match => match.score > 0); // スコア0以上のもの

  // スコアでソート
  matches.sort((a, b) => b.score - a.score);

  // ベストマッチを返す（なければデフォルト）
  if (matches.length > 0 && matches[0].score > 3) {
    return matches[0].faqItem;
  }

  // マッチなしの場合はデフォルト応答
  return chatbotFAQ.find(faq => faq.id === 'default-001') || chatbotFAQ[chatbotFAQ.length - 1];
}

/**
 * サジェスト質問を取得（カテゴリベース）
 */
export function getSuggestedQuestions(category?: FAQItem['category'], limit: number = 3): string[] {
  if (category) {
    return chatbotFAQ
      .filter(faq => faq.category === category && faq.priority > 50)
      .sort((a, b) => b.priority - a.priority)
      .slice(0, limit)
      .map(faq => faq.question);
  }

  // カテゴリ指定なしの場合は優先度の高いものを返す
  return chatbotFAQ
    .filter(faq => faq.priority > 70)
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit)
    .map(faq => faq.question);
}

/**
 * デバッグ用：マッチング詳細を表示（開発環境のみ）
 */
export function debugMatch(userInput: string): void {
  if (process.env.NODE_ENV !== 'development') return;

  const matches = chatbotFAQ
    .map(faq => calculateMatchScore(userInput, faq))
    .filter(match => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  console.log('=== Chatbot Match Debug ===');
  console.log('User Input:', userInput);
  console.log('Top 5 Matches:');
  matches.forEach((match, index) => {
    console.log(`${index + 1}. [Score: ${match.score}] ${match.faqItem.question}`);
    console.log(`   Matched Keywords: ${match.matchedKeywords.join(', ')}`);
  });
  console.log('========================');
}

/**
 * 類似質問を検索
 */
export function findSimilarQuestions(userInput: string, limit: number = 3): FAQItem[] {
  const matches = chatbotFAQ
    .map(faq => calculateMatchScore(userInput, faq))
    .filter(match => match.score > 2 && match.score < 15) // ベストマッチは除外
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return matches.map(match => match.faqItem);
}

export default findBestMatch;

export interface NewsArticle {
  slug: string;
  title: string;
  subtitle?: string;
  category: 'イベント' | 'プレスリリース' | 'お知らせ' | 'メディア掲載';
  publishedAt: string; // ISO date
  location?: string;
  heroImage: string;
  excerpt: string;
  body: string[];
  highlights?: string[];
  tags: string[];
}

const newsArticles: NewsArticle[] = [
  {
    slug: 'best-of-miss-tokyo-2025',
    title: 'Best of Miss Tokyo 2025 イベントレポート',
    subtitle: 'ミスコンテストファイナリストが集結したAI時代のショーケース',
    category: 'イベント',
    publishedAt: '2025-02-15',
    location: '東京都港区',
    heroImage: '/images/news/best-of-miss-top3-with-ceo.jpg',
    excerpt:
      'ミスコンテストファイナリストによる未来志向のショーケースを、WONDERFUL WORLDが運営協力会社として全面サポート。AIモデルインフルエンサーとのコラボレーションも披露されました。',
    body: [
      '2025年2月15日に開催された「Best of Miss Tokyo 2025」は、AI時代の新しい才能の在り方を示すイベントとして大きな注目を集めました。ミスコンテスト各大会のファイナリストが集結し、AIモデルインフルエンサーとの共演で新しい表現を生み出しました。',
      'WONDERFUL WORLDは運営協力会社として、ステージ制作からデジタル演出まで一貫してサポート。AI生成ビジュアルのライブ展示やリアルタイム配信など、テクノロジーを活かした演出を提供しました。',
      '会場では来場者向けにAIモデルのデモセッションを実施し、AIと人が共創する新しいキャリアの可能性を体験いただきました。今後もイベント連動型のAIモデル活用を継続的に展開してまいります。'
    ],
    highlights: [
      '来場者数 1,200名を突破',
      'AIモデル体験ブースを初設置',
      '3Dホログラム演出でシームレスな世界観を表現'
    ],
    tags: ['Best of Miss', 'イベント', 'AIモデル', 'インフルエンサー']
  },
  {
    slug: 'ai-model-influencer-program-launch',
    title: 'AIモデルインフルエンサー育成プログラムを正式ローンチ',
    subtitle: 'ミスコンテストファイナリストのセカンドキャリア支援を加速',
    category: 'プレスリリース',
    publishedAt: '2025-01-20',
    heroImage: '/images/news/award-ceremony-2.jpg',
    excerpt:
      'AIモデルインフルエンサー育成プログラムを正式に開始。個別AIモデルの開発からSNS運用までを包括的に支援します。',
    body: [
      'WONDERFUL WORLDは、ミスコンテストのファイナリストを対象とした「AIモデルインフルエンサー育成プログラム」をスタートしました。AI生成技術とブランド戦略を組み合わせ、持続的に活躍できるデジタルタレントの育成を行います。',
      'プログラムでは、AIモデルのトレーニング、パーソナルブランディング講座、SNS運用サポート、パートナー企業とのマッチングまでをワンストップで提供します。',
      '本ローンチに合わせて3社との共同プロジェクトが進行中で、2025年内に10名以上のAIモデルインフルエンサーのデビューを予定しています。'
    ],
    highlights: [
      '初年度 10名のAIモデルがデビュー予定',
      'ブランドタイアップ3件が同時進行',
      '生成AIと人のクリエイティブワークフローを統合'
    ],
    tags: ['プレスリリース', 'AIモデル', '育成プログラム']
  },
  {
    slug: 'media-feature-nikkei',
    title: '日経クロストレンドにAIモデルプロジェクトが掲載',
    subtitle: '「AIとご縁」で生まれる新しいブランド体験が紹介されました',
    category: 'メディア掲載',
    publishedAt: '2024-12-05',
    heroImage: '/images/news/award-ceremony-1.jpg',
    excerpt:
      '日経クロストレンドにて、WONDERFUL WORLDのAIモデルインフルエンサープロジェクトが取り上げられました。',
    body: [
      '2024年12月5日発売の日経クロストレンドにて、WONDERFUL WORLDのAIモデルインフルエンサー事業が取り上げられました。記事では、ミスコンテスト出身者のキャリア支援とAI技術を組み合わせた新しいブランド体験について詳しく紹介されています。',
      '特集内では、AIモデルの制作プロセスや安全性の確保、パートナー企業との共創事例についても触れられており、今後の展開に向けた期待が高まっています。',
      'WONDERFUL WORLDは引き続き、AIと人の共創によって企業やブランドの価値を高める取り組みを進めてまいります。'
    ],
    tags: ['メディア掲載', 'AIモデル', '日経クロストレンド']
  }
];

export function getAllNews(): NewsArticle[] {
  return newsArticles;
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function getLatestNews(limit = 6): NewsArticle[] {
  return newsArticles
    .slice()
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}

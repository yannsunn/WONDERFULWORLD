import Link from 'next/link';
import type { Metadata } from 'next';
import ModelsHeader from '@/components/models/ModelsHeader';
import ModelsGrid from '@/components/models/ModelsGrid';

export const metadata: Metadata = {
  title: 'モデル一覧 | WONDERFUL WORLD',
  description: 'WONDERFUL WORLDで活躍するAIモデルインフルエンサーの一覧。ミスコンテストファイナリストから生まれた魅力的なバーチャルヒューマンたち。',
};

const ModelsPage = () => {
  // In production, this would come from CMS or API
  const models = [
    {
      id: 'miss-universe-japan',
      name: 'AI Yuna',
      handle: '@ai_yuna',
      followers: '150K',
      catchphrase: 'Miss Universe Japan 代表',
      description: 'Best of Miss Tokyo 2025でグランプリを獲得。世界を目指すエレガントな美の象徴。',
      image: '/images/news/top3-group.jpg',
      tags: ['Miss Universe', 'Beauty', 'Global'],
      badge: 'Grand Prix',
    },
    {
      id: 'miss-planet-japan',
      name: 'AI Sakura',
      handle: '@ai_sakura',
      followers: '128K',
      catchphrase: 'Miss Planet Japan 代表',
      description: '環境保護と美を融合。持続可能な未来を発信するAIインフルエンサー。',
      image: '/images/news/award-ceremony-1.jpg',
      tags: ['Miss Planet', 'Eco', 'Fashion'],
      badge: 'Finalist',
    },
    {
      id: 'miss-university',
      name: 'AI Rina',
      handle: '@ai_rina',
      followers: '112K',
      catchphrase: 'Miss University 代表',
      description: '知性と美しさを兼ね備えた次世代リーダー。教育支援活動にも注力。',
      image: '/images/news/award-ceremony-2.jpg',
      tags: ['Miss University', 'Education', 'Leadership'],
      badge: 'Finalist',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-24">
      <div className="container">
        {/* Page Header */}
        <ModelsHeader />

        {/* Models Grid */}
        <ModelsGrid models={models} />

        {/* Coming Soon Section */}
        <div className="text-center py-16 border-t border-primary-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            More Models Coming Soon
          </h3>
          <p className="text-gray-600 mb-8">
            新しいAIモデルを続々と追加予定です。お楽しみに！
          </p>
          <Link href="/about" className="btn-secondary">
            プロジェクトについて
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelsPage;

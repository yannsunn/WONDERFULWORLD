import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

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
      image: '/images/models/finalists-group.jpg',
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
      image: '/images/models/finalists-group.jpg',
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
      image: '/images/models/finalists-group.jpg',
      tags: ['Miss University', 'Education', 'Leadership'],
      badge: 'Finalist',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-24">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            Our Models
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ミスコンテストのファイナリストから生まれた、<br className="hidden sm:block" />
            AIモデルインフルエンサーたち
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {models.map((model) => (
            <Link
              key={model.id}
              href={`/models/${model.id}`}
              className="group"
            >
              <article className="card overflow-hidden hover:scale-105 transition-all duration-300 h-full">
                {/* Model Image */}
                <div className="relative h-96 overflow-hidden bg-gradient-to-b from-primary-100 to-primary-200">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Badge */}
                  {model.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        model.badge === 'Grand Prix'
                          ? 'bg-accent-gold text-white'
                          : 'bg-white/90 text-gray-900'
                      }`}>
                        {model.badge}
                      </span>
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white w-full">
                      <p className="text-sm font-medium mb-2">{model.catchphrase}</p>
                      <p className="text-sm opacity-90">{model.description}</p>
                    </div>
                  </div>
                </div>

                {/* Model Info */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-accent-gold transition-colors">
                    {model.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{model.handle}</p>

                  {/* Stats */}
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-semibold">{model.followers}</span>
                    <span className="ml-1">フォロワー</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {model.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

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

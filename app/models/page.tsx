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
      id: 'aihana',
      name: 'AI Hana',
      handle: '@ai_hana',
      followers: '120K',
      catchphrase: 'クールビューティ',
      description: '世界と音楽を愛するバーチャルDJモデル。夜の街に虹を架けるAIインフルエンサー。',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
      tags: ['Fashion', 'Music', 'Lifestyle'],
    },
    {
      id: 'aireina',
      name: 'AI Reina',
      handle: '@ai_reina',
      followers: '95K',
      catchphrase: '多文化ミックスモデル',
      description: 'ルーマニア出身の DJ、AIで多様性を体現するグローバルインフルエンサー。',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop',
      tags: ['Global', 'DJ', 'Diversity'],
    },
    {
      id: 'aimisaki',
      name: 'AI Misaki',
      handle: '@ai_misaki',
      followers: '88K',
      catchphrase: 'エレガントビューティ',
      description: '日本の美を世界に発信する、エレガントなAIモデル。',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',
      tags: ['Beauty', 'Japanese', 'Fashion'],
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
                  />
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

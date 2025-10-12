import Link from 'next/link';
import Image from 'next/image';

const ModelsHighlight = () => {
  // Sample model data - in production, this would come from CMS or API
  const featuredModels = [
    {
      id: 'aihana',
      name: 'AI Hana',
      handle: '@ai_hana',
      followers: '120K',
      catchphrase: 'クールビューティ',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
    },
    {
      id: 'aireina',
      name: 'AI Reina',
      handle: '@ai_reina',
      followers: '95K',
      catchphrase: '多文化ミックスモデル',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop',
    },
    {
      id: 'aimisaki',
      name: 'AI Misaki',
      handle: '@ai_misaki',
      followers: '88K',
      catchphrase: 'エレガントビューティ',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-primary-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Our Models
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AIが創る、新しい美のカタチ
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredModels.map((model) => (
            <Link
              key={model.id}
              href={`/models/${model.id}`}
              className="group"
            >
              <div className="card overflow-hidden hover:scale-105 transition-all duration-300">
                {/* Model Image */}
                <div className="relative h-96 overflow-hidden bg-gradient-to-b from-primary-100 to-primary-200">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm font-medium">{model.catchphrase}</p>
                    </div>
                  </div>
                </div>

                {/* Model Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-accent-gold transition-colors">
                    {model.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{model.handle}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-semibold">{model.followers}</span>
                    <span className="ml-1">フォロワー</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/models"
            className="inline-flex items-center btn-primary text-lg"
          >
            すべてのモデルを見る
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModelsHighlight;

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Achievement {
  date: string;
  text: string;
}

interface ModelData {
  id: string;
  name: string;
  handle: string;
  catchphrase: string;
  description: string;
  image: string;
  instagramFollowers: string;
  tiktokFollowers: string;
  engagementRate: string;
  achievements: Achievement[];
  tags: string[];
}

// Sample data - in production, fetch from CMS/API
const modelsData: Record<string, ModelData> = {
  aihana: {
    id: 'aihana',
    name: 'AI Hana',
    handle: '@ai_hana',
    catchphrase: 'クールビューティ',
    description: '世界と音楽を愛するバーチャルDJモデル。夜の街に虹を架けるAIインフルエンサー。ミスコンテスト2024ファイナリストをもとに誕生しました。',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop',
    instagramFollowers: '120K',
    tiktokFollowers: '85K',
    engagementRate: '15%',
    achievements: [
      { date: '2025.09', text: '○○ブランド WEB CM 出演' },
      { date: '2025.07', text: 'Instagramフォロワー 10万人突破' },
      { date: '2025.05', text: '○○雑誌 インタビュー掲載' },
    ],
    tags: ['Fashion', 'Music', 'Lifestyle'],
  },
  aireina: {
    id: 'aireina',
    name: 'AI Reina',
    handle: '@ai_reina',
    catchphrase: '多文化ミックスモデル',
    description: 'ルーマニア出身のDJ、AIで多様性を体現するグローバルインフルエンサー。ミスコンテスト2024ファイナリストをもとに誕生しました。',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1200&fit=crop',
    instagramFollowers: '95K',
    tiktokFollowers: '72K',
    engagementRate: '18%',
    achievements: [
      { date: '2025.09', text: '新AIモデルとしてデビュー' },
      { date: '2025.08', text: 'TikTokフォロワー 5万人突破' },
    ],
    tags: ['Global', 'DJ', 'Diversity'],
  },
  aimisaki: {
    id: 'aimisaki',
    name: 'AI Misaki',
    handle: '@ai_misaki',
    catchphrase: 'エレガントビューティ',
    description: '日本の美を世界に発信する、エレガントなAIモデル。ミスコンテスト2023ファイナリストをもとに誕生しました。',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1200&fit=crop',
    instagramFollowers: '88K',
    tiktokFollowers: '65K',
    engagementRate: '14%',
    achievements: [
      { date: '2025.06', text: '化粧品ブランド アンバサダー就任' },
      { date: '2025.04', text: 'Instagramフォロワー 5万人突破' },
    ],
    tags: ['Beauty', 'Japanese', 'Fashion'],
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const model = modelsData[params.slug];

  if (!model) {
    return {
      title: 'Model Not Found | WONDERFUL WORLD',
    };
  }

  return {
    title: `${model.name} | WONDERFUL WORLD`,
    description: `${model.name} - ${model.description}`,
  };
}

export async function generateStaticParams() {
  return Object.keys(modelsData).map((slug) => ({
    slug,
  }));
}

export default function ModelDetailPage({ params }: { params: { slug: string } }) {
  const model = modelsData[params.slug];

  if (!model) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={model.image}
          alt={model.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-accent-gold text-white text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4">
            AIモデル
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-3 sm:mb-4">
            {model.name}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-2">{model.catchphrase}</p>
          <p className="text-sm sm:text-base md:text-lg text-white/80">{model.handle}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Profile
            </h2>
            <div className="card p-4 sm:p-6 lg:p-8">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 px-4">
                {model.description}
              </p>
              <div className="flex flex-wrap gap-2 px-4">
                {model.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-primary-100 text-primary-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Stats
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="card p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-gold mb-2">
                  {model.instagramFollowers}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Instagram フォロワー</div>
              </div>
              <div className="card p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-gold mb-2">
                  {model.tiktokFollowers}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">TikTok フォロワー</div>
              </div>
              <div className="card p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-gold mb-2">
                  {model.engagementRate}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">エンゲージメント率</div>
              </div>
            </div>
          </section>

          {/* SNS Section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Social Media
            </h2>
            <div className="card p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-primary-50 to-white">
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">
                最新の投稿やコンテンツは、各SNSでご覧いただけます
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href={`https://instagram.com/${model.handle.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" />
                  </svg>
                  Instagram でフォロー
                </a>
                <a
                  href={`https://tiktok.com/${model.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                  TikTok でフォロー
                </a>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 px-4">
                ※ 実際のサイトでは、ここにInstagramとTikTokの投稿が埋め込まれます
              </p>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Activity Highlights
            </h2>
            <div className="card p-4 sm:p-6 lg:p-8">
              <ul className="space-y-3 sm:space-y-4">
                {model.achievements.map((achievement, index) => (
                  <li key={index} className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                    <span className="flex-shrink-0 w-full sm:w-24 text-xs sm:text-sm font-medium text-accent-gold">
                      {achievement.date}
                    </span>
                    <span className="text-sm sm:text-base text-gray-700">{achievement.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Back to List */}
          <div className="text-center">
            <Link
              href="/models"
              className="inline-flex items-center text-accent-gold hover:text-accent-gold/80 font-semibold transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              モデル一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

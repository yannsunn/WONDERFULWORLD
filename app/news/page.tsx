import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ニュース | WONDERFUL WORLD',
  description: 'WONDERFUL WORLDの最新情報、プレスリリース、メディア掲載情報をお届けします。',
};

const NewsPage = () => {
  const news = [
    {
      id: '2025-10-01-launch',
      date: '2025.10.01',
      category: 'プレスリリース',
      title: 'WONDERFUL WORLD プロジェクト正式ローンチ',
      excerpt: 'AI×Beautyで女性をエンパワーメントする新プロジェクトWONDERFUL WORLDが正式にスタートしました。',
      isNew: true,
    },
    {
      id: '2025-09-20-media',
      date: '2025.09.20',
      category: 'メディア掲載',
      title: '日経新聞にWONDERFUL WORLDの取り組みが紹介されました',
      excerpt: '本日の日経新聞朝刊にて、弊プロジェクトの女性支援×AI技術の取り組みが大きく取り上げられました。',
      isNew: true,
    },
    {
      id: '2025-09-01-model',
      date: '2025.09.01',
      category: 'お知らせ',
      title: '新AIモデル「AI Reina」デビュー！',
      excerpt: 'ルーマニア出身のミスコンファイナリストをベースにした新AIモデル「AI Reina」がデビューしました。',
      isNew: false,
    },
    {
      id: '2025-08-15-goods',
      date: '2025.08.15',
      category: 'お知らせ',
      title: '公式グッズ第1弾 販売開始のお知らせ',
      excerpt: 'AI Hanaのフォトブックをはじめ、オリジナルグッズの販売を開始しました。',
      isNew: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-24">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            News
          </h1>
          <p className="text-xl text-gray-600">
            最新情報・お知らせ
          </p>
        </div>

        {/* News List */}
        <div className="max-w-4xl mx-auto space-y-6 pb-16">
          {news.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="block"
            >
              <article className="card p-6 md:p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <time className="text-sm font-medium text-gray-500 flex-shrink-0">
                    {item.date}
                  </time>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/20">
                      {item.category}
                    </span>
                    {item.isNew && (
                      <span className="px-2 py-1 text-xs font-bold rounded bg-red-500 text-white">
                        NEW
                      </span>
                    )}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-accent-gold transition-colors">
                  {item.title}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.excerpt}
                </p>

                <div className="flex items-center text-accent-gold font-semibold text-sm">
                  続きを読む
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

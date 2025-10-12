import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'パートナーシップ | WONDERFUL WORLD',
  description: 'WONDERFUL WORLDとのスポンサー・パートナーシップについて。AIモデルを活用した革新的なマーケティング施策をご提案します。',
};

const PartnersPage = () => {
  const benefits = [
    {
      title: '話題性抜群',
      description: 'AI×美女というユニークさでSNSバズを創出し、貴社ブランドの認知度を飛躍的に向上させます。',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: '24時間活動可能',
      description: 'AIモデルは時間や場所を問わず活動でき、キャンペーン期間中常にPRが可能です。',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'リスク低減',
      description: 'スキャンダルやコンプライアンス問題が少なく、企業イメージを損ねません。',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: '社会貢献',
      description: '本プロジェクトへの協賛自体が女性支援活動への参画となり、貴社の社会的価値向上につながります。',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  const menus = [
    {
      title: 'SNSタイアップ投稿',
      description: 'AIモデルが貴社商品を紹介する投稿を作成・拡散。静止画・短尺動画対応。',
    },
    {
      title: 'モデル起用広告',
      description: 'Web広告や店頭ポスターにAIモデルのビジュアルを使用。高解像度素材を提供。',
    },
    {
      title: 'イベント出演',
      description: '展示会やオンラインイベントでAIモデルがバーチャル出演。CG合成によりリアルタイム参加も可能。',
    },
    {
      title: 'オリジナルAIモデル開発',
      description: '貴社専用のAIキャラクターを弊社技術で制作（要相談）。長期ブランドアンバサダーとして活用。',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-accent-gold/10 via-accent-sand/30 to-primary-50">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            Partner with Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AIモデルとのコラボで<br className="hidden sm:block" />
            貴社ブランドに新しい価値を
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
            協業のメリット
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-gold to-primary-600 text-white flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="section bg-primary-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
            提供可能なコラボメニュー
          </h2>
          <div className="space-y-6">
            {menus.map((menu, index) => (
              <div key={index} className="card p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {menu.title}
                </h3>
                <p className="text-gray-600">
                  {menu.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            ※上記以外の施策もご要望に応じ企画いたします。お気軽にご相談ください。
          </p>
        </div>
      </section>

      {/* Case Studies Placeholder */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
            導入実績
          </h2>
          <div className="card p-8 md:p-12 text-center">
            <p className="text-gray-600 mb-6">
              現在、複数の企業様とタイアップの協議を進めております。<br />
              実績が公開可能になり次第、こちらに掲載いたします。
            </p>
            <p className="text-sm text-gray-500">
              ※守秘義務により詳細は非公開
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-accent-gold/10 to-primary-50">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            お問い合わせ・ご相談
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            弊プロジェクトとのタイアップにご興味をお持ちいただけましたら、<br className="hidden sm:block" />
            ぜひ一度ご相談ください。<br />
            企画提案や詳細資料のご用意がございます。
          </p>
          <div className="card p-8 bg-white/80 backdrop-blur-sm mb-8">
            <h3 className="font-bold text-gray-900 mb-4">お問い合わせ窓口</h3>
            <div className="text-gray-700 space-y-2">
              <p>WONDERFUL WORLD事業部 パートナー担当</p>
              <p>Mail: <a href="mailto:contact@wonderful-world.example" className="text-accent-gold hover:underline">contact@wonderful-world.example</a></p>
              <p>TEL: 03-xxxx-xxxx（平日 10:00-18:00）</p>
            </div>
          </div>
          <Link href="/contact" className="btn-primary text-lg">
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;

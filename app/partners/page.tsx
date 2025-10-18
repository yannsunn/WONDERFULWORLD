import Link from 'next/link';
import type { Metadata } from 'next';
import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';

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
    <PageTransition>
      <div className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-accent-gold/10 via-accent-sand/30 to-primary-50">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-4 sm:mb-6 px-4">
                Partner with Us
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                AIモデルとのコラボで<br className="hidden sm:block" />
                貴社ブランドに新しい価値を
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-8 sm:mb-12 text-center px-4">
                協業のメリット
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="card p-4 sm:p-6 lg:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-accent-gold to-primary-600 text-white flex items-center justify-center mb-4 sm:mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4">
                  {benefit.description}
                </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="py-16 sm:py-20 lg:py-24 bg-primary-50">
          <div className="container max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-8 sm:mb-12 text-center px-4">
                提供可能なコラボメニュー
              </h2>
            </ScrollReveal>
            <div className="space-y-4 sm:space-y-6">
              {menus.map((menu, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="card p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 px-4">
                  {menu.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 px-4">
                  {menu.description}
                </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={0.5}>
              <p className="text-center text-sm sm:text-base text-gray-600 mt-6 sm:mt-8 px-4">
                ※上記以外の施策もご要望に応じ企画いたします。お気軽にご相談ください。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Case Studies Placeholder */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-8 sm:mb-12 text-center px-4">
                導入実績
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="card p-4 sm:p-6 md:p-8 lg:p-12 text-center">
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">
              現在、複数の企業様とタイアップの協議を進めております。<br />
              実績が公開可能になり次第、こちらに掲載いたします。
            </p>
            <p className="text-xs sm:text-sm text-gray-500 px-4">
              ※守秘義務により詳細は非公開
            </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-accent-gold/10 to-primary-50">
          <div className="container max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 sm:mb-6 px-4">
                お問い合わせ・ご相談
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed px-4">
                弊プロジェクトとのタイアップにご興味をお持ちいただけましたら、<br className="hidden sm:block" />
                ぜひ一度ご相談ください。<br />
                企画提案や詳細資料のご用意がございます。
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="card p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm mb-6 sm:mb-8">
                <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg">お問い合わせ窓口</h3>
                <div className="text-gray-700 space-y-2">
                  <p className="text-sm sm:text-base">WONDERFUL WORLD事業部 パートナー担当</p>
                  <p className="text-xs sm:text-sm text-gray-600">下記のお問い合わせフォームよりご連絡ください</p>
                  <p className="text-xs sm:text-sm text-gray-600">（受付時間：平日 10:00-18:00）</p>
                </div>
              </div>
              <Link href="/contact" className="btn-primary text-base sm:text-lg w-full sm:w-auto inline-block">
                お問い合わせフォームへ
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default PartnersPage;

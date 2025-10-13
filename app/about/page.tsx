import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プロジェクトについて | WONDERFUL WORLD',
  description: 'WONDERFUL WORLDのミッション、仕組み、AI技術、チーム情報。女性支援×AI技術で創る新しい世界について。',
};

const AboutPage = () => {
  const faqs = [
    {
      question: 'どうやってAIモデルの顔や体を作っているのですか？',
      answer: '独自開発の深層学習モデルにより、実在人物の特徴を学習して生成しています。ただし詳細なプロセスは企業秘密です。',
    },
    {
      question: 'モデル本人は実際の活動に関与していますか？',
      answer: 'AIモデルのSNS投稿やグッズ制作は基本的に弊社が行っています。本人とは定期的にコミュニケーションを取り、アイディア出しやインスピレーション源として協力いただくこともあります。',
    },
    {
      question: 'なぜ20%だけしか本人に還元しないのですか？',
      answer: 'AIモデルの制作・運営にもコストがかかるため、収益の一部を運営費としています。ただし事業拡大に伴い還元率アップも検討します。',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary-50 via-accent-sand/20 to-white">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            誰もが主役になれる素晴らしい世界を
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="card p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                本プロジェクトは、AI技術と美の力で女性たちの可能性を広げることを使命としています。
              </p>
              <p>
                ミスコンテスト出場者は、大会後のキャリア構築が課題となることが少なくありません。
                私たちは、そうした女性たちにAIを用いた新たな活躍の場を提供し、
                継続的な収入とキャリア形成の機会を創出します。
              </p>
              <p>
                これは単なるエンタメビジネスではなく、女性のエンパワーメントと社会的支援を実現する
                イノベーションプロジェクトです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-primary-50">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
            プロジェクトの仕組み
          </h2>

          {/* Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {[
              { step: '1', title: 'モデル選出', desc: 'ミスコン出場者と提携' },
              { step: '2', title: 'AI生成', desc: '独自AIで3Dモデル制作' },
              { step: '3', title: 'SNS運用', desc: 'コンテンツ発信' },
              { step: '4', title: '収益化', desc: '広告・グッズ販売' },
              { step: '5', title: '還元', desc: '本人に20%還元' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="card p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-accent-gold text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 translate-x-1/2 z-10">
                    <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="card p-8">
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                <strong className="text-accent-gold">1. モデル選出：</strong>
                ミスコンテスト等で活躍した女性と提携し、肖像利用許諾を取得します。
              </p>
              <p>
                <strong className="text-accent-gold">2. AI生成：</strong>
                独自開発AIで本人に似た高精細3Dモデル・CGを生成します。
              </p>
              <p>
                <strong className="text-accent-gold">3. SNS運用：</strong>
                AIモデルとしてInstagram/TikTokにて定期的にコンテンツ発信し、ファン獲得を図ります。
              </p>
              <p>
                <strong className="text-accent-gold">4. 収益化：</strong>
                SNSの広告収入・タイアップやグッズ販売等で収益を上げます。
              </p>
              <p>
                <strong className="text-accent-gold">5. 還元：</strong>
                得られた収益の約20%を実在モデル本人へ還元。残りは運営とAIモデルの活動拡大に充当します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
            AI生成技術
          </h2>
          <div className="card p-8 md:p-12">
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                私たちのAIモデルは、最新の生成AI（GAN・ディープラーニング技術）を用いて開発されています。
                数千枚規模の学習データから、表情豊かでリアルなビジュアルを作り出します。
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">特徴</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>独自モデル：</strong>ゼロから自社トレーニングした生成モデルを使用。他社サービスに頼らず柔軟なチューニングが可能。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>高精度：</strong>髪の毛一本や肌の質感まで表現する高解像度レンダリング。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>動き・動画対応：</strong>静止画だけでなく、簡易な動画コンテンツも作成。表情変化や動作アニメーションにも対応予定。</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic mt-6">
                ※具体的なアルゴリズムは企業秘密ですが、生成AIの倫理にも配慮し開発しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Women Support */}
      <section className="section bg-gradient-to-br from-accent-gold/10 to-primary-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
            女性支援の透明性
          </h2>
          <div className="card p-8 md:p-12">
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                WONDERFUL WORLDは単なるエンタメではなく、社会課題へのソリューションでもあります。
                キャリアに悩む女性たちに第二の活躍舞台を提供し、経済的自立を後押しします。
              </p>
              <p>
                収益の一部を本人に還元する仕組みは、透明性を持って運用されます。
                毎四半期末に収益報告と配分額を算出し、契約に基づき支払います。
              </p>
              <div className="bg-primary-50 border-l-4 border-accent-gold p-6 my-6">
                <p className="font-bold text-gray-900 mb-2">還元実績（2025年10月現在）</p>
                <p className="text-2xl font-bold text-accent-gold">¥X,XXX,XXX</p>
                <p className="text-sm text-gray-600 mt-1">○名の女性に累計還元</p>
              </div>
              <p>
                今後も支援対象を拡大し、より多くの女性の夢を応援していきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Representative & Company */}
      <section className="section">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
            運営チーム
          </h2>

          {/* Representative Photo */}
          <div className="card p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/about/representative-presentation.jpg"
                  alt="WONDERFUL WORLD 代表者プレゼンテーション"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">代表挨拶</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    WONDERFUL WORLDは、AI技術と美の力で女性たちの可能性を広げることを使命としています。
                  </p>
                  <p>
                    私たちは、ミスコンテスト出場者をはじめとする女性たちに、
                    AIを活用した新たな活躍の場を提供し、継続的なキャリア形成をサポートします。
                  </p>
                  <p>
                    これは単なるビジネスではなく、社会課題の解決を目指すプロジェクトです。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsors/Partners */}
          <div className="card p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">パートナー企業</h3>
            <div className="relative h-[300px] rounded-lg overflow-hidden mb-6">
              <Image
                src="/images/about/sponsors-screen.jpg"
                alt="Best of Miss Tokyo 2025 パートナー企業"
                fill
                className="object-contain bg-gray-900"
                sizes="100vw"
              />
            </div>
            <p className="text-center text-sm text-gray-600">
              Best of Miss Tokyo 2025 をサポートいただいた企業の皆様
            </p>
          </div>

          {/* Company Info */}
          <div className="card p-8 mt-8">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-32 h-32">
                <Image
                  src="/images/about/company-logo.jpg"
                  alt="WONDERFUL WORLD ロゴ"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-bold text-gray-900 text-xl mb-4">会社情報</h3>
              <div className="text-sm text-gray-600 space-y-2 max-w-md mx-auto">
                <p>WONDERFUL WORLD株式会社（※仮称）</p>
                <p>設立: 2025年9月</p>
                <p>所在地: 東京都〇〇区...</p>
                <p className="text-xs text-gray-500 italic mt-4">※正式な会社概要は追って更新予定です</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-primary-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
            FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-gold text-white flex items-center justify-center text-sm font-bold mr-3">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 pl-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            私たちと一緒に、新しい世界を創りませんか？
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partners" className="btn-primary text-lg">
              パートナーシップのご案内
            </Link>
            <Link href="/contact" className="btn-secondary text-lg">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

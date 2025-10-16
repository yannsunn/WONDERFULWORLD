import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import AnimatedSection from '@/components/about/AnimatedSection';

export const metadata: Metadata = {
  title: 'プロジェクトについて | WONDERFUL WORLD',
  description: 'WONDERFUL WORLDのミッション、仕組み、AI技術、チーム情報。女性支援×AI技術で創る新しい世界について。',
};

const AboutPage = () => {
  const faqs = [
    {
      question: 'AIモデルインフルエンサーとは何ですか？',
      answer: 'ミスコンテストファイナリストとAI技術を融合した、新しいタイプのインフルエンサーです。最先端のAI技術により、魅力的で親しみやすいコンテンツを提供します。',
    },
    {
      question: 'どのようなサービスを提供していますか？',
      answer: 'SNSマーケティング、広告・PR活動、コンテンツ制作など、多様なインフルエンサーマーケティングサービスを提供しています。企業様とのコラボレーションも積極的に行っています。',
    },
    {
      question: 'パートナーシップについて教えてください',
      answer: '企業様とのブランド協業、イベント共催、キャンペーン展開など、様々な形でのパートナーシップが可能です。詳しくは「お問い合わせ」ページからご相談ください。',
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
          <AnimatedSection>
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
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-primary-50">
        <div className="container max-w-6xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
              プロジェクトの仕組み
            </h2>
          </AnimatedSection>

          {/* Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {[
              { step: '1', title: 'モデル選出', desc: 'ミスコンテストファイナリストと提携' },
              { step: '2', title: 'AIモデル制作', desc: '最先端技術による制作' },
              { step: '3', title: 'コンテンツ発信', desc: 'SNSでの情報発信' },
              { step: '4', title: 'ブランド協業', desc: '企業様とのパートナーシップ' },
              { step: '5', title: '継続的成長', desc: 'プロジェクトの拡大' },
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
                ミスコンテストで活躍した女性と提携し、新たなキャリアの場を提供します。
              </p>
              <p>
                <strong className="text-accent-gold">2. AIモデル制作：</strong>
                最先端のAI技術を活用して、魅力的なビジュアルコンテンツを制作します。
              </p>
              <p>
                <strong className="text-accent-gold">3. コンテンツ発信：</strong>
                Instagram、TikTok等のSNSで定期的にコンテンツを発信し、ファンとのつながりを築きます。
              </p>
              <p>
                <strong className="text-accent-gold">4. ブランド協業：</strong>
                企業様とのタイアップ、キャンペーン、イベント協賛など、多様なパートナーシップを展開します。
              </p>
              <p>
                <strong className="text-accent-gold">5. 継続的成長：</strong>
                プロジェクトを拡大し、より多くの女性に活躍の機会を提供していきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
            AI技術について
          </h2>
          <div className="card p-8 md:p-12">
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                私たちは最先端のAI技術を活用し、魅力的で親しみやすいビジュアルコンテンツを制作しています。
                表情豊かでリアルなビジュアルを通じて、新しいインフルエンサーマーケティングを実現します。
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">AIモデルの特徴</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>高品質なビジュアル：</strong>美しく自然なビジュアルコンテンツを提供します。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>多様な表現力：</strong>様々なシーンやテーマに対応した柔軟なコンテンツ制作が可能です。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>ブランドコラボ対応：</strong>企業様のご要望に応じたカスタマイズが可能です。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Women Support */}
      <section className="section bg-gradient-to-br from-accent-gold/10 to-primary-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
            女性のキャリア支援
          </h2>
          <div className="card p-8 md:p-12">
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                WONDERFUL WORLDは単なるエンタメではなく、社会課題へのソリューションでもあります。
                キャリアに悩む女性たちに第二の活躍舞台を提供し、経済的自立を後押しします。
              </p>
              <p>
                ミスコンテスト出場者とのパートナーシップを通じて、AIモデルインフルエンサーという新しいキャリアの可能性を創出しています。
                定期的なコミュニケーションを大切にし、共に成長していくことを目指しています。
              </p>
              <div className="bg-primary-50 border-l-4 border-accent-gold p-6 my-6">
                <p className="font-bold text-gray-900 mb-2">プロジェクトの展開</p>
                <p className="text-gray-700">
                  AIモデルインフルエンサー事業を通じて、より多くの女性に活躍の機会を提供していきます。
                  企業様とのコラボレーションも積極的に展開してまいります。
                </p>
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
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">代表社員</h3>
                  <p className="text-lg text-gray-600">藤山 嘉彦</p>
                  <p className="text-sm text-gray-500">Yoshihiko Fujiyama</p>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    「人に富を与える」——この言葉こそが、Wonderful World 合同会社の原点です。
                  </p>
                  <p>
                    私たちは、AIの力と人のつながりをかけ合わせ、
                    挑戦するすべての人が"心の豊かさ"と"経済的な豊かさ"の両方を得られる未来を目指しています。
                  </p>
                  <p>
                    Best of Miss Tokyo 2025では、プラチナスポンサーとして参加させていただきました。
                    これからも美と技術の融合で、新しい価値を創造してまいります。
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
                <p>Wonderful World 合同会社</p>
                <p>設立: 2025年9月</p>
                <p>所在地: 東京都</p>
                <p className="text-xs text-gray-500 italic mt-4">※詳細な会社概要は追って更新予定です</p>
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

import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'プロジェクトについて | WONDERFUL WORLD',
  description: 'WONDERFUL WORLDのミッション、仕組み、AI技術、チーム情報。女性支援×AI技術で創る新しい世界について。',
};

const AboutPage = () => {
  const faqs = [
    {
      question: 'AIモデルインフルエンサーとは何ですか？',
      answer: 'ミスコンテストファイナリストとAI技術を融合した新しいインフルエンサーです。グローバルに活動できる持続可能なキャリアモデルを実現します。',
    },
    {
      question: 'どのようなサービスを提供していますか？',
      answer: 'SNSマーケティング、広告・PR活動、コンテンツ制作など、多様なサービスを提供しています。',
    },
    {
      question: 'ミスコンテスト出場者の支援について教えてください',
      answer: 'AIモデルインフルエンサーとして、継続的な収入とキャリア形成の機会を提供し、経済的自立を後押しします。',
    },
    {
      question: '本人とAIモデルの関係性はどうなっていますか？',
      answer: '本人とは定期的にコミュニケーションを取りながら、個性や魅力を活かしてプロジェクトを進めています。',
    },
    {
      question: '企業とのコラボレーションは可能ですか？',
      answer: 'はい、大歓迎です！詳しくは「パートナー」ページまたは「お問い合わせ」からご相談ください。',
    },
    {
      question: 'プロジェクトの社会的意義は何ですか？',
      answer: 'ミスコンテスト出場者の大会後のキャリア構築という社会課題に対し、AI技術で新しいソリューションを提供しています。',
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="section mesh-gradient">
          <div className="container-premium text-center">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6" style={{lineHeight: '1.6'}}>
                About Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto ja-text" style={{lineHeight: '1.9'}}>
                誰もが主役になれる<wbr />素晴らしい世界を
              </p>
            </ScrollReveal>
          </div>
        </section>

      {/* Mission Statement */}
      <section className="section">
        <div className="container-premium max-w-4xl">
          <ScrollReveal>
            <div className="card-premium hover-lift p-8 md:p-12">
              <h2 className="text-responsive-lg font-playfair font-bold text-gray-900 mb-6">
                <span className="gradient-text-sunset">Our Mission</span>
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4 ja-text" style={{lineHeight: '2'}}>
                <p>
                  本プロジェクトは、<wbr />AI技術と美の力で<wbr />女性たちの可能性を<wbr />広げることを<wbr />使命としています。
                </p>
                <p>
                  ミスコンテスト出場者は、<wbr />大会後の<wbr />キャリア構築が<wbr />課題となることが<wbr />少なくありません。
                  私たちは、<wbr />そうした女性たちに<wbr />AIを用いた<wbr />新たな活躍の場を提供し、<wbr />
                  継続的な収入と<wbr />キャリア形成の<wbr />機会を創出します。
                </p>
                <p>
                  これは単なる<wbr />エンタメビジネスではなく、<wbr />女性の<wbr />エンパワーメントと<wbr />社会的支援を<wbr />実現する
                  イノベーション<wbr />プロジェクトです。
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="section mesh-gradient-dark">
        <div className="container-premium max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-12 text-center">
              プロジェクトの仕組み
            </h2>
          </ScrollReveal>

          {/* Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {[
              { step: '1', title: 'モデル選出', desc: 'ミスコンテストファイナリストと提携' },
              { step: '2', title: 'AIモデル制作', desc: '最先端技術による制作' },
              { step: '3', title: 'コンテンツ発信', desc: 'SNSでの情報発信' },
              { step: '4', title: 'ブランド協業', desc: '企業様とのパートナーシップ' },
              { step: '5', title: '継続的成長', desc: 'プロジェクトの拡大' },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="relative">
                <div className="card-premium hover-lift p-6 text-center h-full">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technology */}
      <section className="section">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8 text-center">
              AI技術について
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="card p-8 md:p-12">
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                最先端のAI技術でミスコンテストファイナリストをベースにした魅力的なAIモデルを制作しています。
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">AIモデルの特徴</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ja-text" style={{lineHeight: '1.9'}}><strong>高品質なビジュアル：</strong>実在のミスコンテストファイナリストの美しさを活かした自然なコンテンツを提供します。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ja-text" style={{lineHeight: '1.9'}}><strong>多様な表現力：</strong>ファッション、ビューティー、ライフスタイルなど幅広い分野で柔軟なコンテンツ制作が可能です。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ja-text" style={{lineHeight: '1.9'}}><strong>グローバル活動：</strong>時間や場所の制約を超えて、世界中で活動できます。</span>
                </li>
              </ul>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Women Support */}
      <section className="section bg-gradient-to-br from-accent-gold/10 to-primary-50">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8 text-center">
              女性のキャリア支援
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="card p-8 md:p-12">
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                ミスコンテスト出場者の大会後のキャリア構築をAI技術で支援し、継続的な収入とキャリア形成の機会を創出します。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">支援の内容</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>新しいキャリアパス：</strong>AIモデルインフルエンサーという新しい活躍の場を提供します。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>経済的支援：</strong>継続的な収入で経済的自立を後押しします。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>パートナーシップ：</strong>本人と定期的にコミュニケーションを取り、共に成長することを目指しています。</span>
                </li>
              </ul>

              <div className="bg-primary-50 border-l-4 border-accent-gold p-6 my-6">
                <p className="font-bold text-gray-900 mb-3">プロジェクトビジョン</p>
                <p className="text-gray-700">
                  AI技術と美の力で女性たちの可能性を広げ、「誰もが主役になれる素晴らしい世界」を創造します。
                </p>
              </div>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Representative & Company */}
      <section className="section" id="ceo-message">
        <div className="container max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-12 text-center">
              運営チーム
            </h2>
          </ScrollReveal>

          {/* Representative Photo */}
          <ScrollReveal delay={0.2}>
            <div className="card p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
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
                    挑戦するすべての人が&ldquo;心の豊かさ&rdquo;と&ldquo;経済的な豊かさ&rdquo;の両方を得られる未来を目指しています。
                  </p>
                  <p>
                    Best of Miss Tokyo 2025では、プラチナスポンサーとして参加させていただきました。
                    これからも美と技術の融合で、新しい価値を創造してまいります。
                  </p>
                </div>
              </div>
            </div>
            </div>
          </ScrollReveal>

          {/* Sponsors/Partners */}
          <ScrollReveal delay={0.3}>
            <div className="card p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">パートナー企業</h3>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
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
          </ScrollReveal>

          {/* OEM Business & SNS Collaboration */}
          <ScrollReveal delay={0.35}>
            <div className="card p-6 sm:p-8 mt-8 bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">OEM事業・SNS運用協業</h3>
              <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover-lift">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                      🌟
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">川崎カイヤ様 OEM商品制作</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        タレント・実業家の川崎カイヤ様のOEM商品開発・製造を手がけています。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover-lift">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                      🍶
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">お酒メーカー「RUSH」</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        川崎カイヤ様のOEM商品として、お酒メーカー「RUSH」の企画・製造を担当しています。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover-lift border-2 border-orange-200">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                      📱
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">SNS運用・マーケティング協業</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                        企業様のSNSアカウント運用、インフルエンサーマーケティング、
                        コンテンツ制作など、デジタルマーケティング全般をサポートしています。
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">Instagram運用</span>
                        <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full font-medium">TikTok運用</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">X(Twitter)運用</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">コンテンツ制作</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg p-4 sm:p-6 text-white text-center">
                  <p className="text-sm sm:text-base font-semibold mb-2">パートナーシップにご興味のある企業様へ</p>
                  <p className="text-xs sm:text-sm mb-4 opacity-90">
                    OEM事業、SNS運用、AIモデル活用など、様々な形でのコラボレーションが可能です
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-2 bg-white text-orange-600 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300"
                  >
                    お問い合わせはこちら
                  </Link>
                </div>
                <div className="text-center mt-4">
                  <p className="text-xs sm:text-sm text-gray-500 italic">
                    ※協業事例は随時更新してまいります
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Company Info */}
          <ScrollReveal delay={0.4}>
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
              <div className="text-sm text-gray-600 space-y-3 max-w-xl mx-auto">
                <div>
                  <p className="font-semibold text-gray-900">会社名</p>
                  <p>Wonderful World 合同会社（Wonderful World LLC）</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">設立</p>
                  <p>2024年8月</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">代表社員</p>
                  <p>藤山 嘉彦</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">本社</p>
                  <p>〒080-0803</p>
                  <p>北海道帯広市東3条南10丁目15-1</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">東京オフィス</p>
                  <p>〒160-0014</p>
                  <p>東京都新宿区内藤町1-127 レックス神宮外苑 902</p>
                </div>
              </div>
            </div>
            </div>
          </ScrollReveal>

          {/* Partner Companies */}
          <ScrollReveal delay={0.5}>
            <div className="card p-8 mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">協力会社</h3>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-md hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      🚀
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">株式会社Awake</h4>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        ITコンサルティング、ホームページ制作、AIチャットボット開発などを手がける技術パートナー企業です。
                      </p>
                      <a
                        href="https://www.awakeinc.co.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        公式サイトを見る
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-primary-50">
        <div className="container max-w-4xl px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8 sm:mb-10 text-center">
              よくあるご質問
            </h2>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-8">FAQ</p>
          </ScrollReveal>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="card p-4 sm:p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-start text-sm sm:text-base leading-relaxed">
                  <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent-gold text-white flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3 mt-0.5">
                    Q
                  </span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-700 pl-7 sm:pl-9 text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
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
          </ScrollReveal>
        </div>
      </section>
      </div>
    </PageTransition>
  );
};

export default AboutPage;

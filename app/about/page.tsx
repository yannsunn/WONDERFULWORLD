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
      answer: 'ミスコンテストファイナリストとAI技術を融合した、新しいタイプのインフルエンサーです。実在のミスコンテストファイナリストの経験と知識をベースに、AI技術でコンテンツ制作を効率化し、グローバルに活動できる持続可能なキャリアモデルを実現しています。',
    },
    {
      question: 'どのようなサービスを提供していますか？',
      answer: 'SNSマーケティング、広告・PR活動、コンテンツ制作など、多様なインフルエンサーマーケティングサービスを提供しています。企業様とのブランドコラボレーション、イベント共催、キャンペーン展開など、様々な形でのパートナーシップが可能です。',
    },
    {
      question: 'ミスコンテスト出場者の支援について教えてください',
      answer: '私たちは、ミスコンテスト出場者に新たな活躍の場を提供しています。AIモデルインフルエンサーとして、継続的な収入とキャリア形成の機会を創出し、経済的自立を後押しします。定期的なコミュニケーションを大切にし、共に成長していくことを目指しています。',
    },
    {
      question: '本人とAIモデルの関係性はどうなっていますか？',
      answer: 'AIモデルは実在のミスコンテストファイナリストをベースにしており、本人とは定期的にコミュニケーションを取りながらプロジェクトを進めています。本人の個性や魅力を活かしつつ、AI技術により活動の幅を広げることができます。',
    },
    {
      question: '企業とのコラボレーションは可能ですか？',
      answer: 'はい、大歓迎です！商品・サービスのプロモーション、イベント共催、SNSキャンペーン、ブランドアンバサダーなど、多様な形でのコラボレーションが可能です。詳しくは「パートナー」ページまたは「お問い合わせ」からご相談ください。',
    },
    {
      question: 'プロジェクトの社会的意義は何ですか？',
      answer: 'このプロジェクトは、女性のエンパワーメントと社会的支援を実現するイノベーションプロジェクトです。ミスコンテスト出場者の大会後のキャリア構築という社会課題に対し、AI技術を活用した新しいソリューションを提供しています。',
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

          {/* Description */}
          <ScrollReveal delay={0.3}>
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
          </ScrollReveal>
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
                私たちは最先端のAI技術を活用し、ミスコンテストファイナリストをベースにした魅力的で親しみやすいAIモデルを制作しています。
                実在の人物の美しさと個性を尊重しながら、AI技術により表情豊かでリアルなビジュアルコンテンツを作り出します。
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">AIモデルインフルエンサーの特徴</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ja-text" style={{lineHeight: '1.9'}}><strong>高品質な<wbr />ビジュアル：</strong>美しく<wbr />自然な<wbr />ビジュアル<wbr />コンテンツを<wbr />提供します。実在の<wbr />ミスコンテスト<wbr />ファイナリストの<wbr />美しさを<wbr />活かした<wbr />表現が<wbr />可能です。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ja-text" style={{lineHeight: '1.9'}}><strong>多様な<wbr />表現力：</strong>様々な<wbr />シーンや<wbr />テーマに<wbr />対応した<wbr />柔軟な<wbr />コンテンツ制作が<wbr />可能です。ファッション、<wbr />ビューティー、<wbr />ライフスタイルなど<wbr />幅広い分野で<wbr />活躍できます。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ja-text" style={{lineHeight: '1.9'}}><strong>24/7<wbr />グローバル活動：</strong>時間や<wbr />場所の<wbr />制約を<wbr />超えて、<wbr />グローバルに<wbr />活動できます。多言語対応により、<wbr />世界中の<wbr />ファンと<wbr />コミュニケーションが<wbr />可能です。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ja-text" style={{lineHeight: '1.9'}}><strong>ブランド<wbr />コラボ対応：</strong>企業様の<wbr />ご要望に<wbr />応じた<wbr />カスタマイズが<wbr />可能です。ブランド<wbr />イメージに<wbr />合わせた<wbr />コンテンツ制作を<wbr />サポートします。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ja-text" style={{lineHeight: '1.9'}}><strong>持続可能な<wbr />キャリア：</strong>従来の<wbr />モデル活動の<wbr />制約を<wbr />超え、<wbr />長期的に<wbr />持続可能な<wbr />キャリア<wbr />モデルを<wbr />実現します。</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-600 italic">
                ※ 私たちは最新のAI技術を活用しつつ、倫理的配慮と透明性を大切にしています。
              </p>
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
                WONDERFUL WORLDは単なるエンタメビジネスではなく、女性のエンパワーメントと社会的支援を実現するイノベーションプロジェクトです。
                ミスコンテスト出場者は、大会後のキャリア構築が課題となることが少なくありません。
                私たちは、そうした女性たちにAIを用いた新たな活躍の場を提供し、継続的な収入とキャリア形成の機会を創出します。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">支援の内容</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>新しいキャリアパスの提供：</strong>ミスコンテスト後の活躍の場として、AIモデルインフルエンサーという新しいキャリアの可能性を提供します。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>経済的支援：</strong>プロジェクトから得られる収益を通じて、継続的な収入とキャリア形成の機会を創出し、経済的自立を後押しします。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>パートナーシップ：</strong>本人とは定期的にコミュニケーションを取り、アイデア出しやインスピレーション源として協力いただきながら、共に成長していくことを目指しています。</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>グローバル展開：</strong>AIモデルの特性を活かし、時間や場所の制約を超えたグローバルな活動を支援します。</span>
                </li>
              </ul>

              <div className="bg-primary-50 border-l-4 border-accent-gold p-6 my-6">
                <p className="font-bold text-gray-900 mb-3">プロジェクトビジョン</p>
                <p className="text-gray-700 mb-3">
                  AI技術と美の力で女性たちの可能性を広げ、「誰もが主役になれる素晴らしい世界」を創造します。
                </p>
                <p className="text-gray-700">
                  ミスコンテスト出場という経験を、一時的なものではなく、長期的なキャリアとして活かせる仕組みを作り、
                  より多くの女性に活躍の機会を提供していきます。
                </p>
              </div>
              <p>
                今後も支援対象を拡大し、より多くの女性の夢を応援していきます。
                企業様とのコラボレーションを通じて、さらに多様な活躍の場を創出してまいります。
              </p>
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
                  <p>2015年10月</p>
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

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'AIモデルインフルエンサー事業 | Wonderful World 合同会社',
  description: 'ミスコンテストファイナリストから生まれたAIモデルインフルエンサー。最先端の技術で、新しい形のインフルエンサーマーケティングを提供します。',
  keywords: ['AIモデル', 'インフルエンサー', 'AIインフルエンサー', 'バーチャルヒューマン', 'ミスコンテスト', 'デジタルマーケティング'],
  openGraph: {
    title: 'AIモデルインフルエンサー事業 | Wonderful World',
    description: 'ミスコンテストファイナリストから生まれたAIモデルインフルエンサー',
    type: 'website',
  },
};

export default function AIModelsBusinessPage() {
  const features = [
    {
      icon: '🎭',
      title: 'リアルな美しさ',
      description: 'ミスコンテストファイナリストをベースにした、本物の美を持つAIモデル'
    },
    {
      icon: '📱',
      title: '24/7稼働',
      description: '時間や場所の制約なく、いつでもどこでもコンテンツ制作が可能'
    },
    {
      icon: '💎',
      title: 'ブランドセーフ',
      description: 'スキャンダルリスクゼロで、ブランドイメージを守る安心のパートナー'
    },
    {
      icon: '🎨',
      title: 'カスタマイズ可能',
      description: 'ブランドやキャンペーンに合わせて、柔軟にカスタマイズ'
    }
  ];

  const services = [
    {
      title: 'SNSマーケティング',
      description: 'Instagram、X、TikTokなど各種SNSでのインフルエンサーマーケティング',
      image: '/images/hero/best-of-miss-poster.jpg'
    },
    {
      title: '広告・PR活動',
      description: '商品プロモーション、ブランドアンバサダー、キャンペーンモデル',
      image: '/images/news/best-of-miss-top3-with-ceo.jpg'
    },
    {
      title: 'コンテンツ制作',
      description: '写真、動画、音声など多様なコンテンツ制作に対応',
      image: '/images/news/top3-group.jpg'
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-pink-500">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center text-white">
          <ScrollReveal>
            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-playfair mb-3 sm:mb-4">
                AIモデルインフルエンサー
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 px-4">
                AI Model Influencer Business
              </p>
              <p className="text-base sm:text-lg md:text-xl opacity-90 px-4">
                次世代のインフルエンサーマーケティング
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              ミスコンテストファイナリストをベースにした、美しく魅力的なAIモデルインフルエンサー。
              最先端のAI技術で、新しい形のマーケティングを実現します。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/business/ai-models/models"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                モデル一覧を見る
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                お問い合わせ
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-3 sm:mb-4">
                AIモデルの強み
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
                従来のインフルエンサーにはない、新しい価値を提供
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{feature.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-3 sm:mb-4">
                提供サービス
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
                多様なニーズに対応したサービスラインナップ
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="relative h-40 sm:h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Models CTA Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-4 sm:mb-6">
              活躍するAIモデルたち
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              ミスコンテストファイナリストから生まれた、個性豊かなAIモデルをご紹介
            </p>
            <Link
              href="/business/ai-models/models"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-full hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              モデル一覧を見る
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* News CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-4 sm:mb-6">
              最新ニュース
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              AIモデルの活動情報やプロジェクトの最新情報をお届けします
            </p>
            <Link
              href="/business/ai-models/news"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              ニュース一覧を見る
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-4 sm:mb-6 px-4">
              AIモデルと始めませんか？
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              プロジェクトのご相談、お見積もり、その他ご質問など、お気軽にお問い合わせください
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
              >
                お問い合わせ
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                会社情報
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}

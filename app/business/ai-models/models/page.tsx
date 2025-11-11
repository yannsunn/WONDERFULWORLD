import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'AIモデル一覧 - Coming Soon | WONDERFUL WORLD',
  description: 'WONDERFUL WORLDのAIモデルインフルエンサー。ミスコンテストファイナリストから生まれた魅力的なバーチャルヒューマンたち。近日公開予定。',
};

export default function ModelsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Coming Soon Header */}
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm sm:text-base font-semibold mb-4 sm:mb-6">
                Coming Soon
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-gray-900 mb-4 sm:mb-6">
                AIモデルインフルエンサー
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                ミス・ベスト・オブ・ミス東京大会2026運営協力会社として、<br className="hidden sm:block" />
                魅力的なAIモデルインフルエンサーを近日公開予定です
              </p>
            </div>
          </ScrollReveal>

          {/* Hero Image */}
          <ScrollReveal delay={0.2}>
            <div className="relative w-full max-w-4xl mx-auto mb-12 sm:mb-16 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/images/news/top3-group.jpg"
                  alt="Best of Miss Tokyo 2025"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Features */}
          <ScrollReveal delay={0.3}>
            <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-6 sm:mb-8 text-center">
                準備中の機能
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">🎭</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    AIモデルプロフィール
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    各AIモデルの詳細なプロフィールと特徴
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">📸</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    ポートフォリオ
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    高品質なAI生成画像ギャラリー
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    ビジネス活用例
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    企業様向けの活用事例とプラン
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal delay={0.4}>
            <div className="text-center bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto border border-orange-100">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-4">
                事前のお問い合わせはこちら
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                AIモデルインフルエンサーの活用にご興味のある企業様は、<br className="hidden sm:block" />
                お気軽にお問い合わせください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  お問い合わせ
                </Link>
                <Link
                  href="/business/ai-models"
                  className="px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-full border-2 border-orange-500 hover:bg-orange-50 transition-all duration-300"
                >
                  事業詳細を見る
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}

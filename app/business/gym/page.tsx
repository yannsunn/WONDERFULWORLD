import type { Metadata } from 'next';
import GymHero from '@/components/business/GymHero';
import GymFeatures from '@/components/business/GymFeatures';
import GymPricing from '@/components/business/GymPricing';
import GymAccess from '@/components/business/GymAccess';
import { gymInfo } from '@/data/gym-info';

export const metadata: Metadata = {
  title: 'ジム事業（3BGYM）| Wonderful World 合同会社',
  description: '健康的な身体が美しさを作る。セミプライベートジムであなたの可能性を最大化します。月額6,600円から。',
  keywords: ['3BGYM', 'ジム', 'フィットネス', 'セミプライベート', '帯広', 'ピラティス', 'トレーニング'],
  openGraph: {
    title: 'ジム事業（3BGYM）| Wonderful World',
    description: '健康的な身体が美しさを作る。セミプライベートジム。',
    type: 'website',
  },
};

export default function GymPage() {
  return (
    <>
      {/* Hero Section */}
      <GymHero
        name={gymInfo.name}
        tagline={gymInfo.tagline}
        subtitle={gymInfo.subtitle}
        description={gymInfo.description}
        externalUrl={gymInfo.externalUrl}
      />

      {/* Features Section */}
      <GymFeatures features={gymInfo.features} />

      {/* Pricing Section */}
      <GymPricing
        membership={gymInfo.pricing.membership}
        entry={gymInfo.pricing.entry}
        visitor={gymInfo.pricing.visitor}
      />

      {/* Access Section */}
      <GymAccess
        location={gymInfo.location.headquarters}
        hours={gymInfo.hours}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            まずは公式サイトをチェック
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            詳しい情報、体験レッスンのお申し込みは公式サイトから
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={gymInfo.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-2"
            >
              3BGYM 公式サイト
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

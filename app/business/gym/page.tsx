import type { Metadata } from 'next';
import Script from 'next/script';
import GymHero from '@/components/business/GymHero';
import GymFeatures from '@/components/business/GymFeatures';
import GymPricing from '@/components/business/GymPricing';
import GymAccess from '@/components/business/GymAccess';
import { gymInfo } from '@/data/gym-info';
import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';

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

// LocalBusiness 構造化データ
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  '@id': 'https://3bgym.net/#organization',
  name: '3BGYM',
  alternateName: '3B body build beauty',
  description: '健康的な身体が美しさを作る！セミプライベートジムでダイエットと健康維持を総合的にサポートします。',
  url: 'https://3bgym.net',
  sameAs: [
    'https://www.instagram.com/3bobihiro'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '東3条南10丁目15-1',
    addressLocality: '帯広市',
    addressRegion: '北海道',
    postalCode: '080-0803',
    addressCountry: 'JP'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.9193,
    longitude: 143.2039
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    opens: '09:00',
    closes: '21:00'
  },
  priceRange: '¥6,600〜',
  telephone: '',
  email: '',
  image: 'https://wonderfulworld.jp/images/about/company-logo.jpg',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Wonderful World 合同会社',
    url: 'https://wonderfulworld.jp'
  }
};

export default function GymPage() {
  return (
    <PageTransition>
      {/* LocalBusiness 構造化データ */}
      <Script
        id="gym-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Hero Section (negative margin to compensate for layout padding) */}
      <div className="-mt-24">
        <GymHero
          name={gymInfo.name}
          tagline={gymInfo.tagline}
          subtitle={gymInfo.subtitle}
          description={gymInfo.description}
          externalUrl={gymInfo.externalUrl}
        />
      </div>

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
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-4 sm:mb-6">
              まずは公式サイトをチェック
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              詳しい情報、体験レッスンのお申し込みは公式サイトから
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={gymInfo.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 font-bold text-base sm:text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                3BGYM 公式サイト
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-bold text-base sm:text-lg rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 w-full sm:w-auto"
              >
                お問い合わせ
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}

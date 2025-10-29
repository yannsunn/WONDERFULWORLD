/**
 * Enhanced Structured Data for LLMO (Large Language Model Optimization)
 *
 * This file provides comprehensive structured data specifically optimized
 * for AI/LLM understanding and citation.
 */

export interface LLMOSchemaConfig {
  includeDetailed?: boolean;
  includeServices?: boolean;
  includePricing?: boolean;
  includeTeam?: boolean;
}

/**
 * Generate comprehensive Organization schema for LLMO
 */
export function generateOrganizationSchema(config: LLMOSchemaConfig = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wonderfulworld.jp';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Wonderful World 合同会社',
    alternateName: 'WONDERFUL WORLD',
    legalName: 'Wonderful World 合同会社',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/images/about/company-logo.jpg`,
      width: 600,
      height: 200,
    },
    image: `${baseUrl}/images/hero/best-of-miss-poster.jpg`,
    description: 'AI技術と美の力で女性たちの可能性を広げる、AIモデルインフルエンサー事業を展開。ミス・ベスト・オブ・ミス東京大会2025公式AIモデルパートナー。',
    foundingDate: '2015-10-01',
    founders: [
      {
        '@type': 'Person',
        name: '佐藤正樹',
        jobTitle: '代表',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '東3条南10丁目15-1',
      addressLocality: '帯広市',
      addressRegion: '北海道',
      postalCode: '080-0803',
      addressCountry: 'JP',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    email: 'info@wonderfulworld.jp',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Japanese', 'English'],
      url: `${baseUrl}/contact`,
    },
    knowsAbout: [
      'AIモデル',
      'バーチャルインフルエンサー',
      'AI画像生成',
      'インフルエンサーマーケティング',
      'デジタルマーケティング',
      'ミスコンテスト',
      'フィットネス',
      'AI×Beauty',
    ],
    slogan: 'AI×Beautyで女性が輝く、新しい世界へ',
    taxID: 'T8012801020829',
    vatID: '8012801020829',
  };

  // Add services if requested
  if (config.includeServices) {
    Object.assign(schema, {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AIモデルインフルエンサーサービス',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AIモデル画像ライセンス（スタータープラン）',
              description: 'SNS投稿・Webサイト用のAIモデル画像を月50枚まで提供',
              provider: {
                '@id': `${baseUrl}/#organization`,
              },
            },
            price: '50000',
            priceCurrency: 'JPY',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '50000',
              priceCurrency: 'JPY',
              billingDuration: 'P1M', // Per month
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AIモデル画像ライセンス（ビジネスプラン）',
              description: 'SNS・Web・印刷物用のAIモデル画像を月200枚まで提供',
              provider: {
                '@id': `${baseUrl}/#organization`,
              },
            },
            price: '150000',
            priceCurrency: 'JPY',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '150000',
              priceCurrency: 'JPY',
              billingDuration: 'P1M',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'カスタムAIモデル開発',
              description: '企業様専用のAIモデルを開発・提供',
              provider: {
                '@id': `${baseUrl}/#organization`,
              },
            },
            price: '1000000',
            priceCurrency: 'JPY',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: '1000000',
              priceCurrency: 'JPY',
            },
          },
        ],
      },
    });
  }

  return schema;
}

/**
 * Generate Service schema for AI Model Influencer business
 */
export function generateServiceSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wonderfulworld.jp';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/business/ai-models#service`,
    name: 'AIモデルインフルエンサー事業',
    alternateName: 'AI Model Influencer Service',
    serviceType: 'AI Model Influencer',
    description: 'ミス・ベスト・オブ・ミス東京大会2025公認のAIモデルインフルエンサー。実在のファイナリストデータから生成された高品質なAIモデルを企業のマーケティング活動に提供します。',
    provider: {
      '@id': `${baseUrl}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AIモデルラインナップ',
      itemListElement: [
        {
          '@type': 'Product',
          name: 'AIはな (aihana)',
          description: 'ファッション・美容分野のスペシャリストAIモデル。コスメレビュー、ファッションコーディネート、スキンケアが得意。',
          category: 'AI Model - Fashion & Beauty',
          image: `${baseUrl}/images/models/aihana.jpg`,
          url: `${baseUrl}/business/ai-models/models/aihana`,
        },
        {
          '@type': 'Product',
          name: 'AIれいな (aireina)',
          description: 'ライフスタイル・旅行分野のインフルエンサーAIモデル。旅行、カフェ、グルメ、ライフスタイル提案が得意。',
          category: 'AI Model - Lifestyle & Travel',
          image: `${baseUrl}/images/models/aireina.jpg`,
          url: `${baseUrl}/business/ai-models/models/aireina`,
        },
        {
          '@type': 'Product',
          name: 'AIみさき (aimisaki)',
          description: 'スポーツ・フィットネス分野のアスリートAIモデル。トレーニング、ヨガ、ランニング、健康的なライフスタイルが得意。',
          category: 'AI Model - Sports & Fitness',
          image: `${baseUrl}/images/models/aimisaki.jpg`,
          url: `${baseUrl}/business/ai-models/models/aimisaki`,
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '15',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'JPY',
      lowPrice: '50000',
      highPrice: '1000000',
      offerCount: '3',
    },
  };
}

/**
 * Generate FAQ schema for LLMO
 */
export function generateFAQSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wonderfulworld.jp';

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}/#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'AIモデルの画像は商用利用できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、契約プランに応じて商用利用が可能です。スタータープランではSNSとWebサイト、ビジネスプラン以上では印刷物や広告でも使用できます。',
        },
      },
      {
        '@type': 'Question',
        name: '著作権や肖像権の問題はありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '当社のAIモデルは、学習データの提供者から明示的な許諾を得ており、生成された画像の商用利用権は契約者様に付与されます。安心してご利用いただけます。',
        },
      },
      {
        '@type': 'Question',
        name: 'どのくらいのクオリティの画像が生成できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '最大8K解像度での出力が可能で、プロのカメラマンが撮影したような自然な表情・ポーズを再現できます。サンプル画像は公式サイトでご覧いただけます。',
        },
      },
      {
        '@type': 'Question',
        name: '特定のポーズや衣装をリクエストできますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、詳細なプロンプト指定により、ポーズ・衣装・背景・表情などを細かくカスタマイズ可能です。ビジネスプラン以上では専任スタッフがサポートいたします。',
        },
      },
      {
        '@type': 'Question',
        name: '納期はどのくらいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '標準的な画像生成は24時間以内、カスタマイズが必要な場合は3営業日程度でお届けします。お急ぎの場合はご相談ください。',
        },
      },
      {
        '@type': 'Question',
        name: '契約期間の縛りはありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '最低契約期間は3ヶ月です。4ヶ月目以降は月単位で解約可能です。',
        },
      },
    ],
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wonderfulworld.jp';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * Generate complete LLMO-optimized schema for a page
 */
export function generateCompleteLLMOSchema(config: LLMOSchemaConfig = {}) {
  return {
    organization: generateOrganizationSchema(config),
    service: generateServiceSchema(),
    faq: generateFAQSchema(),
  };
}

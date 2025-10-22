import Script from 'next/script';

interface OrganizationData {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  foundingDate?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
}

interface ArticleData {
  headline: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  description?: string;
}

interface WebsiteData {
  name: string;
  url: string;
  description?: string;
}

type StructuredDataType = OrganizationData | WebsiteData | ArticleData;

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'article';
  data: StructuredDataType;
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const generateSchema = () => {
    switch (type) {
      case 'organization': {
        const orgData = data as OrganizationData;
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: orgData.name || 'Wonderful World 合同会社',
          url: orgData.url || 'https://wonderfulworld.jp',
          logo: orgData.logo || 'https://wonderfulworld.jp/images/about/company-logo.jpg',
          description: orgData.description || 'AI技術と美の力で女性たちの可能性を広げる、AIモデルインフルエンサー事業',
          foundingDate: orgData.foundingDate || '2015-10-01',
          address: orgData.address || {
            '@type': 'PostalAddress',
            streetAddress: '東3条南10丁目15-1',
            addressLocality: '帯広市',
            addressRegion: '北海道',
            postalCode: '080-0803',
            addressCountry: 'JP',
          },
          sameAs: [
            // SNSやその他のプロフィールリンク（今後追加）
          ],
        };
      }

      case 'website': {
        const websiteData = data as WebsiteData;
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: websiteData.name || 'WONDERFUL WORLD',
          url: websiteData.url || 'https://wonderfulworld.jp',
          description: websiteData.description || 'AI×Beautyで女性が輝く、新しい世界へ',
          publisher: {
            '@type': 'Organization',
            name: 'Wonderful World 合同会社',
          },
        };
      }

      case 'article': {
        const articleData = data as ArticleData;
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: articleData.headline,
          datePublished: articleData.datePublished,
          dateModified: articleData.dateModified || articleData.datePublished,
          author: {
            '@type': 'Organization',
            name: 'Wonderful World 合同会社',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Wonderful World 合同会社',
            logo: {
              '@type': 'ImageObject',
              url: 'https://wonderfulworld.jp/images/about/company-logo.jpg',
            },
          },
          image: articleData.image,
          description: articleData.description,
        };
      }

      default:
        return {};
    }
  };

  const schema = generateSchema();

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import dynamic from 'next/dynamic';
import HeroSection from '@/components/company/HeroSection';
import { companyInfo, ceoMessage } from '@/data/company-info';

// 初期表示に不要なコンポーネントを動的インポート（Below-the-fold content）
const PhilosophySection = dynamic(() => import('@/components/company/PhilosophySection'), {
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>
  ),
});

const BusinessCards = dynamic(() => import('@/components/company/BusinessCards'));
const CEOMessageSection = dynamic(() => import('@/components/company/CEOMessageSection'));

export default function Home() {
  return (
    <>
      {/* Hero Section - キャッチコピー (negative margin to compensate for layout padding) */}
      <div className="-mt-24">
        <HeroSection
          title={companyInfo.submessage}
          subtitle="Wonderful World 合同会社"
          message={companyInfo.message}
          ctaButtons={{
            primary: { text: '事業案内を見る', href: '#business' },
            secondary: { text: '会社情報', href: '/about' }
          }}
        />
      </div>

      {/* Philosophy/Vision/Mission */}
      <PhilosophySection
        philosophy={companyInfo.philosophy}
        vision={companyInfo.vision}
        mission={companyInfo.mission}
      />

      {/* 事業紹介カード */}
      <div id="business">
        <BusinessCards businesses={companyInfo.businesses} />
      </div>

      {/* 代表挨拶 */}
      <CEOMessageSection
        name={ceoMessage.name}
        title={ceoMessage.title}
        message={ceoMessage.excerpt}
        photo={ceoMessage.photo}
        fullMessageUrl="/about#ceo-message"
      />
    </>
  );
}

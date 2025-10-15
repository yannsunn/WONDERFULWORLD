import HeroSection from '@/components/company/HeroSection';
import PhilosophySection from '@/components/company/PhilosophySection';
import BusinessCards from '@/components/company/BusinessCards';
import CEOMessageSection from '@/components/company/CEOMessageSection';
import CompanyInfoSection from '@/components/company/CompanyInfoSection';
import { companyInfo, ceoMessage } from '@/data/company-info';

export default function Home() {
  return (
    <>
      {/* Hero Section - キャッチコピー */}
      <HeroSection
        title={companyInfo.submessage}
        subtitle="Wonderful World 合同会社"
        message={companyInfo.message}
        ctaButtons={{
          primary: { text: '事業案内を見る', href: '#business' },
          secondary: { text: '会社情報', href: '#company' }
        }}
      />

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

      {/* 会社情報 */}
      <div id="company">
        <CompanyInfoSection
          name={companyInfo.name}
          established={companyInfo.established}
          representative={companyInfo.representative}
          offices={companyInfo.offices}
        />
      </div>
    </>
  );
}

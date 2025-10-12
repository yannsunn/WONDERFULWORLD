import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import ConceptSection from '@/components/home/ConceptSection';
import ModelsHighlight from '@/components/home/ModelsHighlight';
import NewsSection from '@/components/home/NewsSection';
import SocialMediaSection from '@/components/home/SocialMediaSection';
import SponsorSection from '@/components/home/SponsorSection';
import MissionSection from '@/components/home/MissionSection';
import GoodsSection from '@/components/home/GoodsSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Concept - 3 Pillars */}
      <ConceptSection />

      {/* Models Highlight */}
      <ModelsHighlight />

      {/* Latest News */}
      <NewsSection />

      {/* Social Media Highlight */}
      <SocialMediaSection />

      {/* Sponsor / Partner Section */}
      <SponsorSection />

      {/* Mission / Women Support */}
      <MissionSection />

      {/* Official Goods */}
      <GoodsSection />
    </>
  );
}

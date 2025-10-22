import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import dynamic from "next/dynamic";

// Dynamic imports for heavy components
const ChatbotHybrid = dynamic(() => import("@/components/ChatbotHybrid"), {
  ssr: false,
  loading: () => null,
});

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then((mod) => mod.Analytics),
  { ssr: false }
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: false, // Only preload main font
  adjustFontFallback: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

// Viewport configuration (separate from metadata in Next.js 14)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f97316' },
    { media: '(prefers-color-scheme: dark)', color: '#ea580c' }
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "WONDERFUL WORLD - AI×Beautyで女性が輝く、新しい世界へ",
    template: "%s | WONDERFUL WORLD"
  },
  description: "ミスコンテストのファイナリストから生まれたAIモデルインフルエンサー。独自開発のAI技術で、女性たちに新たなチャンスを提供し、世界へ羽ばたくプロジェクトです。",
  keywords: ["AIモデル", "バーチャルインフルエンサー", "女性支援", "AI×Beauty", "ミスコンテスト"],
  authors: [{ name: "WONDERFUL WORLD Project" }],
  creator: "WONDERFUL WORLD Project",
  publisher: "Wonderful World 合同会社",
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'WONDERFUL WORLD',
  },
  openGraph: {
    title: "WONDERFUL WORLD - AI×Beautyで女性が輝く、新しい世界へ",
    description: "ミスコンテストのファイナリストから生まれたAIモデルインフルエンサー",
    type: "website",
    locale: "ja_JP",
    siteName: "WONDERFUL WORLD",
    images: [
      {
        url: "/images/hero/best-of-miss-poster.jpg",
        width: 1200,
        height: 630,
        alt: "WONDERFUL WORLD - AIモデルインフルエンサープロジェクト",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WONDERFUL WORLD - AI×Beautyで女性が輝く、新しい世界へ",
    description: "ミスコンテストのファイナリストから生まれたAIモデルインフルエンサー",
    images: ["/images/hero/best-of-miss-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <StructuredData
          type="organization"
          data={{
            name: 'Wonderful World 合同会社',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://wonderfulworld.jp',
            description: 'AI技術と美の力で女性たちの可能性を広げる、AIモデルインフルエンサー事業',
            foundingDate: '2015-10-01',
          }}
        />
        <StructuredData
          type="website"
          data={{
            name: 'WONDERFUL WORLD',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://wonderfulworld.jp',
            description: 'AI×Beautyで女性が輝く、新しい世界へ',
          }}
        />
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <ChatbotHybrid />
        <Analytics />
      </body>
    </html>
  );
}

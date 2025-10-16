import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatbotHybrid from "@/components/ChatbotHybrid";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "WONDERFUL WORLD - AI×Beautyで女性が輝く、新しい世界へ",
  description: "ミスコンテストのファイナリストから生まれたAIモデルインフルエンサー。独自開発のAI技術で、女性たちに新たなチャンスを提供し、世界へ羽ばたくプロジェクトです。",
  keywords: ["AIモデル", "バーチャルインフルエンサー", "女性支援", "AI×Beauty", "ミスコンテスト"],
  authors: [{ name: "WONDERFUL WORLD Project" }],
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
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatbotHybrid />
        <Analytics />
      </body>
    </html>
  );
}

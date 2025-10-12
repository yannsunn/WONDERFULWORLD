import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary_large_image",
    title: "WONDERFUL WORLD - AI×Beautyで女性が輝く、新しい世界へ",
    description: "ミスコンテストのファイナリストから生まれたAIモデルインフルエンサー",
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
      </body>
    </html>
  );
}

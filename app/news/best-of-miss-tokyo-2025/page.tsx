import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import ImageGallery from '@/components/ImageGallery';

export const metadata: Metadata = {
  title: 'Best of Miss Tokyo 2025 メインスポンサーとして参加 | WONDERFUL WORLD',
  description: 'WONDERFUL WORLDは「Best of Miss Tokyo 2025」にメインスポンサーとして参加し、代表が特別賞を授与しました。',
};

const BestOfMissTokyoPage = () => {
  const galleryImages = [
    {
      src: '/images/news/group-photo-main.jpg',
      alt: 'Best of Miss Tokyo 2025 グループ写真',
      caption: 'ファイナリスト、ゲスト、スタッフの皆様と',
    },
    {
      src: '/images/news/stage-finalists.jpg',
      alt: 'ステージ上のファイナリストと代表',
      caption: 'ステージでの授賞式の様子',
    },
    {
      src: '/images/news/top3-group.jpg',
      alt: 'トップ3と代表の記念撮影',
      caption: '栄冠に輝いたトップ3の皆様と',
    },
    {
      src: '/images/news/award-ceremony-1.jpg',
      alt: 'WONDERFUL WORLD特別賞授与式',
      caption: 'WONDERFUL WORLD特別賞の授与',
    },
    {
      src: '/images/news/award-ceremony-2.jpg',
      alt: '特別賞授与式の様子',
      caption: '受賞者の皆様との記念撮影',
    },
    {
      src: '/images/news/guests-photo.jpg',
      alt: 'ゲストの皆様と',
      caption: 'イベントをサポートいただいたゲストの皆様',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <article className="container max-w-4xl">
        {/* Back Link */}
        <Link
          href="/news"
          className="inline-flex items-center text-accent-gold hover:text-primary-700 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          ニュース一覧に戻る
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <time className="text-sm font-medium text-gray-500">2025.10.13</time>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/20">
              イベント
            </span>
            <span className="px-2 py-1 text-xs font-bold rounded bg-red-500 text-white">
              NEW
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
            Best of Miss Tokyo 2025<br />メインスポンサーとして参加
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            WONDERFUL WORLDは「Best of Miss Tokyo 2025」にメインスポンサーとして参加し、
            代表が特別賞を授与しました。Miss Universe Japan、Miss Planet Japan、Miss Universityの
            3大会のファイナリストが集う華やかなイベントとなりました。
          </p>
        </header>

        {/* Main Image */}
        <div className="relative h-[500px] rounded-xl overflow-hidden mb-12 shadow-2xl">
          <Image
            src="/images/news/group-photo-main.jpg"
            alt="Best of Miss Tokyo 2025 集合写真"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            3大ミスコンテストが集結
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            2025年10月、東京にて「Best of Miss Tokyo 2025」が盛大に開催されました。
            本イベントは、Miss Universe Japan、Miss Planet Japan、Miss Universityという
            日本を代表する3つのミスコンテストのファイナリストたちが一堂に会する特別な機会となりました。
          </p>

          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 mt-12">
            WONDERFUL WORLD特別賞を授与
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            WONDERFUL WORLDは本イベントのメインスポンサーとして参加し、
            代表が「WONDERFUL WORLD特別賞」を授与しました。
            この賞は、美しさだけでなく、社会への貢献意欲と将来性を持つファイナリストに贈られるものです。
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            受賞者の皆様は、今後WONDERFUL WORLDのプロジェクトにおいて、
            AIモデルインフルエンサーとしての活動機会や、様々なキャリアサポートを受けることができます。
          </p>

          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 mt-12">
            女性のエンパワーメントを支援
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            WONDERFUL WORLDの理念は、「AI技術と美の力で女性たちの可能性を広げること」です。
            ミスコンテスト出場者は、大会後のキャリア構築が課題となることが少なくありません。
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            私たちは、このようなイベントへの協賛を通じて、女性たちに継続的な活躍の場を提供し、
            経済的自立とキャリア形成を支援していきます。
          </p>

          <div className="bg-primary-50 border-l-4 border-accent-gold p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              イベント概要
            </h3>
            <dl className="space-y-2 text-gray-700">
              <div className="flex">
                <dt className="font-semibold min-w-[120px]">イベント名:</dt>
                <dd>Best of Miss Tokyo 2025</dd>
              </div>
              <div className="flex">
                <dt className="font-semibold min-w-[120px]">開催日:</dt>
                <dd>2025年10月</dd>
              </div>
              <div className="flex">
                <dt className="font-semibold min-w-[120px]">会場:</dt>
                <dd>東京都内</dd>
              </div>
              <div className="flex">
                <dt className="font-semibold min-w-[120px]">参加大会:</dt>
                <dd>Miss Universe Japan、Miss Planet Japan、Miss University</dd>
              </div>
              <div className="flex">
                <dt className="font-semibold min-w-[120px]">協賛:</dt>
                <dd>WONDERFUL WORLD（メインスポンサー）他多数</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Photo Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
            イベントフォトギャラリー
          </h2>
          <ImageGallery images={galleryImages} columns={3} />
        </section>

        {/* Related Links */}
        <div className="border-t pt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">関連情報</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/about" className="card p-6 hover:shadow-xl transition-all duration-300 group">
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-accent-gold transition-colors">
                プロジェクトについて
              </h4>
              <p className="text-sm text-gray-600">
                WONDERFUL WORLDのミッションと仕組みを詳しく見る
              </p>
            </Link>
            <Link href="/models" className="card p-6 hover:shadow-xl transition-all duration-300 group">
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-accent-gold transition-colors">
                AIモデル一覧
              </h4>
              <p className="text-sm text-gray-600">
                活動中のAIモデルインフルエンサーをチェック
              </p>
            </Link>
          </div>
        </div>

        {/* Back to News */}
        <div className="text-center mt-12">
          <Link href="/news" className="btn-secondary inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ニュース一覧に戻る
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BestOfMissTokyoPage;

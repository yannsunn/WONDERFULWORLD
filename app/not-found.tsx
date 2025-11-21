import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 via-white to-pink-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-100 mb-6">
            <svg
              className="w-12 h-12 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-6xl font-playfair font-bold text-gray-900 mb-4">
            404
          </h1>
          <p className="text-2xl font-bold text-gray-800 mb-2">
            ページが見つかりません
          </p>
          <p className="text-gray-600 mb-8">
            お探しのページは存在しないか、移動した可能性があります。
            <br />
            URLをご確認いただくか、ホームページからお探しください。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg rounded-full hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            ホームに戻る
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-orange-500 text-orange-600 font-bold text-lg rounded-full hover:bg-orange-50 transition-all duration-300"
          >
            お問い合わせ
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-sm text-gray-500 mb-4">よく見られているページ</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/about" className="px-4 py-2 text-sm text-gray-700 hover:text-orange-600 border border-gray-300 rounded-full hover:border-orange-500 transition-colors">
              会社情報
            </Link>
            <Link href="/business/ai-models" className="px-4 py-2 text-sm text-gray-700 hover:text-orange-600 border border-gray-300 rounded-full hover:border-orange-500 transition-colors">
              AIモデル事業
            </Link>
            <Link href="/business/gym" className="px-4 py-2 text-sm text-gray-700 hover:text-orange-600 border border-gray-300 rounded-full hover:border-orange-500 transition-colors">
              ジム事業
            </Link>
            <Link href="/partners" className="px-4 py-2 text-sm text-gray-700 hover:text-orange-600 border border-gray-300 rounded-full hover:border-orange-500 transition-colors">
              パートナー
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

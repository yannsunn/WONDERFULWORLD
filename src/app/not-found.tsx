import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-6xl font-bold text-gray-900 mb-2 font-playfair">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            ページが見つかりません
          </h2>
          <p className="text-gray-600 mb-6">
            お探しのページは存在しないか、移動された可能性があります。
          </p>
        </div>
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold"
          >
            トップページに戻る
          </Link>
          <Link
            href="/contact"
            className="block w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}

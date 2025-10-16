/**
 * シンプルなローディングスピナーコンポーネント
 */
export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-orange-500 rounded-full animate-spin`}
        role="status"
        aria-label="読み込み中"
      />
    </div>
  );
}

/**
 * ページ全体のローディング画面
 */
export function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 via-white to-pink-50">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-100 to-pink-100 mb-6 shadow-lg">
          <div className="w-12 h-12 border-4 border-white border-t-orange-500 rounded-full animate-spin" />
        </div>
        <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-2">
          Loading...
        </h2>
        <p className="text-gray-600">ページを読み込んでいます</p>
      </div>
    </div>
  );
}

/**
 * コンテンツセクションのローディング
 */
export function LoadingSection() {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-gray-600">読み込み中...</p>
      </div>
    </div>
  );
}

/**
 * カード型のローディングスケルトン
 */
export function LoadingCard() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg animate-pulse">
      <div className="w-full h-48 bg-gray-200" />
      <div className="p-6">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="h-3 bg-gray-200 rounded w-full mb-2" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />
      </div>
    </div>
  );
}

/**
 * ニュース一覧のローディングスケルトン
 */
export function LoadingNewsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <LoadingCard key={i} />
      ))}
    </div>
  );
}

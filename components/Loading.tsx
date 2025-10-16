/**
 * プレミアムローディングスピナーコンポーネント
 */
export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Outer ring with gradient */}
        <div
          className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 p-0.5 animate-spin`}
          role="status"
          aria-label="読み込み中"
        >
          <div className="w-full h-full bg-white rounded-full" />
        </div>
        {/* Inner pulsing dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}

/**
 * ページ全体のローディング画面 - Ultra Premium
 */
export function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-pink-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 text-center">
        {/* Premium spinner */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm mb-8 shadow-2xl relative animate-pulse-glow">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 p-1 animate-spin">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-3xl font-heading font-bold gradient-text mb-3 animate-shimmer">
          WONDERFUL WORLD
        </h2>
        <p className="text-gray-600 animate-pulse">ページを読み込んでいます...</p>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
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
 * カード型のローディングスケルトン - Premium
 */
export function LoadingCard() {
  return (
    <div className="card-hover relative overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

      <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
      </div>
      <div className="p-6">
        <div className="h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4 mb-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
        </div>
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-1/2 mb-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
          </div>
          <div className="h-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded w-5/6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
          </div>
        </div>
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

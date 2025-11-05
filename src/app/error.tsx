'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーログを送信（本番環境ではSentryなどに送信）
    if (process.env.NODE_ENV === 'production') {
      console.error('Application error:', error);
      // TODO: Sentry.captureException(error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 font-playfair">
            エラーが発生しました
          </h1>
          <p className="text-gray-600 mb-6">
            申し訳ございません。予期しないエラーが発生しました。
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className="text-left bg-red-50 p-4 rounded-lg mb-4">
              <summary className="cursor-pointer font-semibold text-red-900 mb-2">
                エラー詳細（開発環境のみ）
              </summary>
              <pre className="text-xs text-red-800 overflow-auto">
                {error.message}
                {error.stack}
              </pre>
            </details>
          )}
        </div>
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold"
          >
            再試行
          </button>
          <a
            href="/"
            className="block w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
          >
            トップページに戻る
          </a>
        </div>
      </div>
    </div>
  );
}

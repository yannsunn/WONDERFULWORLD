'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '500px' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>⚠️</h1>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>
              重大なエラーが発生しました
            </h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>
              アプリケーションで重大なエラーが発生しました。ページをリロードしてください。
            </p>
            <button
              onClick={reset}
              style={{
                padding: '12px 24px',
                backgroundColor: '#f97316',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              再試行
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

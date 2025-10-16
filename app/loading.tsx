export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 via-white to-pink-50">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-100 to-pink-100 mb-6 shadow-lg">
          <div
            className="w-12 h-12 border-4 border-white border-t-orange-500 rounded-full animate-spin"
            role="status"
            aria-label="読み込み中"
          />
        </div>
        <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-2">
          Loading...
        </h2>
        <p className="text-gray-600">ページを読み込んでいます</p>
      </div>
    </div>
  );
}

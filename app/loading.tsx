export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-accent-gold mb-4"></div>
        <p className="text-gray-600 font-medium">読み込み中...</p>
      </div>
    </div>
  );
}

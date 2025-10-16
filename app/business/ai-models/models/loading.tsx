export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-28">
      <div className="container">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-200 rounded-lg w-64 mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-lg w-96 mx-auto animate-pulse"></div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card overflow-hidden">
              <div className="h-96 bg-gray-200 animate-pulse"></div>
              <div className="p-6 space-y-3">
                <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

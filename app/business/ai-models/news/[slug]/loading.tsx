export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-pink-50 py-20">
      <article className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Image Skeleton */}
          <div className="w-full h-96 bg-gray-200 animate-pulse" />
          
          <div className="p-8 md:p-12">
            {/* Meta Info Skeleton */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-8 bg-gray-200 rounded-full w-24 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-32 animate-pulse" />
            </div>

            {/* Title Skeleton */}
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-8 animate-pulse" />

            {/* Content Skeleton */}
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

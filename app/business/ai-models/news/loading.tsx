import { LoadingNewsList } from '@/components/Loading';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-pink-50 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12">
          <div className="h-12 bg-gray-200 rounded w-64 mb-4 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-96 animate-pulse" />
        </div>
        <LoadingNewsList />
      </div>
    </div>
  );
}

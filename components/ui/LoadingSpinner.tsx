export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 opacity-20"></div>
        </div>
      </div>
    </div>
  );
}

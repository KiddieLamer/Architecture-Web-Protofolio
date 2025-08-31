interface SkeletonLoaderProps {
  className?: string;
}

export default function SkeletonLoader({ className = "" }: SkeletonLoaderProps) {
  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      {/* Main background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 bg-[length:200%_100%] animate-shimmer" />
      
      {/* Wave effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent w-1/3 animate-wave" />
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/50">
        <div className="h-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 animate-loading-bar" />
      </div>
      
      {/* Loading text indicator - subtle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
            <span className="text-xs text-gray-600 font-medium">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
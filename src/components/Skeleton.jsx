// Pulsing placeholder shown while data loads from the API.
export const SkeletonBlock = ({ className = "" }) => (
  <div className={`animate-pulse rounded-lg bg-white/10 ${className}`.trim()} />
);

export const SkeletonCard = ({ className = "" }) => (
  <div
    className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 ${className}`.trim()}
    aria-hidden="true"
  >
    <SkeletonBlock className="h-40 w-full" />
    <SkeletonBlock className="mt-5 h-5 w-3/4" />
    <SkeletonBlock className="mt-3 h-4 w-1/2" />
    <SkeletonBlock className="mt-6 h-4 w-full" />
  </div>
);

export const SkeletonGrid = ({ count = 3, className = "" }) => (
  <div
    role="status"
    aria-label="Loading"
    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`.trim()}
  >
    {Array.from({ length: count }, (_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

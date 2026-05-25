'use client';

// ============================================================
// VeeVid Hub — Skeleton Loader Component
// ============================================================

import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width — accepts Tailwind width class like 'w-32' or inline style */
  width?: string;
  /** Height — accepts Tailwind height class like 'h-4' */
  height?: string;
  /** Make it circular */
  circle?: boolean;
}

export function Skeleton({
  className,
  width,
  height,
  circle = false,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-white/10 rounded-lg',
        circle && 'rounded-full',
        width,
        height,
        className,
      )}
      {...props}
    />
  );
}

/** Pre-composed skeleton for text blocks */
export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2.5">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn('h-3', i === lines - 1 ? 'w-3/4' : 'w-full')}
        />
      ))}
    </div>
  );
}

/** Pre-composed skeleton for cards */
export function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4">
      <Skeleton className="h-5 w-2/5" />
      <SkeletonText lines={2} />
      <Skeleton className="h-40 w-full rounded-xl" />
    </div>
  );
}

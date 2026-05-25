'use client';

// ============================================================
// VeeVid Hub — useMounted Hook
// ============================================================

import { useEffect, useState } from 'react';

/**
 * Returns true after the component has mounted (client-side only).
 * Useful for avoiding hydration mismatches.
 *
 * @example
 * const mounted = useMounted();
 * if (!mounted) return <Skeleton />;
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  return mounted;
}

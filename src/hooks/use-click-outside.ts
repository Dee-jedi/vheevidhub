'use client';

// ============================================================
// VeeVid Hub — useClickOutside Hook
// ============================================================

import { useEffect, useRef } from 'react';

/**
 * Fires a callback when a click lands outside the referenced element.
 *
 * @example
 * const ref = useClickOutside(() => setOpen(false));
 * return <div ref={ref}>...</div>;
 */
export function useClickOutside<T extends HTMLElement = HTMLDivElement>(
  callback: () => void,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [callback]);

  return ref;
}

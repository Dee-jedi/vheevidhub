'use client';

// ============================================================
// VeeVid Hub — useLocalStorage Hook
// ============================================================

import { useCallback, useEffect, useState } from 'react';

/**
 * useState backed by localStorage for persistence across sessions.
 *
 * @example
 * const [name, setName] = useLocalStorage('user_name', 'Guest');
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setStoredValue(JSON.parse(item));
      }
    } catch {
      // If parsing fails, keep the initial value
    }
  }, [key]);

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const nextValue = value instanceof Function ? value(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(nextValue));
        } catch {
          // localStorage might be full or unavailable
        }
        return nextValue;
      });
    },
    [key],
  );

  return [storedValue, setValue];
}

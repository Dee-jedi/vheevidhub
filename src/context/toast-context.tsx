'use client';

// ============================================================
// VeeVid Hub — Toast Context
// ============================================================

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import type { Toast, ToastVariant } from '@/types';
import { generateId } from '@/lib/utils';
import { TOAST_DEFAULT_DURATION, TOAST_MAX_VISIBLE } from '@/constants';

interface ToastContextValue {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => string;
  removeToast: (id: string) => void;
  clearToasts: () => void;
  // Convenience methods
  success: (title: string, description?: string) => string;
  error: (title: string, description?: string) => string;
  warning: (title: string, description?: string) => string;
  info: (title: string, description?: string) => string;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = generateId();
      const newToast: Toast = { ...toast, id };

      setToasts((prev) => {
        const next = [...prev, newToast];
        // Keep only the last N toasts
        return next.slice(-TOAST_MAX_VISIBLE);
      });

      // Auto-dismiss
      const duration = toast.duration ?? TOAST_DEFAULT_DURATION;
      if (duration > 0) {
        setTimeout(() => removeToast(id), duration);
      }

      return id;
    },
    [removeToast],
  );

  const clearToasts = useCallback(() => setToasts([]), []);

  // Convenience methods
  const shortcut = useCallback(
    (variant: ToastVariant) =>
      (title: string, description?: string) =>
        addToast({ title, description, variant }),
    [addToast],
  );

  const value = useMemo<ToastContextValue>(
    () => ({
      toasts,
      addToast,
      removeToast,
      clearToasts,
      success: shortcut('success'),
      error: shortcut('error'),
      warning: shortcut('warning'),
      info: shortcut('info'),
    }),
    [toasts, addToast, removeToast, clearToasts, shortcut],
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within <ToastProvider>');
  return ctx;
}

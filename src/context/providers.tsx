'use client';

// ============================================================
// VeeVid Hub — Root Providers
// ============================================================

import { ThemeProvider } from './theme-context';
import { AuthProvider } from './auth-context';
import { ToastProvider } from './toast-context';

/**
 * Compose all context providers into a single wrapper.
 * Add new providers here — order matters (outer wraps inner).
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          {children}
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

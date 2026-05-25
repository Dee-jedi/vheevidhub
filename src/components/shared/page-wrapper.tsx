'use client';

// ============================================================
// VeeVid Hub — Page Wrapper (shared)
// ============================================================

import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  /** Constrain to max-width container */
  contained?: boolean;
}

/**
 * Wrap every page's content with this for consistent animated transitions
 * and optional max-width containment.
 */
export function PageWrapper({
  children,
  className,
  contained = true,
}: PageWrapperProps) {
  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={cn(
        'flex-1 w-full',
        contained && 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8',
        className,
      )}
    >
      {children}
    </motion.main>
  );
}

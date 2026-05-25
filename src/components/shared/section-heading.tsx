'use client';

// ============================================================
// VeeVid Hub — Section Heading (shared)
// ============================================================

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Consistent animated section heading with optional subtitle.
 */
export function SectionHeading({
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn(
        'mb-8',
        align === 'center' && 'text-center',
        className,
      )}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-gray-400 text-sm sm:text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

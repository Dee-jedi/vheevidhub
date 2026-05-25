'use client';

// ============================================================
// VeeVid Hub — Card Component
// ============================================================

import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { hoverLift } from '@/lib/animations';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  variant?: 'default' | 'elevated' | 'outline';
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const variantStyles = {
  default: 'bg-white/5 border border-white/10 backdrop-blur-sm',
  elevated: 'bg-white/[0.07] border border-white/10 backdrop-blur-md shadow-xl shadow-black/20',
  outline: 'border border-white/10',
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      hoverable = false,
      padding = 'md',
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        {...(hoverable ? hoverLift : {})}
        className={cn(
          'rounded-2xl transition-colors duration-200',
          variantStyles[variant],
          paddingStyles[padding],
          hoverable && 'cursor-pointer',
          className,
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

Card.displayName = 'Card';

// Subcomponents
function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-4', className)} {...props} />;
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('text-lg font-semibold text-white', className)}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-sm text-gray-400 mt-1', className)} {...props} />
  );
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('', className)} {...props} />;
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mt-4 flex items-center gap-3', className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
export type { CardProps };

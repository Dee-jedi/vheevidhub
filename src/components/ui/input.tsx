'use client';

// ============================================================
// VeeVid Hub — Input Component
// ============================================================

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-300"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full h-10 px-4 rounded-xl text-sm text-white',
              'bg-white/5 border border-white/10 backdrop-blur-sm',
              'placeholder:text-gray-500',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50',
              'hover:border-white/20',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              !!leftIcon && 'pl-10',
              !!rightIcon && 'pr-10',
              !!error && 'border-red-500/50 focus:ring-red-500/50',
              className,
            )}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              {rightIcon}
            </span>
          )}
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
        {hint && !error && <p className="text-xs text-gray-500">{hint}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
export type { InputProps };

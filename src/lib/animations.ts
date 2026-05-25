// ============================================================
// VeeVid Hub — Framer Motion Animation Presets
// ============================================================

import type { Variants, Transition } from 'framer-motion';
import { ANIMATION } from '@/constants';

// ---------- Transitions ----------

export const easeOut: Transition = {
  type: 'tween',
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: ANIMATION.normal,
};

export const spring: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

export const springBouncy: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 25,
};

// ---------- Variant Presets ----------

/** Fade in */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: easeOut },
  exit: { opacity: 0, transition: { ...easeOut, duration: ANIMATION.fast } },
};

/** Fade + slide up */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: easeOut },
  exit: { opacity: 0, y: -10, transition: { ...easeOut, duration: ANIMATION.fast } },
};

/** Fade + slide down */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: easeOut },
  exit: { opacity: 0, y: 10, transition: { ...easeOut, duration: ANIMATION.fast } },
};

/** Fade + slide from left */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: easeOut },
  exit: { opacity: 0, x: 20, transition: { ...easeOut, duration: ANIMATION.fast } },
};

/** Fade + slide from right */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: easeOut },
  exit: { opacity: 0, x: -20, transition: { ...easeOut, duration: ANIMATION.fast } },
};

/** Scale in (pop) */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: spring },
  exit: { opacity: 0, scale: 0.95, transition: { ...easeOut, duration: ANIMATION.fast } },
};

/** Stagger children — wrap parent with this, children use any of the above */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Stagger children (faster) */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

/** Page transition */
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION.page, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: ANIMATION.fast },
  },
};

// ---------- Hover / Tap helpers ----------

export const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: spring,
};

export const hoverLift = {
  whileHover: { y: -2, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' },
  whileTap: { y: 0 },
  transition: spring,
};

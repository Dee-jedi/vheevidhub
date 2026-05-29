// ============================================================
// VeeVid Hub — App-wide Constants
// ============================================================

/** Application metadata */
export const APP_NAME = 'Vheevid Hub';
export const APP_DESCRIPTION = 'Vheevid Hub is a premier end-to-end digital agency in Nigeria, dedicated to helping businesses in Lagos, Abuja, Kano, and globally grow through exceptional design and technology. Our core services include UI/UX Product Design, scalable Web Development, Brand Identity Creation, and CRM Automation.';

/** API */
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001/api';
export const API_TIMEOUT = 15_000; // 15 seconds

/** Pagination defaults */
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

/** Auth */
export const AUTH_TOKEN_KEY = 'veevid_auth_token';
export const AUTH_REFRESH_KEY = 'veevid_refresh_token';
export const SESSION_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

/** Theme */
export const THEME_STORAGE_KEY = 'veevid_theme';

/** Toast */
export const TOAST_DEFAULT_DURATION = 5_000; // 5 seconds
export const TOAST_MAX_VISIBLE = 5;

/** Breakpoints (match Tailwind defaults) */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/** Animation durations (seconds) — use with Framer Motion */
export const ANIMATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  page: 0.4,
} as const;

/** Route paths */
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
} as const;

/** Navigation items */
export const NAV_ITEMS = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'Dashboard', href: ROUTES.DASHBOARD },
] as const;

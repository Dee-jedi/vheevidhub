// ============================================================
// VeeVid Hub — Global TypeScript Types
// ============================================================

// ---------- Common / Utility ----------

/** Standard API response envelope */
export interface ApiResponse<T = unknown> {
  data: T;
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

/** Pagination metadata returned from list endpoints */
export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  perPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

/** Paginated list response */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: PaginationMeta;
}

// ---------- User ----------

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export type UserRole = 'admin' | 'editor' | 'viewer';

// ---------- Auth ----------

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
  confirmPassword: string;
}

// ---------- Theme ----------

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeState {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
}

// ---------- Toast / Notification ----------

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  title: string;
  description?: string;
  variant: ToastVariant;
  duration?: number;
}

// ---------- Navigation ----------

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
  badge?: string | number;
}

// ---------- Component Props ----------

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

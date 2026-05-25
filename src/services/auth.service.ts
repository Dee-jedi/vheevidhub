// ============================================================
// VeeVid Hub — Auth Service
// ============================================================

import { apiClient } from '@/lib/api-client';
import { AUTH_TOKEN_KEY, AUTH_REFRESH_KEY } from '@/constants';
import type { User, LoginCredentials, RegisterCredentials } from '@/types';

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse {
  user: User;
  tokens: AuthTokens;
}

/**
 * Authentication service — handles login, register, logout, token management.
 */
export const authService = {
  /**
   * Login with email and password.
   */
  async login(credentials: LoginCredentials) {
    const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
    if (response.success && response.data) {
      this.setTokens(response.data.tokens);
    }
    return response;
  },

  /**
   * Register a new account.
   */
  async register(credentials: RegisterCredentials) {
    const response = await apiClient.post<LoginResponse>('/auth/register', credentials);
    if (response.success && response.data) {
      this.setTokens(response.data.tokens);
    }
    return response;
  },

  /**
   * Get the current authenticated user.
   */
  async getMe() {
    return apiClient.get<User>('/auth/me');
  },

  /**
   * Refresh the access token.
   */
  async refreshToken() {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) return null;

    const response = await apiClient.post<AuthTokens>('/auth/refresh', {
      refreshToken,
    });

    if (response.success && response.data) {
      this.setTokens(response.data);
    }

    return response;
  },

  /**
   * Logout — clear tokens.
   */
  logout() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_REFRESH_KEY);
  },

  /**
   * Store tokens in localStorage.
   */
  setTokens(tokens: AuthTokens) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(AUTH_TOKEN_KEY, tokens.accessToken);
    localStorage.setItem(AUTH_REFRESH_KEY, tokens.refreshToken);
  },

  /**
   * Get the stored refresh token.
   */
  getRefreshToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(AUTH_REFRESH_KEY);
  },
};

'use client';

// ============================================================
// VeeVid Hub — Auth Context
// ============================================================

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { AuthState, LoginCredentials, RegisterCredentials, User } from '@/types';
import { authService } from '@/services';

interface AuthContextValue extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>;
  register: (credentials: RegisterCredentials) => Promise<boolean>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

  // Attempt to load the current user on mount
  useEffect(() => {
    let cancelled = false;

    async function loadUser() {
      const response = await authService.getMe();
      if (!cancelled) {
        if (response.success && response.data) {
          setState({
            user: response.data,
            token: null, // token stays in localStorage
            isAuthenticated: true,
            isLoading: false,
          });
        } else {
          setState((prev) => ({ ...prev, isLoading: false }));
        }
      }
    }

    loadUser();
    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    const response = await authService.login(credentials);

    if (response.success && response.data) {
      setState({
        user: response.data.user,
        token: response.data.tokens.accessToken,
        isAuthenticated: true,
        isLoading: false,
      });
      return true;
    }

    setState((prev) => ({ ...prev, isLoading: false }));
    return false;
  }, []);

  const register = useCallback(async (credentials: RegisterCredentials) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    const response = await authService.register(credentials);

    if (response.success && response.data) {
      setState({
        user: response.data.user,
        token: response.data.tokens.accessToken,
        isAuthenticated: true,
        isLoading: false,
      });
      return true;
    }

    setState((prev) => ({ ...prev, isLoading: false }));
    return false;
  }, []);

  const logout = useCallback(() => {
    authService.logout();
    setState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });
  }, []);

  const updateUser = useCallback((user: User) => {
    setState((prev) => ({ ...prev, user }));
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ ...state, login, register, logout, updateUser }),
    [state, login, register, logout, updateUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider>');
  return ctx;
}

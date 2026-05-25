// ============================================================
// VeeVid Hub — API Client
// ============================================================

import { API_BASE_URL, API_TIMEOUT, AUTH_TOKEN_KEY } from '@/constants';
import type { ApiResponse } from '@/types';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestOptions extends Omit<RequestInit, 'method' | 'body'> {
  params?: Record<string, string | number | boolean | undefined>;
  timeout?: number;
}

/**
 * Build URL with query parameters.
 */
function buildUrl(
  path: string,
  params?: Record<string, string | number | boolean | undefined>,
): string {
  const url = new URL(path, API_BASE_URL);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    });
  }
  return url.toString();
}

/**
 * Get the stored auth token (client-side only).
 */
function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

/**
 * Core fetch wrapper with auth, timeout, and typed responses.
 */
async function request<T>(
  method: HttpMethod,
  path: string,
  body?: unknown,
  options: RequestOptions = {},
): Promise<ApiResponse<T>> {
  const { params, timeout = API_TIMEOUT, ...fetchOptions } = options;

  const url = buildUrl(path, params);
  const token = getAuthToken();

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(fetchOptions.headers as Record<string, string> | undefined),
  };

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
      ...fetchOptions,
    });

    const json = await response.json();

    if (!response.ok) {
      return {
        data: null as unknown as T,
        success: false,
        message: json.message ?? `Request failed with status ${response.status}`,
        errors: json.errors,
      };
    }

    return {
      data: json.data ?? json,
      success: true,
      message: json.message,
    };
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return {
        data: null as unknown as T,
        success: false,
        message: 'Request timed out',
      };
    }
    return {
      data: null as unknown as T,
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * Typed API client.
 */
export const apiClient = {
  get: <T>(path: string, options?: RequestOptions) =>
    request<T>('GET', path, undefined, options),

  post: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>('POST', path, body, options),

  put: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>('PUT', path, body, options),

  patch: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>('PATCH', path, body, options),

  delete: <T>(path: string, options?: RequestOptions) =>
    request<T>('DELETE', path, undefined, options),
};

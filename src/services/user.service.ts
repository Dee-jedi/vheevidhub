// ============================================================
// VeeVid Hub — User Service
// ============================================================

import { apiClient } from '@/lib/api-client';
import type { User, PaginatedResponse } from '@/types';

/**
 * User service — CRUD operations for user management.
 */
export const userService = {
  /**
   * Get a paginated list of users.
   */
  async getUsers(page = 1, perPage = 20) {
    return apiClient.get<PaginatedResponse<User>>('/users', {
      params: { page, perPage },
    });
  },

  /**
   * Get a single user by ID.
   */
  async getUserById(id: string) {
    return apiClient.get<User>(`/users/${id}`);
  },

  /**
   * Update a user's profile.
   */
  async updateUser(id: string, data: Partial<Pick<User, 'name' | 'avatarUrl'>>) {
    return apiClient.patch<User>(`/users/${id}`, data);
  },

  /**
   * Delete a user.
   */
  async deleteUser(id: string) {
    return apiClient.delete<void>(`/users/${id}`);
  },
};

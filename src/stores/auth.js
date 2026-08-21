import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { readStorage, removeStorage, writeStorage } from '@/services/storageService'

const AUTH_STORAGE_KEY = 'session'
const DEMO_USER = {
  email: 'admin@cinevue.dev',
  password: 'vue123',
  name: 'Alex Morgan',
  role: 'Administrador',
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref(readStorage(AUTH_STORAGE_KEY, null))
  const isLoading = ref(false)
  const error = ref('')

  const isAuthenticated = computed(() => Boolean(user.value))

  async function login(credentials) {
    isLoading.value = true
    error.value = ''

    await new Promise((resolve) => setTimeout(resolve, 450))

    const hasValidCredentials =
      credentials.email.trim().toLowerCase() === DEMO_USER.email &&
      credentials.password === DEMO_USER.password

    if (!hasValidCredentials) {
      error.value = 'E-mail ou senha inválidos. Use as credenciais de demonstração.'
      isLoading.value = false
      return false
    }

    user.value = {
      email: DEMO_USER.email,
      name: DEMO_USER.name,
      role: DEMO_USER.role,
    }
    writeStorage(AUTH_STORAGE_KEY, user.value)
    isLoading.value = false
    return true
  }

  function logout() {
    user.value = null
    error.value = ''
    removeStorage(AUTH_STORAGE_KEY)
  }

  function clearError() {
    error.value = ''
  }

  return {
    user,
    isLoading,
    error,
    isAuthenticated,
    login,
    logout,
    clearError,
  }
})

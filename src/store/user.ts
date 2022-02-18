import type { Router } from 'vue-router'
import * as authService from '@/services/auth.service'

interface UserState {
  isUserChecked: boolean
  user: null | string
  token: null | string
}

interface Credentials {
  username: string
  password: string
}

export const userLocalStorage = useLocalStorage<{ token: null | string }>('user-store', {
  token: null,
})

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    isUserChecked: false,
    user: null,
    token: null,
  }),

  actions: {
    async checkUser() {
      if (userLocalStorage.value.token) {
        this.token = userLocalStorage.value.token
        this.user = 'Michael'
      }

      this.isUserChecked = true
    },

    setUser({ token, user }: { token: string | null; user: string | null }) {
      this.token = token
      this.user = user

      userLocalStorage.value.token = token
    },

    async register({ username, password }: Credentials) {
      const { data } = await authService.register({ username, password })
      if (data.success) {
        this.setUser(data.data)

        return true
      }

      return false
    },

    async login({ username, password }: Credentials) {
      const { data } = await authService.login({ username, password })
      if (data.success) {
        this.setUser(data.data)

        return true
      }

      return false
    },

    async logout({ router }: { router: Router }) {
      await router.push('/')

      this.setUser({
        token: null,
        user: null,
      })
    },
  },
})

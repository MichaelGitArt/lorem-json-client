import * as authService from '@/services/auth.service'

interface UserState {
  user: null | string
  token: null | string
}

export const userStore = useLocalStorage('user-store', reactive<UserState>({
  user: null,
  token: null,
}))

interface Credentials {
  username: string
  password: string
}

export const register = async({ username, password }: Credentials) => {
  const { data } = await authService.register({ username, password })
  if (data.success) {
    userStore.value.token = data.data.token
    userStore.value.user = data.data.user

    return true
  }

  return false
}

export const login = async({ username, password }: Credentials) => {
  const { data } = await authService.login({ username, password })
  if (data.success) {
    userStore.value.token = data.data.token
    userStore.value.user = data.data.user

    return true
  }

  return false
}

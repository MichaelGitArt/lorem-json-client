<script setup lang="ts">
import { useUserStore } from '@/store/user'

const loading = ref(false)
const username = ref('michael')
const password = ref('qqqq')

const router = useRouter()
const userStore = useUserStore()

const onRegister = async() => {
  loading.value = true
  const success = await userStore.register({
    password: password.value,
    username: username.value,
  })
  loading.value = false

  if (success)
    router.push('/')
}
const onLogin = async() => {
  loading.value = true
  const success = await userStore.login({
    password: password.value,
    username: username.value,
  })
  loading.value = false

  if (success)
    router.push('/')
}

</script>

<template>
  <div>
    <h1 class="text-4xl font-semibold">
      Auth
    </h1>

    <div class="grid gap-3 max-w-100">
      <QInput
        v-model="username"
        standout="bg-teal text-white"
        label="Username"
      />
      <QInput
        v-model="password"
        standout="bg-teal text-white"
        label="Password"
      />

      <div class="grid grid-cols-2 gap-3">
        <QBtn :loading="loading" @click="onLogin">
          Sign in
        </QBtn>
        <QBtn :loading="loading" @click="onRegister">
          Sign up
        </QBtn>
      </div>
    </div>
  </div>
</template>

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
  <div class="flex flex-col items-center py-6">
    <h1 class="text-4xl font-semibold">
      Auth
    </h1>

    <QForm class="grid gap-4 max-w-100 w-full">
      <QInput
        v-model="username"
        standout="bg-teal text-white"
        name="username"
        autocomplete="username"
        label="Username"
      />
      <QInput
        v-model="password"
        standout="bg-teal text-white"
        name="current-password"
        autocomplete="current-password"
        type="password"
        label="Password"
      />

      <div class="grid grid-cols-2 gap-3 pt-4">
        <QBtn
          :loading="loading"
          type="submit"
          @click.prevent="onLogin"
        >
          Sign in
        </QBtn>
        <QBtn
          :loading="loading"
          type="submit"
          @click.prevent="onRegister"
        >
          Sign up
        </QBtn>
      </div>
    </QForm>
  </div>
</template>

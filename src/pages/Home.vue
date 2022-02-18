<script setup lang="ts" >
import { ROUTE_NAME } from '@/router'
import { useUserStore } from '@/store/user'
const userStore = useUserStore()

const { user } = storeToRefs(userStore)
</script>

<template>
  <div>
    <div class="grid grid-cols-2">
      <div class="flex flex-col justify-center">
        <h1 class="text-4xl font-bold">
          Hey!
        </h1>

        <div class="flex gap-4">
          <QBtn v-if="user" :to="{name: ROUTE_NAME.pieceList}">
            Pieces
          </QBtn>

          <QBtn v-else :to="{name: ROUTE_NAME.auth}">
            Login
          </QBtn>
        </div>
      </div>

      <div class="py-3">
        <img
          class="w-full h-90 object-cover"
          src="/json-code.webp"
          alt="json"
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

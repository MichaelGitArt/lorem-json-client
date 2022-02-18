<script setup lang="ts" >
import { ROUTE_NAME } from '@/router'
import { useUserStore } from '@/store/user'
const userStore = useUserStore()

const { user } = storeToRefs(userStore)
</script>

<template>
  <div class="grid grid-cols-[2fr,3fr] py-8">
    <div class="flex flex-col justify-center">
      <h1 class="text-4xl font-semibold leading-12">
        Let's Make Your First Lorem<span class="text-blue-500 font-bold">JSON</span>
      </h1>

      <div class="flex gap-4">
        <QBtn
          v-if="user"
          size="lg"
          :to="{name: ROUTE_NAME.pieceList}"
        >
          <div class="capitalize">
            See Pieces List
          </div>
        </QBtn>

        <QBtn
          v-else
          size="lg"
          :to="{name: ROUTE_NAME.auth}"
        >
          <div class="capitalize">
            Log in
          </div>
        </QBtn>
      </div>
    </div>

    <div class="py-3">
      <img
        class="w-full h-90 object-cover rounded-xl"
        src="/json-code.webp"
        alt="json"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

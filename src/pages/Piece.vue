<script setup lang="ts" >
import type { RouteLocationRaw } from 'vue-router'
import PageTitle from '@/components/Layout/PageTitle.vue'
import { ROUTE_NAME } from '@/router'
const route = useRoute()

const createPieceRoute = computed<RouteLocationRaw>(() => ({
  name: ROUTE_NAME.pieceEdit,
  params: {
    id: 'create',
  },
}))

const pieceListRoute = computed<RouteLocationRaw>(() => ({
  name: ROUTE_NAME.pieceList,
  params: {
    id: 'create',
  },
}))
</script>

<template>
  <div class="py-6">
    <PageTitle>
      Picese

      <template #actions>
        <QBtn
          v-if="route.name !== ROUTE_NAME.pieceEdit"
          color="blue"
          :to="createPieceRoute"
        >
          Create Piece
        </QBtn>

        <QBtn
          v-else
          outline
          color="blue"
          :to="pieceListRoute"
        >
          Pieces List
        </QBtn>
      </template>
    </PageTitle>

    <RouterView :key="route.path" />
  </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'
import { getPieces } from './services/pieces.service'

const {
  state: places,
  isLoading,
} = useAsyncState(getPieces().then(({ data }) => data), null)
</script>

<template>
  <QLayout>
    <div class="q-ml-sm">
      godsfj
    </div>

    <QLinearProgress v-if="isLoading" indeterminate />

    <QList
      v-else
      bordered
      separator
    >
      <QItem
        v-for="place in places"
        :key="place._id"
        v-ripple
        clickable
      >
        <QItemSection>{{ place.name }}</QItemSection>
      </QItem>
    </QList>

    {{ places }}

    <QBtn label="Do something" />

    <QIcon name="alarm" />
  </QLayout>
</template>

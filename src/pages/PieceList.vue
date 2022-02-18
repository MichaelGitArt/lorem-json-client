<script setup lang="ts">
import { usePieceStore } from '@/store/piece'
import PageBlock from '@/components/Layout/PageBlock.vue'
import PageTitle from '@/components/Layout/PageTitle.vue'
import PieceItem from '@/components/Piece/PieceItem.vue'

const pieceStore = usePieceStore()

const {
  state: pieces,
  isLoading,
} = useAsyncState(pieceStore.getPieces(), null)
</script>

<template>
  <div class="grid gap-5">
    <PageBlock>
      <PageTitle>
        List
      </PageTitle>

      <QLinearProgress v-if="isLoading" indeterminate />

      <QList
        v-else
        bordered
        separator
      >
        <PieceItem
          v-for="piece in pieces"
          :key="piece._id"
          :piece="piece"
        />
      </QList>
    </PageBlock>
  </div>
</template>

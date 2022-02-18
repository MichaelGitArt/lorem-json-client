<script setup lang="ts" >
import type { RouteLocationRaw } from 'vue-router'
import { genPieceApiLink } from '@/utils/piece'
import type { IPiece } from '@/types/Piece'

import { ROUTE_NAME } from '@/router'

const props = defineProps<{
  piece: IPiece
}>()

const pieceRoute = computed<RouteLocationRaw>(() => ({
  name: ROUTE_NAME.pieceEdit,
  params: {
    id: props.piece._id,
  },
}))

const apiLink = computed(() => genPieceApiLink(props.piece._id))

const { copy, copied } = useClipboard()
const onCopyApiLink = () => {
  copy(apiLink.value)
}
</script>

<template>
  <RouterLink
    v-slot="{navigate}"
    :to="pieceRoute"
    custom
  >
    <QItem clickable @click="navigate">
      <QItemSection>
        <QItemLabel class="flex flex-row w-full justify-between items-center">
          <div>
            {{ piece.name }}
          </div>

          <div class="flex ml-4">
            <QBtn @click.stop="onCopyApiLink">
              Copy Api Link

              <QTooltip v-if="copied" :model-value="copied">
                Copied!
              </QTooltip>
            </QBtn>
          </div>
        </QItemLabel>
      </QItemSection>
    </QItem>
  </RouterLink>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import { Vue3JsonEditor } from 'vue3-json-editor'
import { usePieceStore } from '@/store/piece'
import PageBlock from '@/components/Layout/PageBlock.vue'
import PageTitle from '@/components/Layout/PageTitle.vue'

import { genPieceApiLink } from '@/utils/piece'
import { ROUTE_NAME } from '@/router'

const pieceStore = usePieceStore()
const route = useRoute()
const router = useRouter()

const pieceId = computed<string>(() => Array.isArray(route.params.id) ? route.params.id[0] : route.params.id)
const isCreating = computed(() => route.params.id === 'create')
const loading = ref(false)

const {
  state: piece,
  isLoading: isFetchLoading,
} = useAsyncState(pieceStore.getPiece(pieceId), null)

const jsonValue = ref({})

watchOnce(piece, () => {
  jsonValue.value = JSON.parse(piece.value!.json)
})

const apiLink = genPieceApiLink(computed(() => piece.value ? piece.value._id : null))

const onChangeJson = (value: string) => {
  if (piece.value)
    jsonValue.value = value
}

const onSave = async() => {
  if (!piece.value)
    return

  loading.value = true

  if (isCreating.value) {
    const newPiece = await pieceStore.createPiece(piece.value)
    if (newPiece) {
      router.push({
        name: ROUTE_NAME.pieceEdit,
        params: {
          id: newPiece._id,
        },
      })
      return
    }
  }
  else {
    await pieceStore.updatePiece({
      ...piece.value,
      json: jsonValue.value,
      id: pieceId.value,
    })
  }

  loading.value = false
}

const onDelete = async() => {
  await pieceStore.deletePiece(piece.value!._id)
  await router.push({
    name: ROUTE_NAME.pieceList,
  })
}

const { copy, copied } = useClipboard()
const onCopyApiLink = () => {
  copy(apiLink.value)
}

const onViewApi = () => {
  window.open(apiLink.value, '_blank').focus()
}
</script>

<template>
  <div class="grid gap-5">
    <QLinearProgress v-if="isFetchLoading" indeterminate />

    <template v-else-if="piece">
      <PageBlock v-if="!isCreating">
        <PageTitle>
          Piece: {{ piece?.name }}
        </PageTitle>

        <div class="flex gap-4">
          <QBtn
            color="blue"
            outline
            @click="onCopyApiLink"
          >
            Copy Api Link

            <QTooltip v-if="copied" :model-value="copied">
              Copied!
            </QTooltip>
          </QBtn>

          <QBtn
            color="blue"
            outline
            @click="onViewApi"
          >
            View Api
          </QBtn>
        </div>
      </PageBlock>

      <PageBlock>
        <PageTitle>
          {{ isCreating ? 'Create new' : 'Update Form' }}
        </PageTitle>

        <div class="grid gap-4">
          <QInput
            v-model="piece.name"
            outlined
            label="Name"
          />

          <div>
            <div class="font-semibold text-sm mb-1">
              JSON:
            </div>

            <Vue3JsonEditor
              :model-value="jsonValue"
              :show-btns="false"
              :modes="['code', 'tree', 'text']"
              :mode="'code'"
              :expanded-on-start="true"
              @json-change="onChangeJson"
            />
          </div>

          <QBtn
            color="green"
            :loading="loading"
            @click="onSave"
          >
            {{ isCreating ? 'Create' : 'Update' }}
          </QBtn>
        </div>
      </PageBlock>

      <PageBlock v-if="!isCreating">
        <PageTitle>
          Actions
        </PageTitle>

        <QBtn
          color="red"
          outline
          @click="onDelete"
        >
          Delete
        </QBtn>
      </PageBlock>
    </template>
  </div>
</template>

<style>
.jsoneditor-vue .jsoneditor-outer {
  height: 300px;
}
</style>

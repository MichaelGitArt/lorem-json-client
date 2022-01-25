<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'
import { createPiece, getPieces } from '@/store/piece'

const {
  state: places,
  isLoading,
} = useAsyncState(getPieces(), null)

const creatingForm = reactive({
  name: 'Test',
  json: '{"value": 10}',
})

const onCreate = async() => {
  createPiece(creatingForm)
}

// const current = ref<any>(null)
// const onGet = async(id: any) => {
//   // const piece = await getPiece(id).then(({ data }) => data.data)

//   // current.value = piece
// }

// const onDelete = async(id: any) => {
//   // const piece = await getPiece(id).then(({ data }) => data.data)

//   // current.value = piece
// }

const genLink = (id: string) => `${import.meta.env.VITE_SERVER_URL}/api/piece/${id}`

</script>

<template>
  <div class="grid gap-5">
    <div class="py-4 px-3 rounded-lg border-solid border-gray-300 border-1">
      <div class="text-2xl mb-2">
        Create new
      </div>

      <QInput
        v-model="creatingForm.name"
        standout="bg-teal text-white"
        label="Name"
      />
      <QInput
        v-model="creatingForm.json"
        standout="bg-teal text-white"
        label="JSON"
      />

      <QBtn @click="onCreate">
        Create
      </QBtn>
    </div>

    <div class="py-4 px-3 rounded-lg border-solid border-gray-300 border-1">
      <div class="text-2xl mb-2">
        List
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
        >
          <QItemSection>
            <QItemLabel>{{ place.name }}</QItemLabel>
            <QItemLabel caption>
              <a target="_blank" :href="genLink(place._id)">
                {{ genLink(place._id) }}
              </a>
            </QItemLabel>
          </QItemSection>
          <!-- <QItemSection>
            <div class="grid grid-cols-2 gap-3">
              <QBtn
                @click="onGet(place._id)"
              >
                Fetch
              </QBtn>
            </div>
          </QItemSection> -->
        </QItem>
      </QList>
    </div>

    <!-- <QCard v-if="current" class="p-6">
      <pre class="max-h-24 border-gray-300 border-1 border-solid overflow-auto">{{ current }}</pre>

      <QBtn
        color="negative"
        @click="onDelete(current._id)"
      >
        Delete
        <QIcon name="delete" />
      </QBtn>
    </QCard> -->
  </div>
</template>

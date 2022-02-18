<script setup lang="ts" >
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user'
import { ROUTE_NAME } from '@/router'

const userStore = useUserStore()
const router = useRouter()

const { user } = storeToRefs(userStore)

const onLogout = () => {
  userStore.logout({ router })
}
</script>

<template>
  <QHeader elevated>
    <QToolbar class="bg-primary container mx-auto text-white">
      <RouterLink
        v-slot="{navigate}"
        to="/"
        custom
      >
        <QToolbarTitle class="cursor-pointer" @click="navigate">
          Lorem<span class="font-bold">JSON</span>
        </QToolbarTitle>
      </RouterLink>

      <QBtn
        v-if="user"
        outline
        round
        dense
        icon="person"
      >
        <QMenu
          :offset="[0, 5]"
        >
          <QList style="min-width: 120px">
            <QItem
              v-close-popup
              clickable
              @click="onLogout"
            >
              <QItemSection class="flex flex-row items-center">
                Log Out
                <QIcon
                  name="logout"
                  class="ml-2"
                  size="1.2em"
                  color="red"
                />
              </QItemSection>
            </QItem>
          </QList>
        </QMenu>
      </QBtn>

      <QBtn
        v-else
        :to="{name: ROUTE_NAME.auth}"
        outline
      >
        Log In
      </QBtn>
    </QToolbar>
  </QHeader>
</template>

<style lang="scss" scoped></style>

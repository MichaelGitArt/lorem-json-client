<script setup lang="ts" >
import TheHeader from './components/Interface/TheHeader.vue'
import TheLayout from './components/Interface/TheLayout.vue'
</script>

<template>
  <TheLayout>
    <template #header>
      <TheHeader />
    </template>

    <RouterView />
  </TheLayout>
</template>

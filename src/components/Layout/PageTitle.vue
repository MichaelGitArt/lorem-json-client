<template>
  <div class="text-2xl mb-4 font-semibold flex justify-between">
    <div>
      <slot />
    </div>

    <div v-if="$slots.actions" class="flex ml-4">
      <slot name="actions" />
    </div>
  </div>
</template>

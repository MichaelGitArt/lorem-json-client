<template>
  <QLayout
    view="hHh lpr fFf"
  >
    <slot name="header" />

    <QPageContainer class="min-h-[inherit] container px-5 mx-auto border-light-700 border-0 border-l-1 border-r-1 border-solid">
      <slot />
    </QPageContainer>

    <slot name="footer" />
  </QLayout>
</template>

<template>
  <QFooter elevated>
    <div class="container mx-auto px-5 py-3 flex justify-between">
      MIT Licensed | Copyright © {{ new Date().getFullYear() === 2022 ? 2022 : `2022 - ${new Date().getFullYear()}` }}

      <a href="https://github.com/MichaelGitArt" class="ml-4 text-white">
        Michael Gitart
      </a>
    </div>
  </QFooter>
</template>

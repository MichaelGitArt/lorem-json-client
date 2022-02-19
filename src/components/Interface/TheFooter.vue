<template>
  <QFooter elevated>
    <div class="container mx-auto px-5 py-3 flex justify-between text-blue-300 text-sm">
      MIT Licensed | Copyright © {{ new Date().getFullYear() === 2022 ? 2022 : `2022 - ${new Date().getFullYear()}` }}

      <a href="https://github.com/MichaelGitArt" class="ml-4 text-blue-200">
        Michael Gitart
      </a>
    </div>
  </QFooter>
</template>

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    Vue({
    }),
    WindiCSS({
      config: {
        preflight: false,
      },
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        'vue-router',
      ],
      dts: './src/auto-imports.d.ts',
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

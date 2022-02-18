import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    Vue({}),
    WindiCSS({
      configFiles: [
        path.resolve('./windi.config.ts'),
      ],
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        'vue-router',
        'pinia',
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

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Layouts({
      layoutsDirs: 'src/layout',
      defaultLayout: 'default'
    }),
    Components(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.js'
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 8787
  }
})

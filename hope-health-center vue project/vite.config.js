import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: '/maths/', // Iyi niyo ntambwe y'ingenzi yerekana aho umushinga uherereye
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'vue-files/src')
    }
  },
  root: 'vue-files',
  server: {
    port: 3000
  }
})

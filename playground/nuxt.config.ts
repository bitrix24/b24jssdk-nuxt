import { readFileSync } from 'node:fs'

export default defineNuxtConfig({
  modules: [
    '../src/module'
  ],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 3001,
    loadingTemplate: () => {
      return readFileSync('./playground/app/template/devServer-loading.html', 'utf-8')
    }
  },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-04-12',
  B24JsSdkNuxt: {}
})

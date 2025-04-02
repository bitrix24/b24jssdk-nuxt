import { readFileSync } from 'node:fs'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@bitrix24/b24ui-nuxt',
    '@nuxt/eslint'
  ],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 3001,
    loadingTemplate: () => {
      return readFileSync('./playground/template/devServer-loading.html', 'utf-8')
    }
  },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-04-12',
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  B24JsSdkNuxt: {}
})

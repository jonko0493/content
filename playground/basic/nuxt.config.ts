import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'pathe'
import armTMLanguage from 'languages/arm.tmLanguage.json'

export default defineNuxtConfig({
  extends: ['../shared'],
  content: {
    sources: {
      'translation-fa': {
        prefix: '/fa',
        driver: 'fs',
        base: resolve(__dirname, 'content-fa')
      }
    },
    highlight: {
      preload: [
        'c',
        'cpp',
        'csharp',
        'python',
        {
          id: 'arm',
          scopeName: 'source.assembly.arm',
          path: 'arm.tmLanguage.json',
          aliases: [],
          grammar: armTMLanguage
        }
      ]
    }
  }
})

import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://ayu-theme.github.io',
  build: {
    assets: '_assets',
    inlineStylesheets: 'always',
  },
  scopedStyleStrategy: 'class',
})

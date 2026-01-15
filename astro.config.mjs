import { defineConfig } from 'astro/config'
import partytown from '@astrojs/partytown'

export default defineConfig({
  site: 'https://ayu-theme.github.io',
  build: {
    assets: '_assets',
    inlineStylesheets: 'always',
  },
  scopedStyleStrategy: 'class',
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
})

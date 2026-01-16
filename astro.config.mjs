import { defineConfig } from 'astro/config'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://ayutheme.com',
  build: {
    assets: '_assets',
    inlineStylesheets: 'always',
  },
  scopedStyleStrategy: 'class',
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
})

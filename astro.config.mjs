import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import million from 'million/compiler'
import AutoImport from 'unplugin-auto-import/astro'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  prefetch: {
    prefetchAll: true,
  },
  vite: {
    plugins: [
      million.vite({
        mode: 'react',
        server: true,
        auto: {
          threshold: 0.05,
          skip: ['useBadHook', /badVariable/g],
        },
      }),
      vueDevTools(),
      tailwindcss(),
    ],
  },
  integrations: [
    react(),
    vue({
      jsx: true,
      devtools: true,
      reactivityTransform: true,
    }),
    AutoImport({
      imports: ['vue', 'vue/macros', 'react'],
      dirs: ['src/utils/*.ts'],
      dts: './src/auto-imports.d.ts',
    }),
    sitemap(),
    partytown(),
    mdx(),
  ],
})

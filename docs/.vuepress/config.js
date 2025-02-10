import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import meta from './config/meta'
import theme from './config/theme'
import tailwindcss from '@tailwindcss/vite'

export default defineUserConfig({
  ...meta,
  theme,
  bundler: viteBundler({
    viteOptions: {
      css: ['./styles/main.css'],
      plugins: [
        tailwindcss(),
      ]
    }
  }),
})

import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import meta from './config/meta'
import theme from './config/theme'

export default defineUserConfig({
  base: '/IT4C.dev/',
  ...meta,
  theme,
  bundler: viteBundler({}),
})

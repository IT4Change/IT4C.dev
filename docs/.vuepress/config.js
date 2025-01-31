import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import meta from './config/meta'
import theme from './config/theme'

export default defineUserConfig({
  ...meta,
  theme,
  bundler: viteBundler({}),
  pageInfo: false,
})

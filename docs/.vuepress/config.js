import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import meta from './config/meta'
import theme from './config/theme'

export default defineUserConfig({
  lang: 'de-DE',
  ...meta,
  theme,
  bundler: viteBundler({}),
})

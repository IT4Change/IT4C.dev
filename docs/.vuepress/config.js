import { defineUserConfig } from 'vuepress'
import meta from './config/meta'
import theme from './config/theme'

export default defineUserConfig({
  ...meta,
  theme,
})

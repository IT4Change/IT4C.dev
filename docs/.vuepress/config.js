import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import meta from './config/meta'
import theme from './config/theme'
import { getDirname, path } from "vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  ...meta,
  theme,
  bundler: viteBundler({}),
  alias: {
    "@Section": path.resolve(__dirname, "components/Section.vue"),
  },
})

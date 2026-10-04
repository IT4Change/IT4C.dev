import tailwindcss from '@tailwindcss/vite'
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import Imagemin from 'vuepress-plugin-imagemin'

import meta from './config/meta'
import theme from './config/theme'

export default defineUserConfig({
  lang: 'de-DE',
  ...meta,
  theme,
  bundler: viteBundler({
    viteOptions: {
      plugins: [tailwindcss()],
      // @vuepress/plugin-slimsearch (rc.137) does not mark @vuepress/search-helper
      // as ssr.noExternal, so Node tries to import its .css files during SSR.
      ssr: { noExternal: ['@vuepress/search-helper'] },
    },
  }),
  plugins: [
    Imagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 100,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
})

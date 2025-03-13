import { viteBundler } from '@vuepress/bundler-vite'
import Imagemin from 'vuepress-plugin-imagemin'
import { defineUserConfig } from 'vuepress'
import meta from './config/meta'
import theme from './config/theme'

export default defineUserConfig({
  lang: 'de-DE',
  ...meta,
  theme,
  bundler: viteBundler({}),
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

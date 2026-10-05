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
      server: {
        // mirrors the nginx proxy in production, see README
        proxy: {
          '/ext/crowdfunding.png': {
            target: 'https://ocelot.social',
            changeOrigin: true,
            rewrite: () => '/crowdfunding/current.png',
          },
        },
      },
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

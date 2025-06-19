import { HeadConfig } from 'vuepress'

export default {
  title: 'IT4C',
  description:
    'IT4C.dev stellt das IT Team for Change, seine angewandte Philosophie und Projekte vor.',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no,shrink-to-fit=no' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ] as HeadConfig[],
}

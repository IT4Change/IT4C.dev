const path = require('path')
module.exports = {
  title: 'IT Team for Change',
  description: 'IT4C.dev introduces the IT Team for Change, applied Philosophy and Projects.',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1'}]
  ],
  theme: 'vuepress-theme-book',
  themeConfig: {
    // logo: "/logo.png",
    searchPlaceholder: "Search...",
    docsRepo: "https://github.com/IT4Change/IT4C.dev/",
    docsDir: "docs",
    nav: [
      { text: 'IT4C', link: '/' },
      { text: 'Contact', link: '/contact' },
      {
        text: 'Github',
        link:
          'https://github.com/IT4Change'
      },
    ],
    sidebar: {
      '/': [
        {
          title: '',
          collapsable: false,
          sidebarDepth: 0,
          children: [
              ['/', 'IT4C'],
              ['/history', 'History'],
              ['/contact', 'Contact']
          ]
        },
        {
          title: 'Projects',
          collapsable: false,
          children: [
            ['/projects/gradido', 'Gradido'],
            //['/extras/contributing', 'Contributing ✨'],
            //['/extras/license', 'License 📚']
          ]
        },
        {
          title: 'People',
          collapsable: false,
          children: [
            ['/people/alexander-friedland', 'Alexander Friedland'],
            ['/people/hannes-heine', 'Hannes Heine'],
            ['/people/mathias-lenz', 'Mathias Lenz'],
            ['/people/moriz-wahl', 'Moriz Wahl'],
            ['/people/ulf-gebhardt', 'Ulf Gebhardt'],
            ['/people/wolfgang-huss', 'Wolfgang Huß'],
          ]
        },
      ]
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, '../images')
      }
    }
  },
}  

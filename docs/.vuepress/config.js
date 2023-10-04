import { hopeTheme } from 'vuepress-theme-hope'

export default {
  title: 'IT Team for Change',
  description: 'IT4C.dev introduces the IT Team for Change, applied Philosophy and Projects.',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1'}]
  ],
  theme: hopeTheme({
    // logo: "/logo.png",
    searchPlaceholder: "Search...",
    docsRepo: "https://github.com/IT4Change/IT4C.dev/",
    docsDir: "docs",
    editLink: false,
    lastUpdated: false,
    contributors: false,
    navbar: [
      { text: 'IT4C', link: '/' },
      { text: 'Contact', link: '/contact' },
      {
        text: 'Github',
        link: 'https://github.com/IT4Change'
      },
    ],
    sidebar: [
      {
        text: 'IT4C',
        path: '/',
        collapsible: false,
        children: [
          '/history',
          '/contact'
        ]
      },
      {
        text: 'Projects',
        collapsible: false,
        children: [
          {
            text: 'Gradido Software',
            path: '/projects/gradido'
          },
          // { path: '/extras/contributing', text: 'Contributing ✨' },
          // { path: '/extras/license', text: 'License 📚' },
        ]
      },
      {
        text: 'People',
        collapsible: false,
        children: [
          '/people/alexander-friedland',
          '/people/hannes-heine',
          '/people/mathias-lenz',
          '/people/moriz-wahl',
          '/people/ulf-gebhardt',
          '/people/wolfgang-huss'
        ]
      }
    ],
  }),
}

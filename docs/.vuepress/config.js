import { searchProPlugin } from 'vuepress-plugin-search-pro'
import { hopeTheme } from 'vuepress-theme-hope'

export default {
  title: 'IT Team for Change',
  description: 'IT4C.dev introduces the IT Team for Change, applied Philosophy and Projects.',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1'}]
  ],
  theme: hopeTheme({
    // logo: "/logo.png",
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
          { path: '/people/mathias-lenz', text: 'Mathias Lenz' },
          '/people/moriz-wahl',
          '/people/ulf-gebhardt',
          '/people/wolfgang-huss'
        ]
      }
    ],
  }),
  plugins: [
    searchProPlugin({
      indexContent: true,
      autoSuggestions: true,
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "Category: $content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "Tag: $content",
        },
      ],
    }),
  ],
}

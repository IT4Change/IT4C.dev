import { searchProPlugin } from 'vuepress-plugin-search-pro'
import { hopeTheme } from 'vuepress-theme-hope'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'IT Team for Change',
  description: 'IT4C.dev introduces the IT Team for Change, applied Philosophy and Projects.',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1'}]
  ],
  theme: hopeTheme({
    logo: '/it4c-logo.jpeg',
    docsRepo: 'https://github.com/IT4Change/IT4C.dev',
    docsBranch: 'master',
    docsDir: 'docs',
    editLink: true,
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
        link: '/',
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
            link: '/projects/gradido'
          },
          // { link: '/extras/contributing', text: 'Contributing ✨' },
          // { link: '/extras/license', text: 'License 📚' },
        ]
      },
      {
        text: 'People',
        collapsible: false,
        children: [
          '/people/alexander-friedland',
          '/people/hannes-heine',
          { link: '/people/mathias-lenz', text: 'Mathias Lenz' },
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
})

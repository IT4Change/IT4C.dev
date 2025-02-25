import { hopeTheme } from 'vuepress-theme-hope'

export default hopeTheme({
  logo: '/it4c-logo2-clean-bg_alpha-128x128.png',
  docsRepo: 'https://github.com/IT4Change/IT4C.dev',
  docsBranch: 'master',
  docsDir: 'docs',
  editLink: true,
  lastUpdated: false,
  contributors: false,
  displayFooter: true,
  pageInfo: false,
  footer: 'CC durch IT4C.dev & Autoren - <a href=„/impressum.html“>Impressum</a>',
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
          text: 'DEMOCRACY App',
          link: '/projects/democracy.app'
        },
        {
          text: 'Ocelot-Social',
          link: '/projects/ocelot.social'
        },
        {
          text: 'Gradido Software',
          link: '/projects/gradido'
        },
        {
          text: 'DreamMall.earth',
          link: '/projects/dreammall'
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
    },
  ],
  plugins: {
    slimsearch: {
      indexContent: true
    },
  },
})

import { hopeTheme } from 'vuepress-theme-hope'

export default hopeTheme({
  logo: '/it4c-logo2-clean-bg_alpha-128x128.png',
  docsRepo: 'https://github.com/IT4Change/IT4C.dev',
  docsBranch: 'master',
  docsDir: 'docs',
  editLink: true,
  lastUpdated: false,
  contributors: false,
  print: false,
  displayFooter: true,
  pageInfo: false,
  footer: 'CC BY IT4C.dev & Autoren - <a href="/impressum.html">Impressum</a>',
  navbar: [
    { text: 'IT4C', link: '/' },
    { text: 'Kontakt', link: '/kontakt' },
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
        '/historie',
        '/kontakt'
      ]
    },
    {
      text: 'Projekte',
      collapsible: false,
      children: [
        {
          text: 'DEMOCRACY App',
          link: '/projekte/democracy.app'
        },
        {
          text: 'Ocelot-Social',
          link: '/projekte/ocelot.social'
        },
        {
          text: 'Gradido Software',
          link: '/projekte/gradido'
        },
        {
          text: 'DreamMall.earth',
          link: '/projekte/dreammall'
        },
      ]
    },
    {
      text: 'Team',
      collapsible: false,
      children: [
        '/team/alexander-friedland',
        '/team/hannes-heine',
        { link: '/team/mathias-lenz', text: 'Mathias Lenz' },
        '/team/maximilian-harz',
        '/team/moriz-wahl',
        '/people/sebastian-stein',
        '/team/ulf-gebhardt',
        '/team/wolfgang-huss'
      ]
    },
  ],
  plugins: {
    slimsearch: {
      indexContent: true
    },
  },
})

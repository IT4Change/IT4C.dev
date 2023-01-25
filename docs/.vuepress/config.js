module.exports = {
  title: 'IT Team for Change',
  description: 'IT4C.dev introduces the IT Team for Change, applied Philosophy and Projects.',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1'}]
  ],
  theme: 'book',
  themeConfig: {
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
              ['/people/ulf-gebhardt', 'Ulf Gebhardt'],
              ['/people/hannes-heine', 'Hannes Heine'],
              // ['/random/website', 'Websites using this theme 👌'],
              // ['/random/emoji', 'Emoji 😃'],
              // ['/random/lorem', 'Lorem Ipsum 🌟']
            ]
          },
        ]
      }
  }
}  
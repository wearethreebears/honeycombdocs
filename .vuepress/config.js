module.exports = {
  title: 'Honeycomb',
  description: 'Honeycomb is a configurable, mobile first, fluid scss framework for creating websites and web apps that respond gracefully to any screen size. Unlike traditional frameworks, where font sizes and gutters snap to a fixed size based on breakpoints, Honeycomb resizes all of these elements in co-ordination with with the users viewport, for UI\'s that look great on any sized device.',
  themeConfig: {
    logo: '/honeycomb.png',
    lastUpdated: 'Last updated',
    repo: 'https://github.com/wearethreebears/honeycomb',
    // docsDir: 'docs',
    // editLinks: true,
    editLinkText: 'Recommend a change',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Contact',
        items: [
          {
            text: 'Twitter',
            link: 'https://www.twitter.com/wearethreebears'
          },
          {
            text: 'Email',
            link: 'mailto:honeycomb@wearethreebears.co.uk'
          }
        ]
      }
      /*{
        text: 'Component Example',
        link: '/component-example'
      }*/
    ],
    plugins: [
      '@vuepress/active-header-links',
      [
        '@vuepress/google-analytics',
        { ga: 'UA-102081270-2' }
      ]
    ]
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      { ga: 'UA-102081270-2' }
    ]
  ]

}

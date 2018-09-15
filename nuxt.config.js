module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MESG - Build applications connected to Anything',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MESG is an open-source technology-agnostic framework for developing service-oriented applications.' },
      { hid: 'og:image:height', property: 'og:image:height', content: '1257' },
      { hid: 'og:image:width', property: 'og:image:width', content: '2400' },
      { hid: 'og:image', property: 'og:image', content: 'https://mesg.com/og-image.jpg' },
      { hid: 'og:title', property: 'og:title', content: 'MESG - Build applications connected to Anything' },
      { hid: 'og:description', property: "og:description", content: "MESG is an open-source technology-agnostic framework for developing service-oriented applications." },
      { hid: 'og:url', property: 'og:url', content: 'https://mesg.com/' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'MESG' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'rgba(20, 9, 48, 1)' },
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  },
  manifest: {
    theme_color: 'rgba(20, 9, 48, 1)'
  },
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-117583862-2'
    }]
  ],
  // router: {
  //   middleware: ['mesg-curl']
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

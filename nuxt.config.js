module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MESG - Build future-proof applications',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MESG is an open-source decentralized infrastructure for advanced application development that makes all technologies, including blockchains, interoperable.' },
      { hid: 'image', property: 'og:image', content: 'https://mesg.com/logo.jpg' },
      { hid: 'title', property: 'og:title', content: 'MESG - Build future-proof applications' },
      { hid: 'url', property: 'og:url', content: 'https://mesg.com/' },
      { hid: 'site_name', property: 'og:site_name', content: 'MESG' },
      { hid: 'type', property: 'og:type', content: 'website' }


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Jura' }
    ],
    script: [
      { src: "https://buttons.github.io/buttons.js" }
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

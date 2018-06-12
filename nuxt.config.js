module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MESG - Technology-Interoperable DApps',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MESG is an open-source decentralized infrastructure which makes all technologies on or off the blockchain interoperable. It’s a building platform for developers.' }
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

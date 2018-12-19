module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MESG - Build applications connecting any technologies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Automate and expand business functions through a decentralized reward-driven ecosystem.' },
      { hid: 'og:image:height', property: 'og:image:height', content: '1257' },
      { hid: 'og:image:width', property: 'og:image:width', content: '2400' },
      { hid: 'og:image', property: 'og:image', content: 'https://mesg.com/og-image.jpg' },
      { hid: 'og:title', property: 'og:title', content: 'MESG - Build applications connecting any technologies' },
      { hid: 'og:description', property: "og:description", content: "Automate and expand business functions through a decentralized reward-driven ecosystem." },
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css', integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU', crossorigin: 'anonymous' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#491e8c' },
  manifest: {
    theme_color: '#491e8c'
  },
  modules: [
    '@nuxtjs/pwa',
    process.env.GA_ID ? ['@nuxtjs/google-analytics', {
      id: process.env.GA_ID
    }] : null
  ].filter(x => x),
  /*
  ** Plugins
  */
  plugins: [
    { src: '~/plugins/vue-sticky-directive', ssr: false }
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

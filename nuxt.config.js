module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MESG - The new economy of app development',
    titleTemplate: '%s | MESG',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Connect reusable, shareable integrations from any API or decentralized network, managed by the MESG Engine.' },
      { hid: 'og:image:height', property: 'og:image:height', content: '1257' },
      { hid: 'og:image:width', property: 'og:image:width', content: '2400' },
      { hid: 'og:image', property: 'og:image', content: 'https://mesg.com/og-image.jpg' },
      { hid: 'og:title', property: 'og:title', content: 'MESG - The new economy of app development' },
      { hid: 'og:description', property: 'og:description', content: 'Connect reusable, shareable integrations from any API or decentralized network, managed by the MESG Engine.' },
      { hid: 'og:url', property: 'og:url', content: 'https://mesg.com/' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'MESG' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'google-site-verification', content: 'i3CdpilCzrJntOqUSydRtMsgjHt-wBF7QwOHckT19sI' }
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
    '@nuxtjs/sitemap',
    process.env.GA_ID ? ['@nuxtjs/google-analytics', {
      id: process.env.GA_ID
    }] : null,
    process.env.GA_ID ? ['@nuxtjs/google-tag-manager', {
      id: process.env.GA_ID,
      layer: 'dataLayer',
      pageTracking: true
    }] : null
  ].filter(x => x),
  router: {
    middleware: ['mesg-curl']
  },
  sitemap: {
    hostname: 'https://mesg.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
    exclude: ['showcases']
  },
  /*
  ** Plugins
  */
  plugins: [
    { src: '~/plugins/directives/sticky', ssr: false },
    { src: '~/plugins/directives/show-only-children' },
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
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

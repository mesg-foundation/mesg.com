const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin")

module.exports = {
  mode: 'spa',
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
      { hid: 'description', name: 'description', content: 'Connect reusable, shareable integrations from any API or decentralized network, managed by the MESG SDK.' },
      { hid: 'og:image:height', property: 'og:image:height', content: '1257' },
      { hid: 'og:image:width', property: 'og:image:width', content: '2400' },
      { hid: 'og:image', property: 'og:image', content: 'https://mesg.com/og-image.jpg' },
      { hid: 'og:title', property: 'og:title', content: 'MESG - The new economy of app development' },
      { hid: 'og:description', property: 'og:description', content: 'Connect reusable, shareable integrations from any API or decentralized network, managed by the MESG SDK.' },
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' },
    ],
    script: [
      { src: "https://kit.fontawesome.com/9501c0d07b.js", crossorigin: "anonymous" }
    ]
  },
  css: [
    '~/assets/style.scss'
  ],
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
    '@nuxtjs/style-resources',
    process.env.GA_ID ? ['@nuxtjs/google-analytics', {
      id: process.env.GA_ID
    }] : null,
    process.env.GTM_ID ? ['@nuxtjs/google-tag-manager', {
      id: process.env.GTM_ID
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
  // styleResources: {
  //   scss: [
  //     './assets/_variables.scss'
  //   ]
  // },
  /*
  ** Plugins
  */
  plugins: [
    {
      src: '~/plugins/date.js'
    },
    { src: '~/plugins/directives/sticky', ssr: false },
    { src: '~/plugins/directives/show-only-children' },
  ],
  generate: {
    routes: [
      ...[
        'expand-dao-functionalities',
        'plasma-exit-challenge',
        'send-messages-from-a-satellite',
        'enhance-zapier-workflows',
        'monitor-erc20-transactions',
        'replace-subscriptions-with-on-demand-payments',
        'directly-buy-crypto-with-fiat',
        '404'
      ].map(x => `/showcase/${x}`),
      '404'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    plugins: [
      // new UnusedFilesWebpackPlugin({
      //   patterns: [
      //     '**/*.*',
      //     '!*',
      //     '!static/**',
      //     '!assets/documents/**',
      //     '!**/*.md'
      //   ]
      // }),
    ],
  }
}

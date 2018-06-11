importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "mesg",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.07e73db48e4bd79d930f.js",
    "revision": "6a2f182265a0c6c5f1aa845d37c7bf4d"
  },
  {
    "url": "/_nuxt/layouts/default.128d231a062d077a1e2f.js",
    "revision": "fa16e173577c2a8017ca620ee0d4cb2c"
  },
  {
    "url": "/_nuxt/manifest.790b2751e44860d2cd43.js",
    "revision": "99de4080d83859d49ba2c61ccdd1c827"
  },
  {
    "url": "/_nuxt/pages/marketplace/_org/_repo.a71a35ced0247fcbd20b.js",
    "revision": "293779e5a9bdb5bb9d4bbb9e3f29a0f9"
  },
  {
    "url": "/_nuxt/pages/marketplace/index.169ff2ecfbf56ed881f7.js",
    "revision": "62fb9d74457f0cdb0251bf4c3ced83bb"
  },
  {
    "url": "/_nuxt/pages/index.ef5b2ef038e143a33d45.js",
    "revision": "7d78ddc9175cb2148bf037a9dfd13144"
  },
  {
    "url": "/_nuxt/vendor.752991a3295d9e5ae2d9.js",
    "revision": "fe0d5a93216fbbf98b1891a5266b4345"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


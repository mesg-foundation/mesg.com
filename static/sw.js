importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.a21acdb3ff6d1d082281.js",
    "revision": "de3251022edfd3d8519337d42713ff23"
  },
  {
    "url": "/_nuxt/layouts/default.70ad8b386c3687ff14f1.js",
    "revision": "51c9f8a371e6119c67520b76c24994e4"
  },
  {
    "url": "/_nuxt/manifest.da7f0b0a2cb2b660c8a5.js",
    "revision": "d4f8626d4484bf018bb9565b42264526"
  },
  {
    "url": "/_nuxt/pages/business.2a8ca24b3378be916d8b.js",
    "revision": "3ff61b63b69f360e5486f233ed6558c0"
  },
  {
    "url": "/_nuxt/pages/index.94567cfef98453debe89.js",
    "revision": "a31ff339da13c6d08956d8c0ef65929b"
  },
  {
    "url": "/_nuxt/pages/mission.15cc1d367277f47520b4.js",
    "revision": "82144eb77effe28f2e88fcf05606468f"
  },
  {
    "url": "/_nuxt/vendor.40d431e74370aa5256be.js",
    "revision": "f3e5d6d79e80dc6ddf240a7c9aec0434"
  }
], {
  "cacheId": "mesg",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')






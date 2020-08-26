importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04c6195874665d45b41c.js",
    "revision": "fb7b8a635f3bcd29b06950fc8f5a208f"
  },
  {
    "url": "/_nuxt/110200799544b200f71e.js",
    "revision": "983b3cad0ca118944abd6f164e6000f7"
  },
  {
    "url": "/_nuxt/2d1584b3da23675ac468.js",
    "revision": "fd7b1a70e38d56f0fb571275e65c8dd0"
  },
  {
    "url": "/_nuxt/31ee978ef37dd321642b.js",
    "revision": "e2ea119ec2d1b1e62aff1bfeda541edc"
  },
  {
    "url": "/_nuxt/32a064f4e197bdd4254c.js",
    "revision": "725ea3ac619f32100f4e0b289120742e"
  },
  {
    "url": "/_nuxt/337b526051e45ae2f387.js",
    "revision": "ed10d624f3b4cbc130011b2f4952b66b"
  },
  {
    "url": "/_nuxt/45bc923454ad103e7f92.js",
    "revision": "c7167f5d62db15dae311527c1a2de8b0"
  },
  {
    "url": "/_nuxt/5f1f4598fc0906a006da.js",
    "revision": "1211c2077e796e04c0da20581af6e39d"
  },
  {
    "url": "/_nuxt/647020dab6ca235c5e58.js",
    "revision": "661c44c1e82586f11ec112bc000925e5"
  },
  {
    "url": "/_nuxt/676d6c69755bd6b3e30d.js",
    "revision": "54fc5b17b992f2244d5bb47487c3cce7"
  },
  {
    "url": "/_nuxt/72b225355873fbbccf04.js",
    "revision": "6f8ab49756f7c5943e192a4cb3ed565b"
  },
  {
    "url": "/_nuxt/87acd0b70aa724fdee8b.js",
    "revision": "346003a61736714b806458c987204e5a"
  },
  {
    "url": "/_nuxt/a21375157cb8fcaf52e7.js",
    "revision": "3d267bd5f81b1c0df7fe3e2f7ff04071"
  },
  {
    "url": "/_nuxt/aa602718b66bb6ad035c.js",
    "revision": "6f068b558737c14ac33ec87cce935b11"
  },
  {
    "url": "/_nuxt/b09c2144783c832dd282.js",
    "revision": "bb76db7a1af8bbb8fa0daf92319f4931"
  },
  {
    "url": "/_nuxt/c3be28dae19090f0c6b9.js",
    "revision": "4d147af648ec3cd4ccbc461d692deb19"
  },
  {
    "url": "/_nuxt/ce56c3978a0b38aa0b5f.js",
    "revision": "61ed8c745f87c0062137e128d1493f4a"
  },
  {
    "url": "/_nuxt/d6be189800fdedb37cbc.js",
    "revision": "31a1d77f0650ef5b39f889412aa92c99"
  },
  {
    "url": "/_nuxt/ea287bc6acf8db218ade.js",
    "revision": "2a7ce7d1ea06b8be04a9417f32040704"
  },
  {
    "url": "/_nuxt/f0f75e312dcb7bf37eaf.js",
    "revision": "c94cce4a9d02a91a69f6aa102e8673ba"
  },
  {
    "url": "/_nuxt/fd751d940b4c7f2ae96b.js",
    "revision": "2d3ec9320d5f1868e9ea2584d69c0ca4"
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

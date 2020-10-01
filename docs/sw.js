importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/002955e8ea9075ed5a8b.js",
    "revision": "9dbcc4ddc83bfed2cd9d944a1f54a8e2"
  },
  {
    "url": "/_nuxt/04ac6c85e3810c005275.js",
    "revision": "a427372be73952d9ff9a35e19b0844bc"
  },
  {
    "url": "/_nuxt/10d7b39056d09b216177.js",
    "revision": "ea6a17df0fb3b968495f93747599f506"
  },
  {
    "url": "/_nuxt/176a524a0a4f2483eeef.js",
    "revision": "e819c9147f231bdb721aaac0aa4b2e3e"
  },
  {
    "url": "/_nuxt/1d1005418b6b2962e946.js",
    "revision": "2dffc44719277126de4648a1d2933b03"
  },
  {
    "url": "/_nuxt/36e46fea0042247c6588.js",
    "revision": "1275e262bf9dba55afed6e8600e126b9"
  },
  {
    "url": "/_nuxt/41ad80b06a5e5a779985.js",
    "revision": "804afb52575f949c8ca9b79c600a79f9"
  },
  {
    "url": "/_nuxt/4916c7e5ee1e66c50168.js",
    "revision": "be6d60eab1a5c4bca6435b7f3eefc1f6"
  },
  {
    "url": "/_nuxt/4bde6c875e378da3bee5.js",
    "revision": "5823b36ed25d7d3b059084404246935b"
  },
  {
    "url": "/_nuxt/6279b717e0b8e50c83e8.js",
    "revision": "9660c120fb2e701bb394adb1f7254fab"
  },
  {
    "url": "/_nuxt/7550ef5c0c4bdfcb0594.js",
    "revision": "3b00eaa15b23e54ce2553c6205b76b43"
  },
  {
    "url": "/_nuxt/80f23bf0db81e782b514.js",
    "revision": "d7a5ca43fd059c277231f7edc1246ab7"
  },
  {
    "url": "/_nuxt/9f917d222d76c14a6550.js",
    "revision": "8733da4a62714a7a37bc8f2e74243ec7"
  },
  {
    "url": "/_nuxt/aa3fa556a757b576d694.js",
    "revision": "783e5451cc6d7440ac1de824038ac703"
  },
  {
    "url": "/_nuxt/c320b210134cc0d25536.js",
    "revision": "703d1e54740f5a81a4ddefba88ce28e2"
  },
  {
    "url": "/_nuxt/c6fbbff0f936bc8227ee.js",
    "revision": "80f3aba072b4bcd85dfd8792436cf067"
  },
  {
    "url": "/_nuxt/d9b5dd2f27a90b489567.js",
    "revision": "dce0c2d5e3c5d29403a6f7bbb1d11803"
  },
  {
    "url": "/_nuxt/deee40f947f6670f81e9.js",
    "revision": "c9bd82b80d25cd1c01f1ad1139a1e235"
  },
  {
    "url": "/_nuxt/e4174f7300470dfe3d62.js",
    "revision": "f4ea60172bbf69e90fbae7a364421bae"
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

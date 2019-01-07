<template>
  <div>
      <HeaderEngine id="introduction" class="dark"/>
      <EngineStory id="engine story" class="white"/>
      <CTAMarket id="cta market" class="dark"/>
  </div>
</template>

<script>
const title = "MESG Engine"
const description = "Connect and automate divergent tech."

import HeaderEngine from '~/components/header/Engine'
import EngineStory from '~/components/EngineStory'
import CTAMarket from '~/components/cta/Market'
export default {
  components: {
    HeaderEngine,
    EngineStory,
    CTAMarket
  },
  head: {
    title: title,
    meta: [
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:description', property: "og:description", content: description },
    ]
  }
}
</script>

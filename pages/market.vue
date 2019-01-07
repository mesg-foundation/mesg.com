<template>
  <div>
      <HeaderMarket id="introduction" class="dark"/>
      <MarketStory id="market story" class="white"/>
      <CTAGetStarted id="get started" class="dark"/>
  </div>
</template>

<script>
const title = 'MESG Marketplace'
const description = 'Earn tokens when others make use of your applications.'

import HeaderMarket from '~/components/header/Market'
import MarketStory from '~/components/MarketStory'
import CTAGetStarted from '~/components/cta/GetStarted'
export default {
  components: {
    HeaderMarket,
    MarketStory,
    CTAGetStarted
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

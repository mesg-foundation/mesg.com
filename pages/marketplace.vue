<template>
  <div>
      <HeaderMarketplace id="introduction" class="dark"/>
      <MarketStory id="market story" class="white"/>
      <CTAGetStarted id="get started" class="dark"/>
  </div>
</template>

<script>
const title = 'MESG Marketplace'
const description = 'Earn tokens when others make use of the Modules within your applications. Introducing the new economy of application development.'

import HeaderMarketplace from '~/components/HeaderMarketplace'
import MarketStory from '~/components/MarketStory'
import CTAGetStarted from '~/components/CTAGetStarted'
export default {
  components: {
    HeaderMarketplace,
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

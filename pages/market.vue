<template>
  <div>
      <HeaderMarket id="introduction" class="dark"/>
      <MarketStory id="market story" class="white"/>
      <CTAGetStarted id="get started" class="dark"/>
  </div>
</template>

<script>
import HeaderMarket from '~/components/HeaderMarket'
import MarketStory from '~/components/MarketStory'
import CTAGetStarted from '~/components/CTAGetStarted'
export default {
  components: {
    HeaderMarket,
    MarketStory,
    CTAGetStarted
  }
}
</script>

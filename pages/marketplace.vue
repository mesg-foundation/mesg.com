<template>
  <div>
      <HeaderMesg id="introduction" class="dark"/>
      <MarketplaceStory id="marketplace story" class="white"/>
      <CTAGetStarted id="get started" class="dark"/>
  </div>
</template>

<script>
import HeaderMesg from '~/components/HeaderMesg'
import MarketplaceStory from '~/components/MarketplaceStory'
import CTAGetStarted from '~/components/CTAGetStarted'
export default {
  components: {
    HeaderMesg,
    MarketplaceStory,
    CTAGetStarted
  }
}
</script>

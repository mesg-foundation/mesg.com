<template>
  <div>
      <HeaderEngine id="introduction" class="dark"/>
      <EngineStory id="engine story" class="white"/>
      <CTAMarket id="cta market" class="dark"/>
  </div>
</template>

<script>
import HeaderEngine from '~/components/HeaderEngine'
import EngineStory from '~/components/EngineStory'
import CTAMarket from '~/components/CTAMarket'
export default {
  components: {
    HeaderEngine,
    EngineStory,
    CTAMarket
  }
}
</script>

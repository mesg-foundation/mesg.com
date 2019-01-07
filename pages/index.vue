<template>
  <div>
    <Header id="introduction" class="dark"/>
    <div class="white">
      <MarketEngine id="market engine"/>
      <Entrypoints id="entry points"/>
      <Entrypoints2 id="entry points 2"/>
    </div>
    <CTAToken id="token" class="dark"/>
  </div>
</template>


<script>
import Header from '~/components/header/Base'
import MarketEngine from '~/components/MarketEngine'
import Entrypoints from '~/components/Entrypoints'
import Entrypoints2 from '~/components/Entrypoints2'
import CTAToken from '~/components/cta/Token'
export default {
  components: {
    Header,
    MarketEngine,
    Entrypoints,
    Entrypoints2,
    CTAToken
  }
}
</script>

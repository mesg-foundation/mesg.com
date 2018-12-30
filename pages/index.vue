<template>
  <div>
    <Header id="introduction" class="dark"/>
    <div class="white">
      <MarketplaceEngine id="marketplace engine"/>
      <Entrypoints id="entry points"/>
      <Entrypoints2 id="entry points 2"/>
    </div>
    <CTAToken id="token" class="dark"/>
  </div>
</template>


<script>
import Header from '~/components/Header'
import MarketplaceEngine from '~/components/MarketplaceEngine'
import Entrypoints from '~/components/Entrypoints'
import Entrypoints2 from '~/components/Entrypoints2'
import CTAToken from '~/components/CTAToken'
export default {
  components: {
    Header,
    MarketplaceEngine,
    Entrypoints,
    Entrypoints2,
    CTAToken
  }
}
</script>

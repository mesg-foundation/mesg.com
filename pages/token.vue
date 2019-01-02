<template>
  <div>
      <HeaderToken id="introduction" class="dark"/>
      <div class="white">
        <TokenDesc id="token"/>
        <Documentations id="documentations"/>
      </div>
      <CTATokenUpdated id="token updated" class="dark"/>
  </div>
</template>

<script>
import HeaderToken from '~/components/HeaderToken'
import TokenDesc from '~/components/TokenDesc'
import Documentations from '~/components/Documentations'
import CTATokenUpdated from '~/components/CTATokenUpdated'
export default {
  components: {
    HeaderToken,
    TokenDesc,
    Documentations,
    CTATokenUpdated
  }
}
</script>

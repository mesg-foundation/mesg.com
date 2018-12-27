<template>
  <div>
      <HeaderToken id="introduction" class="dark"/>
      <div class="white">
        <TokenDesc id="token"/>
        <Documentations id="documentations"/>
        <Exchangeslisting id="exchanges"/>
      </div>
      <CTAToken id="token" class="dark"/>
  </div>
</template>

<script>
import HeaderToken from '~/components/HeaderToken'
import TokenDesc from '~/components/TokenDesc'
import Documentations from '~/components/Documentations'
import Exchangeslisting from '~/components/Exchangeslisting'
import CTAToken from '~/components/CTAToken'
export default {
  components: {
    HeaderToken,
    TokenDesc,
    Documentations,
    Exchangeslisting,
    CTAToken
  }
}
</script>

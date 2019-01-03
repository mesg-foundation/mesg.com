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
const title = 'The App Development Token'
const description = 'Get paid for the Modules you create in a value driven economy based on participation and useful contribution.'

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

<template>
  <div>
    <Header id="introduction" class="dark token-header"
      :title="title"
      :description="description"
      :schema="schema">
      <Subscribe slot="action" title="Subscribe now" />
    </Header>
    <div class="white">
      <TokenDesc id="token"/>
      <Documentations id="documentations"/>
    </div>
    <CTATokenUpdated id="token updated" class="dark"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import TokenDesc from '~/components/TokenDesc'
import Documentations from '~/components/Documentations'
import CTATokenUpdated from '~/components/cta/TokenUpdated'
import IconToken from '~/components/icon/Token'
import Subscribe from '~/components/Subscribe'
import page from './page'
export default {
  components: {
    Header,
    TokenDesc,
    Documentations,
    CTATokenUpdated,
    Subscribe
  },
  mixins: [
    page({
      title: 'The MESG Token',
      description: 'Starting Feburary 14th, the MESG Foundation will be offering tokens through DigiFinex using an innovative Algorithmic Token Offering system.',
      schema: IconToken
    })
  ]
}
</script>

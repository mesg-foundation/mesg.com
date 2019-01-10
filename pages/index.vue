<template>
  <div>
    <Header id="introduction" class="dark"
      :schema="schema"
      :title="title"
      :description="description"
    />
    <div class="white">
      <MarketEngine id="market engine"/>
      <Entrypoints2 id="entry points 2"/>
    </div>
    <CTAToken id="token" class="dark"/>
  </div>
</template>


<script>
import SchemaMESG from '~/components/schema/MESG'
import Header from '~/components/Header'
import MarketEngine from '~/components/MarketEngine'
import Entrypoints2 from '~/components/Entrypoints2'
import CTAToken from '~/components/cta/Token'
import page from './page'
export default {
  components: {
    Header,
    MarketEngine,
    Entrypoints2,
    CTAToken
  },
  mixins: [
    page({
      title: 'The new economy of app development',
      description: 'Connect reusable, shareable integrations from any API or decentralized network, managed by the MESG Engine. And get paid for it.',
      schema: SchemaMESG
    })
  ]
}
</script>

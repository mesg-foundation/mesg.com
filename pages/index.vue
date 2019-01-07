<template>
  <div>
    <Header id="introduction" class="dark"
      :schema="schema"
      :title="title"
      :description="description"
    />
    <div class="white">
      <MarketEngine id="market engine"/>
      <Entrypoints id="entry points"/>
      <Entrypoints2 id="entry points 2"/>
    </div>
    <CTAToken id="token" class="dark"/>
  </div>
</template>


<script>
const title = 'The new economy of app development'
const description = 'Connect reusable, shareable integrations from any API or decentralized network, managed by the MESG Engine. And get paid for it.'

import SchemaMESG from '~/components/schema/MESG'
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
    CTAToken,
    SchemaMESG
  },
  head: {
    title: title,
    meta: [
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:description', property: "og:description", content: description },
    ]
  },
  computed: {
    title () { return title },
    description () { return description },
    schema () { return SchemaMESG }
  }
}
</script>

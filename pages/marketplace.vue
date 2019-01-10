<template>
  <div>
    <Header id="introduction" class="dark"
      :title="title"
      :description="description"
      :schema="schema" />
    <MarketStory id="market story" class="white"/>
    <CTAGetStarted id="get started" class="dark"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import MarketStory from '~/components/MarketStory'
import CTAGetStarted from '~/components/cta/GetStarted'
import SchemaMarketplace from '~/components/schema/Marketplace'
import page from './page'
export default {
  components: {
    Header,
    MarketStory,
    CTAGetStarted
  },
  mixins: [
    page({
      title: 'MESG Marketplace',
      description: 'The new economy for buying and selling modular application components. Choose new application features, or monetize off the ones you create.',
      schema: SchemaMarketplace
    })
  ]
}
</script>

<template>
  <div>
    <Header id="introduction" class="dark token-header"
      :title="title"
      :description="description"
      :schema="schema"
      actionLink="http://eepurl.com/drKt-5"
      actionTitle="Keep me updated" />
  </div>
</template>

<script>
import Header from '~/components/Header'
import TokenDesc from '~/components/TokenDesc'
import Documentations from '~/components/Documentations'
import CTATokenUpdated from '~/components/cta/TokenUpdated'
import IconToken from '~/components/icon/Token'
import page from './page'
export default {
  components: {
    Header,
    TokenDesc,
    Documentations,
    CTATokenUpdated
  },
  mixins: [
    page({
      title: 'MESG Token Available Soon',
      description: 'Keep in touch to discover the new way of token distribution: Algorithmic Token Offering',
      schema: IconToken
    })
  ]
}
</script>

<style>
.token-header .container-child {
  min-height: 80vh!important;
}
</style>

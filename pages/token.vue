<template>
  <div>
    <Header id="introduction" class="dark"
      :title="title"
      :description="description"
      :schema="schema"
      actionLink="http://eepurl.com/drKt-5"
      actionTitle="Keep me updated" />
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
      title: 'The App Development Token',
      description: 'Get paid for the Modules you create in a value driven economy based on participation and useful contribution.',
      schema: IconToken
    })
  ]
}
</script>

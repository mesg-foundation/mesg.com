<template>
  <div>
    <Header id="introduction" class="dark"
      :schema="schema"
      :title="title"
      :description="description"/>
    <Features id="features" class="white"/>
    <CTAGetStarted id="get started" class="dark"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import MESG from '~/components/schema/MESG'
import Features from '~/components/Features'
import CTAGetStarted from '~/components/cta/GetStarted'
import page from './page'
export default {
  components: {
    Header,
    Features,
    CTAGetStarted
  },
  mixins: [
    page({
      title: 'MESG Features',
      description: 'MESG is extremely flexible and expandable, so we encourage you to think beyond these features.',
      schema: MESG
    })
  ]
}
</script>

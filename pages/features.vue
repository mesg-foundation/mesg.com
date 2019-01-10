<template>
  <div>
    <Header id="introduction" class="dark"
      :title="title"
      :description="description"/>
    <Features id="features" class="white"/>
    <CTAContact id="contact" class="dark"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Features from '~/components/Features'
import CTAContact from '~/components/cta/Contact'
import page from './page'
export default {
  components: {
    Header,
    Features,
    CTAContact
  },
  mixins: [
    page({
      title: 'MESG Features',
      description: 'MESG is extremely flexible and expandable, so we encourage you to think beyond these features.',
    })
  ]
}
</script>

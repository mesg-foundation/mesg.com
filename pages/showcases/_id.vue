<template>
  <div v-if="usecase">
      <HeaderShowcase :usecase="usecase" id="introduction" class="dark"/>
      <Progress :usecase="usecase" id="progress" class="white"/>
      <CTANext id="next" class="dark"/>
  </div>
  <div v-else>
    <Header404 id="introduction" class="dark"/>
  </div>
</template>

<script>
import HeaderShowcase from '~/components/HeaderShowcase'
import Progress from '~/components/Progress'
import CTANext from '~/components/CTANext'
import Header404 from '~/components/Header404'
export default {
  components: {
    Header404,
    HeaderShowcase,
    Progress,
    CTANext
  },
  computed: {
    usecases () {
      return require('~/assets/usecases.json')
    },
    usecase () {
      return this.usecases
        .filter(x => x.id === this.$route.params.id)[0]
    }
  }
}
</script>

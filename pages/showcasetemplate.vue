<template>
  <div>
      <HeaderShowcase id="introduction" class="dark"/>
      <Progress id="progress" class="white"/>
      <CTANext id="next" class="dark"/>
  </div>
</template>

<script>
import HeaderShowcase from '~/components/HeaderShowcase'
import Progress from '~/components/Progress'
import CTANext from '~/components/CTANext'
export default {
  components: {
    HeaderShowcase,
    Progress,
    CTANext
  }
}
</script>

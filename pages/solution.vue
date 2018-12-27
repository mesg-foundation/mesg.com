<template>
  <div>
      <HeaderSolution id="introduction" class="dark"/>
      <div class="white">
        <Targets id="targets"/>
        <HowDoesItWork id="mesg"/>
        <Business id="business"/>
      </div>
      <CTAGetintouch id="get in touch" class="dark"/>
  </div>
</template>

<script>
import HeaderSolution from '~/components/HeaderSolution'
import Targets from '~/components/Targets'
import HowDoesItWork from '~/components/HowDoesItWork'
import Business from '~/components/Business'
import CTAGetintouch from '~/components/CTAGetintouch'
export default {
  components: {
    HeaderSolution,
    Targets,
    HowDoesItWork,
    Business,
    CTAGetintouch
  }
}
</script>

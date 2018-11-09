<template>
  <div>
    <HeaderTeam id="introduction" class="dark"/>
    <Roadmap id="roadmap" class="dark"/>
    <Partners id="partners" class="white"/>
  </div>
</template>

<script>
import HeaderTeam from '~/components/HeaderTeam'
import Roadmap from '~/components/Roadmap'
import Partners from '~/components/Partners'
export default {
  components: {
    HeaderTeam,
    Roadmap,
    Partners
  }
}
</script>

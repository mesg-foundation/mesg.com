<template>
  <div>
    <HeaderTeam id="introduction" class="dark"/>
    <Team id="team" class="white"/>
    <CtaHiring id="ctahiring" class="dark"/>
    <Partners id="partners" class="white"/>
  </div>
</template>

<script>
import HeaderTeam from '~/components/HeaderTeam'
import Team from '~/components/Team'
import CtaHiring from '~/components/CtaHiring'
import Partners from '~/components/Partners'
export default {
  components: {
    HeaderTeam,
    Team,
    CtaHiring,
    Partners
  }
}
</script>

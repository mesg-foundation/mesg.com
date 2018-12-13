<template>
  <div>
    <HeaderTeam id="introduction" class="dark"/>
    <Team id="team" class="white"/>
    <CtaHiring id="ctahiring" class="dark"/>
  </div>
</template>

<script>
import HeaderTeam from '~/components/HeaderTeam'
import Team from '~/components/Team'
import CtaHiring from '~/components/CtaHiring'
export default {
  components: {
    HeaderTeam,
    Team,
    CtaHiring,
  }
}
</script>

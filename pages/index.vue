<template>
  <div>
    <Header id="introduction" class="dark"/>
    <Targets id="targets" class="white"/>
    <Features id="overview" class="dark"/>
    <Business id="business" class="white"/>
    <Blockchain id="blockchain" class="dark"/>
    <Team id="team" class="white"/>
    <Cta id="cta" class="dark"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Targets from '~/components/Targets'
import Features from '~/components/Features'
import Business from '~/components/Business'
import Blockchain from '~/components/Blockchain'
import Team from '~/components/Team'
import Cta from '~/components/Cta'
export default {
  components: {
    Header,
    Targets,
    Features,
    Business,
    Blockchain,
    Team,
    Cta
  }
}
</script>

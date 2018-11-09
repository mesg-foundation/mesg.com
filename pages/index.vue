<template>
  <div>
    <Header id="introduction" class="dark"/>
    <Targets id="targets" class="white"/>
    <Features id="overview" class="dark"/>
    <Business id="business" class="white"/>
    <Blockchain id="blockchain" class="dark"/>
    <Cta id="cta" class="white"/>
    <Partners id="partners" class="white"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Targets from '~/components/Targets'
import Features from '~/components/Features'
import Business from '~/components/Business'
import Blockchain from '~/components/Blockchain'
import Cta from '~/components/Cta'
import Partners from '~/components/Partners'
export default {
  components: {
    Header,
    Targets,
    Features,
    Business,
    Blockchain,
    Cta,
    Partners
  }
}
</script>

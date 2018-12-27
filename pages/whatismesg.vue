<template>
  <div>
      <HeaderMesg id="introduction" class="dark"/>
      <div class="white">
        <Nutshell id="nutshell"/>
        <HowDoesItWork id="mesg"/>
        <WhyImportant id="whyimportant"/>
        <Features id="features"/>
        <Blockchain id="blockchain"/>
      </div>
      <CTAGetStarted id="get started" class="dark"/>
  </div>
</template>

<script>
import HeaderMesg from '~/components/HeaderMesg'
import Nutshell from '~/components/Nutshell'
import HowDoesItWork from '~/components/HowDoesItWork'
import WhyImportant from '~/components/WhyImportant'
import Features from '~/components/Features'
import Blockchain from '~/components/Blockchain'
import CTAGetStarted from '~/components/CTAGetStarted'
export default {
  components: {
    HeaderMesg,
    Nutshell,
    HowDoesItWork,
    WhyImportant,
    Features,
    Blockchain,
    CTAGetStarted
  }
}
</script>

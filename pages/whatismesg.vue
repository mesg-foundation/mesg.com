<template>
  <div>
      <HeaderMesg id="introduction" class="dark"/>
      <Nutshell id="nutshell" class="white"/>
      <HowDoesItWork id="mesg" class="dark"/>
      <WhyImportant id="whyimportant" class="white"/>
      <CTAApplication id="ctaapplication" class="dark"/>
  </div>
</template>

<script>
import HeaderMesg from '~/components/HeaderMesg'
import Nutshell from '~/components/Nutshell'
import HowDoesItWork from '~/components/HowDoesItWork'
import WhyImportant from '~/components/WhyImportant'
import CTAApplication from '~/components/CTAApplication'
export default {
  components: {
    HeaderMesg,
    Nutshell,
    HowDoesItWork,
    WhyImportant,
    CTAApplication
  }
}
</script>

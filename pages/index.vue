<template>
  <div>
    <Header id="introduction" class="dark"/>
    <div class="white">
      <Concept id="concept"/>
      <Entrypoints id="entry points"/>
      <Entrypoints2 id="entry points 2"/>
    </div>
    <CTAToken id="token" class="dark"/>
  </div>
</template>


<script>
import Header from '~/components/Header'
import Concept from '~/components/Concept'
import Entrypoints from '~/components/Entrypoints'
import Entrypoints2 from '~/components/Entrypoints2'
import CTAToken from '~/components/CTAToken'
export default {
  components: {
    Header,
    Concept,
    Entrypoints,
    Entrypoints2,
    CTAToken
  }
}
</script>

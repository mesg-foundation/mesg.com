<template>
  <div>
    <Header id="introduction"/>
    <Targets id="targets"/>
    <Features id="overview"/>
    <Business id="business"/>
    <Blockchain id="blockchain"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Targets from '~/components/Targets'
import Features from '~/components/Features'
import Business from '~/components/Business'
import Blockchain from '~/components/Blockchain'
export default {
  components: {
    Header,
    Targets,
    Features,
    Business,
    Blockchain
  }
}
</script>

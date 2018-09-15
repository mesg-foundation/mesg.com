<template>
  <div>
    <Header/>
    <Targets/>
    <Features/>
    <Business/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Targets from '~/components/Targets'
import Features from '~/components/Features'
import Business from '~/components/Business'
export default {
  components: {
    Header,
    Targets,
    Features,
    Business
  }
}
</script>

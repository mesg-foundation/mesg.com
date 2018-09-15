<template>
  <div>
    <Header/>
    <Targets/>
    <Features/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Targets from '~/components/Targets'
import Features from '~/components/Features'
export default {
  components: {
    Header,
    Targets,
    Features
  }
}
</script>

<template>
  <div>
    <Header class="dark"></Header>
    <GetStarted class="light"></GetStarted>
    <Sharing class="gray border"></Sharing>
    <Features class="light border"></Features>
    <Github class="gray border"></Github>
    <Roadmap class="light border"></Roadmap>    
  </div>
</template>

<script>
import Header from '~/components/Header'
import GetStarted from '~/components/GetStarted'
import Features from '~/components/Features'
import Github from '~/components/Github'
import Roadmap from '~/components/Roadmap'
import Sharing from '~/components/Sharing'
export default {
  components: {
    Header,
    GetStarted,
    Features,
    Github,
    Roadmap,
    Sharing
  }
}
</script>

<style scoped>
  section {
    padding: 60px 0;
    text-align: center;
  }

  .border {
    border-top: solid 1px #DDD;
  }
</style>


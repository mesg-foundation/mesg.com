<template>
  <div>
    <Header class="dark"></Header>
    <GetStarted class="gray"></GetStarted>
    <Sharing class="light border"></Sharing>
    <Features class="gray border"></Features>
    <Github class="light border"></Github>
    <Roadmap class="gray border"></Roadmap>    
    <Articles class="light border"></Articles>    
  </div>
</template>

<script>
import Header from '~/components/Header'
import GetStarted from '~/components/GetStarted'
import Features from '~/components/Features'
import Github from '~/components/Github'
import Roadmap from '~/components/Roadmap'
import Sharing from '~/components/Sharing'
import Articles from '~/components/Articles'
export default {
  components: {
    Header,
    GetStarted,
    Features,
    Github,
    Roadmap,
    Sharing,
    Articles
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


<template>
  <div>
    <Header class="dark"></Header>
    <GetStarted class="light"></GetStarted>
    <Features class="gray border"></Features>
    <Github class="light border"></Github>
  </div>
</template>

<script>
import Header from '~/components/Header'
import GetStarted from '~/components/GetStarted'
import Features from '~/components/Features'
import Github from '~/components/Github'
export default {
  components: {
    Header,
    GetStarted,
    Features,
    Github
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


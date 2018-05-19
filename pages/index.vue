<template>
  <div>
    <Header></Header>
    <GetStarted class="white"></GetStarted>
  </div>
</template>

<script>
import Header from '~/components/Header'
import GetStarted from '~/components/GetStarted'
export default {
  components: {
    Header,
    GetStarted
  }
}
</script>

<style scoped>
  .white {
    background: white;
  }
</style>

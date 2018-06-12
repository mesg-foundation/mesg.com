<template>
  <section>
    <div class="container">
      <h2>Get Started</h2>
      <p>Create your first application in less than 5 minutes.</p>
      <Terminal class="shadow" :commands="basicApp"></Terminal>
    </div>
  </section>
</template>

<script>
import Terminal from '~/components/Terminal'
export default {
  components: {
    Terminal
  },
  computed: {
    basicApp () {
      return require('~/assets/terminal/basic.json')
    }
  }
}
</script>

<style scoped>
  section {
    padding: 60px 0;
    text-align: center;
  }
  p {
    margin-bottom: 40px;
  }
</style>

<template>
  <section>
    <div class="container">
      <h1>Get Started</h1>
      <p>This is a step by step tutorial how to get started and to create your first service</p>
      <Terminal></Terminal>
    </div>
  </section>
</template>

<script>
import Terminal from '~/components/Terminal'
export default {
  components: {
    Terminal
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

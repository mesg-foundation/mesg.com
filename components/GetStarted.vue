<template>
  <section>
    <div class="container">
      <h2>Get Started</h2>
      <p>Create your first application in less than 5 minutes.</p>
      <Terminal class="shadow" :commands="basicApp" @finished="onFinished"></Terminal>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Terminal from '~/components/Terminal'
export default {
  components: {
    Terminal
  },
  computed: {
    basicApp () {
      return require('~/assets/terminal/basic.json')
    }
  },
  methods: {
    onFinished ({ email }) {
      axios.post('http://178.128.220.124:3000/webhook', { email })
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

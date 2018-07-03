<template>
  <section>
    <div class="container">
      <h2>Get Started</h2>
      <p>Create an entire application in less than 5 minutes.</p>
      <Terminal class="shadow" :commands="basicApp" @finished="onFinished"></Terminal>
      <a href="https://github.com/mesg-foundation/core#readme" target="_blank">Give me more!!</a>
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
      const endpoint = "https://jyzcediwik.execute-api.us-east-1.amazonaws.com/dev/invite"
      axios.post(endpoint, { email })
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
  a {
    display: inline-block;
    margin-top: 2em;
  }
</style>

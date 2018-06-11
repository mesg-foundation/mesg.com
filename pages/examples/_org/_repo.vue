<template>
  <div class="light">
    <div class="container p1">
      <nav>
        <nuxt-link to="/examples">Examples</nuxt-link>
      </nav>
      <GithubReadme :url="url"/>
    </div>
  </div>
</template>

<script>
import GithubReadme from '~/components/GithubReadme'
export default {
  components: {
    GithubReadme
  },
  computed: {
    url() {
      return `https://github.com/${this.$route.params.org}/${this.$route.params.repo}`
    }
  }
}
</script>

<style scoped>
  nav {
    margin-bottom: 1em;
  }
</style>

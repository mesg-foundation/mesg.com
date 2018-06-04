<template>
  <main>
    <h3>
      Lastest version:
      <a :href="release.html_url" target="_blank">
        {{ release.name }}
      </a>
    </h3>
    <div class="content" v-html="html"></div>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    release: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      html: ''
    }
  },
  methods: {
    async refreshHtml () {
      const token = process.env.GITHUB_TOKEN
        ? `access_token=${process.env.GITHUB_TOKEN}`
        : ''
      this.html = await axios.post(`https://api.github.com/markdown?${token}`, {
        text: this.release.body,
      }).then(({ data }) => data)
    }
  },
  watch: {
    release() { this.refreshHtml() }
  },
  async mounted () {
    this.refreshHtml()
  }
}
</script>

<style scoped>
  .content {
    padding: 1em;
    text-align: left;
  }
</style>

<template>
  <main>
    <h3>
      Latest version:
      <a :href="release.html_url" target="_blank">
        {{ release.name }}
      </a>
    </h3>
    <div class="content p1" v-html="html"></div>
    <slot></slot>
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
      if (!this.release.body) { return }
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
    text-align: left;
    max-height: 600px;
    overflow: scroll;
  }
</style>

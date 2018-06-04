<template>
  <main>
    <h2>
      Lastest version:
      <a :href="release.html_url" target="_blank">
        {{ release.name }}
      </a>
    </h2>
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
      this.html = await axios.post(`https://api.github.com/markdown?access_token=${process.env.GITHUB_TOKEN}`, {
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

  h2 {
    padding: .75em;
    border-bottom: solid 1px #f2f2f2;
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
</style>

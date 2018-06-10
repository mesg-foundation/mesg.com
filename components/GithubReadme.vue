<template>
  <section v-html="content"></section>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      content: ''
    }
  },
  async mounted () {
    try {
      const raw = this.url.replace('github.com', 'raw.githubusercontent.com')
      const readme = await axios.get(`${raw}/master/README.md`)
      const token = process.env.GITHUB_TOKEN
        ? `access_token=${process.env.GITHUB_TOKEN}`
        : ''
      const md = await axios.post(`https://api.github.com/markdown?${token}`, {
        text: readme.data
      })
      this.content = md.data
    } catch (e) {
      this.content = 'Cannot retrieve README information'
    }
  }
}
</script>

<template>
  <section
    v-if="content"
    v-html="content"
    class="markdown-body">
  </section>
  <span v-else>loading...</span>
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
      this.content = `Cannot retrieve README information<br/>Please checkout directly <a href="${this.url}" target="_blank">${this.url}</a>`
    }
  }
}
</script>

<style>
  .markdown-body {
    text-align: left;
  }
  .markdown-body table {
    display: block;
    width: 100%;
    overflow: auto;
  }
  .markdown-body p, .markdown-body blockquote, .markdown-body ul, .markdown-body ol, .markdown-body dl, .markdown-body table, .markdown-body pre {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .markdown-body table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  .markdown-body table th, .markdown-body table td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }
  .markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
    display: block;
    padding-left: 0;
    padding-right: 0;
  }
  .markdown-body h2 {
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid #eaecef;
  }
  .markdown-body>*:first-child {
    margin-top: 0 !important;
  }
  .markdown-body h1 {
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid #eaecef;
  }
  .markdown-body h3 {
    font-size: 1.25em;
  }
  .markdown-body h4 {
    font-size: 1em;
  }
  .markdown-body .highlight pre, .markdown-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
  }
  .markdown-body pre {
    word-wrap: normal;
  }
  .markdown-body pre code, .markdown-body pre tt {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }
  .markdown-body pre>code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }
  .markdown-body code, .markdown-body tt {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
  }
  tt, code {
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
    font-size: 12px;
  }
  code, kbd, pre, samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
</style>

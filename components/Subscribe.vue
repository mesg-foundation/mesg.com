<template>
  <form @submit.prevent="submit">
    <output>{{error}}</output>
    <output>{{response}}</output>
    <input type="email" v-model="email" name="sg_email" placeholder="you@example.com" required>
    <input type="submit" :value="title">
  </form>
</template>

<script>
const url = 'https://app.sgwidget.com/v2/api/newsletter-signup'
export default {
  props: {
    title: {
      type: String,
      default: 'Subscribe'
    },
    token: {
      type: String,
      default: '32bdd13cbff3931061eb3eca01321d84'
    }
  },
  data() {
    return {
      email: '',
      error: null,
      response: null
    }
  },
  methods: {
    submit () {
      this.error = this.response = null
      const data = new FormData()
      data.append('email', this.email)
      data.append('token', this.token)
      const xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')

      xmlhttp.open('POST', url, true)
      xmlhttp.onload = () => this.handleResponse(xmlhttp)
      xmlhttp.send(data)
    },
    handleResponse (xmlhttp) {
      const resp = JSON.parse(xmlhttp.responseText)
      if (xmlhttp.status == 500) {
        this.error = resp.message || (resp.email || [])[0]
        return
      }
      if (xmlhttp.status != 200) return
      if (resp.message.indexOf('error') !== -1) {
        this.error = resp.message
        return
      }
      this.response = resp.message
    }
  }
}
</script>
<template>
  <form @submit.prevent="submit">
    <output>{{error}}</output>
    <output>{{response}}</output>
    <input type="email" v-model="email" name="sg_email" placeholder="you@example.com" class="field" required>
    <Button type="submit" :value="title" class="btn" primary/>
  </form>
</template>

<script>
import Button from '~/components/Button'
const url = 'https://app.sgwidget.com/v2/api/newsletter-signup'
export default {
  components: {
    Button
  },
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

<style scoped>

form {
  width: 100%;
}

.btn {
  border-top-left-radius: 0;
  border-bottom-left-radius:0;
}

.field {
  width: 50%;
  max-width: 300px;
  font-size: 1em;
  font-weight: bold;
  text-align: left;
  padding: 1em;
  background-color: #fafafe;
  background-color: var(--pale-white);
  border:none;
  border-top-left-radius:0.3em;
  border-bottom-left-radius:0.3em;
}


</style>

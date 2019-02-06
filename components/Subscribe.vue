<template>
  <form @submit.prevent="submit" flex column>
    <div flex>
      <input type="email" v-model="email" name="sg_email" placeholder="you@example.com" class="field" required>
      <Button submit class="btn" primary>{{ title }}</Button>
    </div>
    <a v-if="error" @click="error = null" class="error message" flex justify-center align-center mt1>
      <i class="fas fa-exclamation-circle" mr05></i>{{error}}
    </a>
    <a v-if="response" @click="response = null" class="response message" flex justify-center align-center mt1>
      <i class="fas fa-check" mr05></i>{{response}}
    </a>
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

.btn {
  border:none;
  padding:1em 2em;
  border-top-left-radius: 0;
  border-bottom-left-radius:0;
}

.field {
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

.message {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
  font-size: 0.8em;
  color: #ffffff;
  color: var(--white-content);
  cursor: pointer;
}
.error {
  border-radius: 0.3em;
  padding:1em;
  background-color: #D82439;
}
.response {
  border-radius: 0.3em;
  padding:1em;
  background-color: #1BA539;
}

@media only screen and (max-width: 414px) {
  .field {
    font-size: 0.8em;
  }
}

</style>

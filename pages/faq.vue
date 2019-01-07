<template>
  <div>
    <HeaderFAQ id="introduction" class="dark"/>
    <Faq id="faq" class="white"/>
    <CTAContact id="contact" class="dark"/>
  </div>
</template>

<script>
const title = 'Frequently Asked Questions'
const description = 'Below are some common questions and answers about MESG and the MESG Network.'

import HeaderFAQ from '~/components/header/FAQ'
import Faq from '~/components/Faq'
import CTAContact from '~/components/cta/Contact'
export default {
  components: {
    HeaderFAQ,
    Faq,
    CTAContact
  },
  head: {
    title: title,
    meta: [
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:description', property: "og:description", content: description },
    ]
  }
}
</script>

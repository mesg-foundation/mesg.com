<template>
  <div>
    <HeaderFAQ id="introduction" class="dark"/>
    <Faq id="faq" class="white"/>
    <CTAContact id="contact" class="dark"/>
  </div>
</template>

<script>
import HeaderFAQ from '~/components/HeaderFAQ'
import Faq from '~/components/Faq'
import CTAContact from '~/components/CTAContact'
export default {
  components: {
    HeaderFAQ,
    Faq,
    CTAContact
  }
}
</script>

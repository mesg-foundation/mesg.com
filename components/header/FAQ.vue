<template>
  <Header
    :schema="schema"
    title="Frequently Asked Questions"
  description="Below are some common questions and answers about MESG and the MESG Network."
  />
</template>

<script>
import Header from '~/components/header/Base'
import IconFAQ from '~/components/icon/FAQ'
export default {
  components: { Header },
  computed: {
    schema () { return IconFAQ }
  }
}
</script>

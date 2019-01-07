<template>
  <Header
    :schema="schema"
    title="Frequently Asked Questions"
    description="Below are some common questions and answers about MESG and the MESG Network."
    smallDescription="These FAQs are intended only for informational purposes and shouldn’t be relied upon exclusively or considered as warranties. Please refer to GitHub and other resources for additional details."
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

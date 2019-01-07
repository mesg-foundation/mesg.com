<template>
  <Header
    :schema="schema"
    title="The App Development Token"
    description="Get paid for the Modules you create in a value driven economy based on participation and useful contribution."
    actionLink="http://eepurl.com/drKt-5"
    actionTitle="Keep me updated"
  />
</template>

<script>
import Header from '~/components/header/Base'
import IconToken from '~/components/icon/Token'
export default {
  components: { Header },
  computed: {
    schema () { return IconToken }
  }
}
</script>

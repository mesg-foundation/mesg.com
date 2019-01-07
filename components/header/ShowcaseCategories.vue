<template>
  <Header
    :schema="schema"
    title="MESG Showcase"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum orci eget convallis efficitur. Morbi urna massa, volutpat nec auctor vel, vehicula ac est."
  />
</template>

<script>
import Header from '~/components/header/Base'
import SchemaNutshell from '~/components/schema/Nutshell'
export default {
  components: { Header },
  computed: {
    schema () { return SchemaNutshell }
  }
}
</script>

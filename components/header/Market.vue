<template>
  <Header
    :schema="schema"
    title="MESG Market"
    description="Earn tokens when others make use of your applications."
  />
</template>

<script>
import Header from '~/components/header/Base'
import SchemaMarketplace from '~/components/schema/Marketplace'
export default {
  components: { Header },
  computed: {
    schema () { return SchemaMarketplace }
  }
}
</script>

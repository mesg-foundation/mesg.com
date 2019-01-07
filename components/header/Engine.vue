<template>
  <Header
    :schema="schema"
    title="MESG Engine"
    description="Connect and automate divergent tech."
  />
</template>

<script>
import Header from '~/components/header/Base'
import SchemaEngine from '~/components/schema/Engine'
export default {
  components: { Header },
  computed: {
    schema () { return SchemaEngine }
  }
}
</script>
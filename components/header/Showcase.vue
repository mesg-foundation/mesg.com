<template>
  <Header
    :schema="schema"
    :title="usecase.title"
    :description="usecase.text"
    backTitle="Back to showcase"
    backLink="/showcases"
  />
</template>

<script>
import Header from '~/components/header/Base'
import SchemaNutshell from '~/components/schema/Nutshell'
export default {
  components: { Header },
  props: {
    usecase: {
      type: Object,
      required: true
    }
  },
  computed: {
    schema () { return SchemaNutshell }
  }
}
</script>

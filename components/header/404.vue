<template>
  <Header
    :schema="schema"
    title="Hey dude,"
    description="Looks like that page doesn't exist."
    smallDescription="Click on the button below to go back to Home, let's act like nothing happened"
    actionLink="/"
    actionTitle="cd $HOME"
  />
</template>

<script>
import Header from '~/components/header/Base'
import Schema404 from '~/components/schema/404'
export default {
  components: { Header },
  computed: {
    schema () { return Schema404 }
  }
}
</script>

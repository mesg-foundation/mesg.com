<template>
  <Header
    :schema="schema"
    title="The MESG Team"
    description="The MESG Foundation is a group of world-class impassioned individuals, dedicated to solving major issues in tech interoperability."
  />
</template>

<script>
import Header from '~/components/header/Base'
import IconTeam from '~/components/icon/Team'
export default {
  components: { Header },
  computed: {
    schema () { return IconTeam }
  }
}
</script>
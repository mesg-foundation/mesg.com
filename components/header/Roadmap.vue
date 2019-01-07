<template>
  <Header
    :schema="schema"
    title="The MESG Roadmap"
    description="Our vision is to make business integration simple by becoming the universally-used platform for connecting traditional technology to trustless systems."
  />
</template>

<script>
import Header from '~/components/header/Base'
import IconRoadmap from '~/components/icon/Roadmap'
export default {
  components: { Header },
  computed: {
    schema () { return IconRoadmap }
  }
}
</script>

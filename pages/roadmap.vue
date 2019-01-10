<template>
  <div>
    <Header id="introduction" class="dark"
      :title="title"
      :description="description"
      :schema="schema" />
    <Roadmap id="roadmap" class="white"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import SchemaRoadmap from '~/components/schema/SchemaRoadmap'
import Roadmap from '~/components/Roadmap'
import page from './page'
export default {
  components: {
    Header,
    Roadmap
  },
  mixins: [
    page({
      title: 'The MESG Roadmap',
      description: 'Our vision is to make business integration simple by becoming the universally-used platform for connecting traditional technology to trustless systems.',
      schema: SchemaRoadmap
    })
  ]
}
</script>

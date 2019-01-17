<template>
  <div>
    <Header id="introduction" class="dark hackathon"
      :title="title"
      :description="description"
      :schema="schema"
      smallDescription="January 18th to February 17th"
      full-height
      actionTitle="Register Now !"
      actionLink="https://forum.mesg.com/t/mesg-online-hackathon-18th-january-to-17th-february-2019/170" />
  </div>
</template>

<script>
import Header from '~/components/Header'
import SchemaHackathon from '~/components/schema/Hackathon'
import page from './page'
export default {
  components: {
    Header
  },
  mixins: [
    page({
      title: 'MESG Hackathon',
      description: 'Build a kickass application with MESG and win up to $10,000 in MESG tokens',
      schema: SchemaHackathon
    })
  ]
}
</script>

<template>
  <div>
    <Header id="introduction" class="dark hackathon"
      :title="title"
      :description="description"
      smallDescription="One month online hackaton to build a kick ass application with MESG"
      full-height
      actionTitle="Register Now !"
      actionLink="https://forum.mesg.com/t/mesg-online-hackathon-18th-january-to-17th-february-2019/170" />
  </div>
</template>

<script>
import Header from '~/components/Header'
import page from './page'
export default {
  components: {
    Header
  },
  mixins: [
    page({
      title: 'MESG Hackathon',
      description: 'Participate to the MESG online Hackathon and receive up to $10,000 of prizes in MESG token'
      // schema: SchemaMarketplace
    })
  ]
}
</script>

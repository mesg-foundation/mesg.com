<template>
  <div>
    <Header id="introduction" class="dark hackathon"
      :title="title"
      :description="description"
      :schema="schema"
      smallDescription="smalldescription"
      full-height
      actionTitle="Register Now!"
      actionLink="https://forum.mesg.com/t/mesg-online-hackathon-18th-january-to-17th-february-2019/170">
      <p mb05>Build a kickass application with MESG and win up to <span>$10,000 in MESG tokens</span><i class="fas fa-terminal" ml05></i></p>
      <p class="date"><i class="far fa-calendar-check" mr05></i>January 18th to February 17th</p>
    </Header>
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
      title: 'MESG Online Hackathon',
      description: 'Build a kickass application with MESG and win up to $10,000 in MESG tokens.',
      schema: SchemaHackathon
    })
  ]
}
</script>

<style scoped>

p {
  font-size: 1.6em;
  font-weight: normal;
}

span {
  font-weight: bold;
  color: #ffa744;
  color: var(--Orange-cta);
}

.date {
  font-size: 1.2em;
  opacity:0.65;
}
</style>

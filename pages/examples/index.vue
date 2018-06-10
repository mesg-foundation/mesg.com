<template>
  <div class="light">
    <section class="container">
      <h2>Services</h2>
      <Grid :items="services">
        <ServiceCard slot-scope="{ item }" :service="item"/>
      </Grid>
    </section>
    <section class="container">
      <h2>Applications</h2>
      <Grid :items="applications">
        <ApplicationCard slot-scope="{ item }" :application="item"/>
      </Grid>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Grid from '~/components/Grid'
import ServiceCard from '~/components/ServiceCard'
import ApplicationCard from '~/components/ApplicationCard'
export default {
  components: {
    Grid,
    ServiceCard,
    ApplicationCard
  },
  async asyncData() {
    const services = await axios.get(`https://raw.githubusercontent.com/mesg-foundation/awesome/master/services.json`)
    const applications = await axios.get(`https://raw.githubusercontent.com/mesg-foundation/awesome/master/applications.json`)
    return {
      services: services.data,
      applications: applications.data,
    }
  }
}
</script>

<style scoped>
  h2 {
    margin-top: 2em;
  }
</style>

<template>
  <div>
    <div class="dark">
      <h1>Marketplace</h1>
    </div>
    <div class="light">
      <div class="container">
        <section>
          <h2>Services</h2>
          <Grid :items="services">
            <ServiceCard slot-scope="{ item }" :service="item"/>
          </Grid>
        </section>
        <section>
          <h2>Applications</h2>
          <Grid :items="applications">
            <ApplicationCard slot-scope="{ item }" :application="item"/>
          </Grid>
        </section>
      </div>
    </div>
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
  h1 {
    text-align: center;
    padding: 1em;
  }
  h2 {
    padding-top: 2em;
  }
</style>

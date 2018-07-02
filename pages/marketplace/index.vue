<template>
  <div>
    <Title>Marketplace</Title>
    <div class="light">
      <div class="container">
        <section>
          <p>
            Welcome to the Marketplace, where services can be shared and reused. Building powerful applications is now just a matter of connecting the existing existing services below.
            Feeling creative? Get started building and deploying your own services using our <a href="https://github.com/mesg-foundation/awesome" target="_blank">Awesome Repository</a> on Github.
          </p>
        </section>
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
import Title from '~/components/Title'
export default {
  components: {
    Grid,
    ServiceCard,
    ApplicationCard,
    Title
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
    padding-top: 2em;
  }
  .container {
    padding: 0;
  }
  section:first-child {
    padding-top: 1em;
  }
  p {
    margin-top: 2em;
    text-align: justify;
  }
</style>

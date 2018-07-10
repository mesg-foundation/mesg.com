<template>
  <div>
    <Title>Marketplace</Title>
    <div class="light">
      <div class="container">
        <section>
          <p>
            Welcome to the Marketplace, where services can be shared and reused. Building powerful applications is now just a matter of connecting the existing existing services below.
          </p>
          <p>
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

const REGEXP = /^- \[(.*)\]\((http.*)\) - (.*)/

const filteredBody = (body, from, to) => {
  const lines = body.split("\n")
  return lines.slice(
    lines.indexOf(`# ${from}`),
    lines.indexOf(`# ${to}`)
  )
}

const extract = (body, from, to) => filteredBody(body, from, to)
  .map(x => x.match(REGEXP))
  .filter(x => x)
  .map(x => ({
    name: x[1],
    url: x[2],
    description: x[3]
  }))

export default {
  components: {
    Grid,
    ServiceCard,
    ApplicationCard,
    Title
  },
  async asyncData() {
    const { data } = await axios.get(`https://raw.githubusercontent.com/mesg-foundation/awesome/master/README.md`)
    return {
      services: extract(data, "Services", "Applications"),
      applications: extract(data, "Applications", "Contribution")
    }
  }
}
</script>

<style scoped>
  h2 {
    padding-top: 2em;
  }
  section:first-child {
    padding-top: 1em;
  }
  p {
    margin-top: 2em;
    text-align: justify;
  }
</style>

<template>
  <div class="light">
    <section class="container">
      <h2>Services</h2>
      <ul>
        <li
          class="shadow light"
          v-for="(service, i) in services" :key="i">
          <a :href="service.url" target="_blank">
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
          </a>
        </li>
      </ul>
    </section>
    <section class="container">
      <h2>Applications</h2>
      <ul>
        <li
          class="shadow light"
          v-for="(application, i) in applications" :key="i">
          <a :href="application.url" target="_blank">
            <h3>{{ application.name }}</h3>
            <p>{{ application.description }}</p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
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

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3em;
  }

  li {
    margin: .5em;
    transition: all 300ms;
  }

  li:hover {
    transform: translateY(-2px);
  }

  a {
    display: block;
    max-width: 100%;
    width: 250px;
    text-decoration: none;
    height: 100%;
  }

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    padding: 1em;
  }
</style>

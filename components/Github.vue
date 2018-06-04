<template>
  <section>
    <div class="container">
      <h1>Community driven</h1>
      <p>
        Come to join us to create this amazing tool that will help you and others to build applications with ease.
      </p>

      <main class="light shadow">
        <h2>
          Activity
          <a
            class="github-button"
            href="https://github.com/mesg-foundation/core"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star mesg-foundation/core on GitHub">
            Star
          </a>
        </h2>
        <nav>
          <Event v-for="event in events" :key="event.id" :event="event"></Event>
        </nav>
      </main>
    </div>
  </section>
</template>

<script>
import Event from '~/components/Event'
export default {
  components: {
    Event
  },
  data () {
    return {
      events: []
    }
  },
  async mounted() {
    const response = await fetch(`https://api.github.com/repos/mesg-foundation/core/issues/events?per_page=10`)
    this.events = await response.json()
  }
}
</script>

<style scoped>
  main {
    width: 600px;
    max-width: 100%;
    margin: auto;
    margin-top: 2em;
    border: solid 1px #f2f2f2;
  }

  h2 {
    padding: .75em;
    border-bottom: solid 1px #f2f2f2;
    display: flex;
    justify-content: space-between;
    margin: 0;
  }

  iframe {
    vertical-align: middle;
  }
</style>

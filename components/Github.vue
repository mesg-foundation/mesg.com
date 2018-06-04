<template>
  <section>
    <div class="container">
      <h1>Community driven</h1>
      <p>
        Come to join us to create this amazing tool that will help you and others to build applications with ease.
      </p>


      <div class="stats">
        <div>
          <Release v-if="release" :release="release"></Release>
          <trend
            :data="commits"
            :gradient="['rgba(20, 9, 48, 1)', '#28a745', '#28a745']"
            smooth>
          </trend>

        </div>

        <main class="activity light shadow bordered">
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
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Trend from 'vuetrend'
import Event from '~/components/Event'
import Release from '~/components/Release'

const ENDPOINT = 'https://api.github.com/repos/mesg-foundation/core'

export default {
  components: {
    Event,
    Release,
    Trend
  },
  data () {
    return {
      events: [],
      commits: [],
      release: {}
    }
  },
  async mounted() {
    const events = axios.get(`${ENDPOINT}/issues/events?per_page=10&access_token=${process.env.GITHUB_TOKEN}`)
    const commits = axios.get(`${ENDPOINT}/stats/participation?access_token=${process.env.GITHUB_TOKEN}`)
    const release = axios.get(`${ENDPOINT}/releases?per_page=1&access_token=${process.env.GITHUB_TOKEN}`)

    this.events = await events.then(({ data }) => data)
    this.commits = await commits.then(({ data }) => data.all)
    this.release = await release.then(({ data }) => data[0])
  }
}
</script>

<style scoped>
  .stats {
    display: flex;
    justify-content: space-around;
    margin-top: 2em;
  }

  main {
    max-width: 100%;
    width: 480px;
    margin: 1em;
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

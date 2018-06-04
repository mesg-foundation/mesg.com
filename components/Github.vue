<template>
  <section>
    <div class="container">
      <h1>Community driven</h1>
      <p>
        Come to join us to create this amazing tool that will help you and others to build applications with ease.
      </p>


      <div class="stats">
        <main class="statistics">
          {{ commits.length }}
          <trend
            :data="commits"
            :gradient="['rgba(20, 9, 48, 1)', '#28a745', '#28a745']"
            :height="50"
            :width="100"
            smooth>
          </trend>

          <div>
            <a :href="release.html_url" target="_blank">
              {{ release.name }}
            </a>
            <time>{{ release.created_at }}</time>
            <div v-html="release.html"></div>
            <ul>
              <li v-for="asset in release.assets" :key="asset.id">
                {{ asset.label }} -- {{ asset.name }} - {{ asset.size }} -- <a>download</a>
              </li>
            </ul>
          </div>
        </main>

        <main class="activity light shadow">
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

const ENDPOINT = 'https://api.github.com/repos/mesg-foundation/core'

export default {
  components: {
    Event,
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
    this.release = {
      ...this.release,
      html: await axios.post(`https://api.github.com/markdown?access_token=${process.env.GITHUB_TOKEN}`, {
        text: this.release.body,
      }).then(({ data }) => data)
    }
  }
}
</script>

<style scoped>
  .stats {
    display: flex;
    justify-content: space-around;
  }

  main {
    max-width: 100%;
    margin: auto;
    margin-top: 2em;
  }

  main.light {
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

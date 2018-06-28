<template>
  <section>
    <div class="container">
      <div class="marging">
        <h2>Community driven</h2>
        <p>
          Come join us in creating this amazing tool that helps users build applications with ease.
        </p>
      </div>

      <div class="stats">
        <Release v-if="release" :release="release">
          <trend
            :data="commits"
            :gradient="['rgba(20, 9, 48, 1)', '#28a745', '#28a745']"
            smooth>
          </trend>
        </Release>

        <main>
          <div class="activity light shadow bordered">
            <h3>
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
            </h3>
            <nav>
              <Event v-for="event in events" :key="event.id" :event="event"></Event>
            </nav>
          </div>
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
    const token = process.env.GITHUB_TOKEN
      ? `access_token=${process.env.GITHUB_TOKEN}`
      : ''
    const events = axios.get(`${ENDPOINT}/issues/events?per_page=10&${token}`)
    const commits = axios.get(`${ENDPOINT}/stats/participation?${token}`)
    const release = axios.get(`${ENDPOINT}/releases/latest?${token}`)


    this.events = await events.then(({ data }) => data)
    this.commits = await commits.then(({ data }) => data.all)
    this.release = await release.then(({ data }) => data)
  }
}
</script>

<style scoped>
  .container {
    padding: 0
  }
  .marging {
    margin: 0 20px;
  }
  .stats {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    flex-wrap: wrap;
  }

  main {
    max-width: 100%;
    width: 100%;
    padding: 0 20px
  }

  iframe {
    vertical-align: middle;
  }

  svg {
    width: auto;
    height: auto;
  }

  @media screen and (min-width: 1080px) {
    main {
      width: 540px;
    }
  }

</style>

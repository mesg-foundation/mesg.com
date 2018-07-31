<template>
  <section>
    <div class="container">
      <h2>Latest Articles</h2>
      <Grid class="grid" :items="articles">
        <ArticleCard slot-scope="{ item }" :article="item"></ArticleCard>
      </Grid>
      <a
        class="button hover button--success"
        href="https://medium.com/mesg"
        target="_blank" rel="noopener noreferrer">
        Read more →
      </a>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import ArticleCard from '~/components/ArticleCard'
import Grid from '~/components/Grid'
export default {
  components: {
    ArticleCard,
    Grid
  },
  data () {
    return {
      articles: []
    }
  },
  async mounted () {
    const url = "https://medium.com/feed/mesg"
    const endpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURI(url)}`
    this.articles = (await axios.get(endpoint)).data.items.slice(0, 4)
  }
}
</script>

<style scoped>
.grid {
  justify-content: center;
}
</style>

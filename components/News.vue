<template>
  <section id="articles">
    <Container flex column align-center>
      <h2 mb2>{{title}}</h2>
      <div flex row space-between wrap>
        <a
          v-for="article in articles"
          :key="article.id"
          :href="article.to"
          :id="article.id"
          target="_blank"
          third
          fill-height
          mb2
        >
          <Card p1 bordered>
            <img mb1 :src="article.img" :alt="article.title">
            <h4 mb1>{{ article.title }}</h4>
            <i class="far fa-external-link"></i>
          </Card>
        </a>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from "~/components/Container";
import Card from "~/components/Card";
export default {
  components: {
    Container,
    Card
  },
  props: {
    articles: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: "In the news"
    }
  }
};
</script>


<style scoped>
a {
  position: relative;
}

img {
  height: 20px;
  width: auto;
}

i {
  position: absolute;
  bottom: calc(var(--margin) + 6px);
  right: var(--margin);
  font-size: 1em;
  font-weight: bold;
  text-align: right;
}
</style>

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
            <img mb1 :src="article.img" :alt="article.title" />
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
      default: "News"
    }
  }
};
</script>


<style lang="scss" scoped>
a {
  position: relative;
  img {
    height: 25px;
    width: auto;
  }
  i {
    position: absolute;
    bottom: calc(#{$margin} + 6px);
    right: $margin;
    text-align: right;
  }
}
</style>

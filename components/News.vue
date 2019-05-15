<template>
  <section id="articles">
    <Container flex column align-center>
      <h2 mb2>{{title}}</h2>
      <div flex row space-between>
        <Card v-for="article in articles" :key="article.id" :id="article.id" p1 mb2 bordered>
          <img mb1 :src="article.img" :alt="article.title">
          <h4 mb1>{{ article.title }}</h4>
          <div class="icon">
            <i class="far fa-external-link"></i>
          </div>
        </Card>
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
img {
  height: 20px;
  width: auto;
}

.icon {
  text-align: right;
}

.card {
  margin-right: 20px;
}

.card:last-child {
  margin-right: 0;
}

i {
  font-size: 1em;
  font-weight: bold;
  text-align: right;
}
</style>

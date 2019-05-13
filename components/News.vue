<template>
  <section id="articles">
    <Container flex column align-center>
      <h2 mb2>In the news</h2>
      <div flex row space-between>
        <Card v-for="article in articles" :key="article.id" :id="article.id" p1 mb2 bordered>
          <img mb1 :src="article.img" :alt="article.title">
          <h4 mb1>{{ article.title }}</h4>
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
    id: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
  }
};
</script>


<style scoped>

img {
  height: 20px;
  width: auto;
}

.card {
  margin-right: 20px;
}

.card:last-child {
  margin-right: 0;
}
</style>

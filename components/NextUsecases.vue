<template>
  <section class="usecase" id="next">
    <Container>
      <div flex row wrap>
        <nuxt-link
          v-for="usecase in nextUsecases"
          :key="usecase.id"
          :to="usecase.to"
          :id="usecase.id"
          third
          fill-height
          mb2
        >
          <Card p1 bordered>
            <div mb2 flex row space-between class="logos">
              <img v-for="(logo, i) in usecase.logos" :key="i" :src="logo" />
            </div>
            <p class="category" mb1>{{ usecase.category}}</p>
            <h4 mb1>{{ usecase.title }}</h4>
            <p mb1>{{ usecase.description}}</p>
            <i class="fa fa-arrow-right"></i>
          </Card>
        </nuxt-link>
      </div>
    </Container>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Container from "~/components/Container";
import Button from "~/components/Button";
import Card from "~/components/Card";
export default {
  components: {
    Container,
    Button,
    Card
  },
  asyncData({ store, params, error }) {
    const usecase = store.getters.usecases.find(x => x.id === params.id);
    if (!usecase) {
      return error({ statusCode: 404, message: "Usecase not found" });
    }
    return { usecase };
  },
  props: {
    src: {
      type: String
    }
  },
  computed: {
    ...mapGetters({
      links: "links",
      usecases: "usecases"
    }),
    nextUsecases() {
      const index = this.usecases.findIndex(x => x.id === this.usecase.id) + 1;
      const end = index + 3;
      if (end > this.usecases.length) {
        return [
          ...this.usecases.slice(index),
          ...this.usecases.slice(0, end % this.usecases.length)
        ];
      } else {
        return this.usecases.slice(index, end);
      }
    }
  }
};
</script>

<style scoped>
.usecase .card {
  margin: 0;
}
.usecase a {
  position: relative;
}
.usecase img {
  min-width: 10%;
  max-width: 100%;
  min-height: 10%;
  max-height: 80px;
}
.usecase .logos::before {
  content: "";
  position: absolute;
  top: 20px;
  height: 80px;
  width: 0.1em;
  left: 50%;
  background-color: var(--light-purple);
}
.usecase .category {
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--purple);
}
.usecase i {
  position: absolute;
  bottom: calc(var(--margin) + 6px);
  right: var(--margin);
  font-size: 1em;
  font-weight: bold;
  text-align: right;
}
</style>
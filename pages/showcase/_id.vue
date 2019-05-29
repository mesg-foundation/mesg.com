<template>
  <div>
    <Header :picture="require('~/assets/showcase.svg')" :title="title" :description="description"></Header>

    <section id="usecase">
      <Container flex column align-center class="intro">
        <h2 mb1>{{ usecase.technology }}</h2>
        <p mb2 class="text-center product-desc">{{ usecase.paragraphe }}</p>
      </Container>
      <Container mb3>
        <div flex row space-between align-center wrap mb3>
          <div half>
            <img :src="usecase.image">
          </div>
          <div half>
            <Card p2 column flex space-between>
              <h3 mb1>Challenges</h3>
              <p mb2>{{ usecase.challenges }}</p>
              <h3 mb1>Goals</h3>
              <p>{{ usecase.goals}}</p>
            </Card>
          </div>
        </div>
        <div flex row space-between align-center wrap>
          <div half>
            <Card p2 column flex space-between>
              <h3 mb1>Benefits</h3>
              <ul mb1>
                <li v-for="(benefit, i) in usecase.benefits" :key="i" mb1>{{ benefit }}</li>
              </ul>
              <h3 mb1>Opportunities</h3>
              <ul mb1>
                <li
                  v-for="(opportunitie, i) in usecase.opportunities"
                  :key="i"
                  mb1
                  class="opportunitie"
                >{{ opportunitie }}</li>
              </ul>
            </Card>
          </div>
          <div half>
            <img :src="usecase.image">
          </div>
        </div>
      </Container>
    </section>

    <section id="information">
      <Container flex column align-center mb3>
        <h3 mb1>More information</h3>
        <p class="text-center" mb2>{{usecase.information}}</p>
        <Button secondary :href="usecase.article" target="_blank">Read the full article</Button>
      </Container>
    </section>

    <hr mb3>

    <section id="title-next">
      <Container>
        <h2 mb2>More use cases</h2>
      </Container>
    </section>
    <section class="inner-background usecase" id="next">
      <Container>
        <div flex row wrap>
          <nuxt-link
            v-for="usecase in usecases"
            :key="usecase.id"
            :to="usecase.to"
            :id="usecase.id"
            third
            fill-height
            mb2
          >
            <Card p1 bordered>
              <div mb2 flex row space-between class="logos">
                <img v-for="(logo, i) in usecase.logos" :key="i" :src="logo">
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

    <CallToAction
      mb3
      title="Integrate complexities with confidence"
      description="Receive priority technical support from a team of engineers dedicated to your project, day or night."
      :links="[{ title: 'Enterprise solutions' , to: links.enterprise }]"
    />

    <Discover mb3 left="engine" right="marketplace"/>

    <GetStarted mb3/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Container from "~/components/Container";
import Button from "~/components/Button";
import Card from "~/components/Card";
import CallToAction from "~/components/CallToAction";
import Discover from "~/components/Discover";
import GetStarted from "~/components/GetStarted";
import page from "../page";

export default {
  components: {
    Header,
    Container,
    Button,
    Card,
    CallToAction,
    Discover,
    GetStarted
  },
  mixins: [
    page(x => ({
      title: x.usecase.title,
      description: x.usecase.description
    }))
  ],
  props: {
    src: {
      type: String
    }
  },
  computed: {
    ...mapGetters({
      links: "links",
      usecases: "usecases",
      externalLinks: "externalLinks"
    }),
    usecase() {
      return this.usecases.find(x => x.id === this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.card {
  margin: 12px;
}
ul {
  list-style: none;
}
li {
  font-weight: normal;
}
li::before {
  content: "";
  width: 7px;
  height: 7px;
  margin-right: 15px;
  background-color: var(--deep-purple);
  border-radius: 100%;
  display: inline-block;
}

li.opportunitie:last-child {
  margin-bottom: 0 !important;
}

/*next use case*/
.usecase .card {
  margin: 0;
  border: solid 0 var(--light-purple);
  border-bottom-width: 6px;
  border-bottom-color: var(--purple);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
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

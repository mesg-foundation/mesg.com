<template>
  <div>
    <Header :picture="require('~/assets/showcase.svg')" :title="title" :description="description"></Header>

    <section id="use cases">
      <Container flex column align-center>
        <h2 mb2>MESG Use Cases</h2>
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
                <img v-for="(logo, i) in usecase.logos" :key="i" :src="logo.src" :alt="logo.alt">
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
      title="Accelerate your business with MESG"
      description="MESG is built for efficiency and scalability. Create or share app integrations to adopt new features or even enter new industries, then scale limitlessly with a decentralized network."
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
import page from "./page";

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
    page({
      title: "Showcase",
      description:
        "Not sure what to build? Get inspired by some examples showing the wide range of possibilities offered."
    })
  ],
  props: {
    src: {
      type: String
    }
  },
  computed: mapGetters({
    links: "links",
    usecases: "usecases"
  })
};
</script>

<style scoped>
a {
  position: relative;
}

img {
  min-width: 10%;
  max-width: 100%;
  min-height: 10%;
  max-height: 80px;
}
.logos::before {
  content: "";
  position: absolute;
  top: 20px;
  height: 80px;
  width: 0.1em;
  left: 50%;
  background-color: var(--light-purple);
}

.category {
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--purple);
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

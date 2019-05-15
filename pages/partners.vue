<template>
  <div>
    <Header
      mb3
      :picture="require('~/assets/partners.svg')"
      :title="title"
      :description="description"
    >
      <div flex row>
        <Button :to="links.demo" primary>Become a partner</Button>
        <span spacer></span>
      </div>
    </Header>

    <section id="investors" mb3>
      <Container>
        <h2 mb3>Invested in and incubated by</h2>
      </Container>
      <Container>
        <TextWithSchema
          v-for="(partner, i) in partners.primary"
          :key="i"
          v-bind="partner"
          :reverse="i % 2 === 1"
          mb3
        />
      </Container>
    </section>

    <hr mb3>

    <section id="partners" mb3>
      <Container>
        <h2 mb3>Our trusted partners</h2>
      </Container>
      <Container>
        <TextWithSchema
          v-for="(partner, i) in partners.secondary"
          :key="i"
          v-bind="partner"
          :reverse="i % 2 === 1"
          mb3
        />
      </Container>
    </section>

    <CallToAction
      mb3
      title="Accelerate your business with MESG"
      description="MESG is built for efficiency and scalability. Create or share app integrations to adopt new features or even enter new industries, then scale limitlessly with a decentralized network."
      :links="[{ title: 'Become a partner' , to: links.enterprise }]"
    />

    <Discover mb3 left="token" right="enterprise"/>

    <GetStarted mb3/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Button from "~/components/Button";
import Container from "~/components/Container";
import CallToAction from "~/components/CallToAction";
import Discover from "~/components/Discover";
import GetStarted from "~/components/GetStarted";
import TextWithSchema from "~/components/TextWithSchema";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    CallToAction,
    Discover,
    GetStarted,
    TextWithSchema
  },
  mixins: [
    page({
      title: "Investors and Partners",
      description:
        "Generous investments by Yellow Capital have enabled MESG to provide top service to our partners across various industries."
    })
  ],
  computed: {
    ...mapGetters({
      partners: "partners",
      links: "links"
    })
  }
};
</script>

<template>
  <div>
    <Header
      :picture="require('~/assets/engine/engine.svg')"
      :title="title"
      :description="description"
    >
      <div class="btn-center">
        <Button :href="externalLinks.getStarted" target="_blank" primary>Get started</Button>
      </div>
    </Header>

    <section id="features" mb3>
      <Container flex row space-between wrap>
        <TextWithIcon
          v-for="(feature, i) in engine.features.secondary"
          :key="i"
          :src="feature.src"
          :title="feature.title"
          :text="feature.description"
          third
        />
      </Container>
    </section>

    <section id="interoperability" mb3>
      <Container class="intro text-center">
        <h2 mb1>Effortless interoperability</h2>
        <p
          mb2
          class="description"
        >The SDK is built for constructing and managing components within modular applications. Add nearly any feature to any app without the headache.</p>
        <a
          mb2
          href="/documents/MESG-application-of-the-decentralized-network-of-services.pdf"
          download
        >
          Technical implementation
          <i class="fas fa-download icon" ml1></i>
        </a>
      </Container>
      <div class="outer-background">
        <Container>
          <Feature
            v-for="(feature, i) in engine.features.primary"
            :key="i"
            v-bind="feature"
            :reverse="i % 2 === 1"
            mb2
          />
        </Container>
      </div>
    </section>

    <section id="usecase" mb3>
      <Container>
        <h2 class="text-center" mb3>Use Cases</h2>
        <div flex row wrap mb1>
          <TextWithIcon
            half
            v-for="(usecase, i) in engine.usecase"
            :key="i"
            :src="usecase.src"
            :title="usecase.title"
            :text="usecase.description"
          />
        </div>

        <div class="text-center button" mb3>
          <Button secondary :to="links.showcase">App Showcase</Button>
        </div>
      </Container>
    </section>

    <hr mb3 />

    <section mb3>
      <Container>
        <div flex row mobile-column-reverse align-center>
          <div half>
            <h2 mb1>Github</h2>
            <p
              mb1
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus id nunc suscipit volutpat. Curabitur ac sodales elit.Lorem ipsum dolor sit amet, consectetur.</p>
            <Button secondary :href="externalLinks.github">Explore our Github</Button>
          </div>
          <div half p1>
            <img src="~/assets/token/MESG-token.svg" alt="token" />
          </div>
        </div>
      </Container>
    </section>

    <hr mb3 />

    <section mb3>
      <Container>
        <div flex row mobile-column align-center>
          <div half>
            <h3 mb1>Community</h3>
            <p
              mb2
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus id nunc suscipit volutpat.</p>
          </div>
          <div half>
            <ListSN one="telegram" two="forum" three four five six/>
          </div>
        </div>
      </Container>
    </section>

    <CTA
      title="Get started"
      description="MESG is free to start and only takes moments to install. Build more with less effort."
      href="https://docs.mesg.com/guide/quick-start-guide.html"
      action="Get started"
      mb1
    />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Card from "~/components/Card";
import CTA from "~/components/CTA";
import ListSN from "~/components/ListSN";
import TextWithIcon from "~/components/TextWithIcon";
import Feature from "~/components/Feature";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    Card,
    CTA,
    ListSN,
    TextWithIcon,
    Feature
  },
  mixins: [
    page({
      title: "MESG SDK",
      description:
        "An open event channel and CLI for building and running modular applications. Control the flow of data and level of security between your whole stack of connected systems."
    })
  ],
  computed: {
    ...mapGetters({
      products: "products",
      links: "links",
      externalLinks: "externalLinks"
    }),
    engine() {
      return this.products.find(x => x.id === "engine");
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: $mobile-breakpoint) {
  #interoperability .intro {
    padding-bottom: 0;
  }
}
</style>








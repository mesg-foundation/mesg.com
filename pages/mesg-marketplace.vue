<template>
  <div>
    <Header
      :picture="require('~/assets/marketplace/marketplace.svg')"
      :title="title"
      :description="description"
    >
      <div class="btn-center">
        <Button :href="externalLinks.marketplace" target="_blank" primary>MESG Marketplace</Button>
      </div>
    </Header>

    <section id="features" mb3>
      <Container flex row space-between wrap>
        <TextWithIcon
          v-for="(feature, i) in marketplace.features.secondary"
          :key="i"
          :src="feature.src"
          :title="feature.title"
          :text="feature.description"
          third
        />
      </Container>
    </section>

    <section id="network-of-services" mb3>
      <Container class="intro text-center">
        <h2 mb1>A decentralized network of services</h2>
        <p
          mb2
          class="description"
        >Our marketplace of app components and executions is a key part of our vision to create a decentralized network of services.</p>
        <a mb2 href="/documents/decentralized-network-of-services.pdf" download>
          Whitepaper
          <i class="fas fa-download icon" ml1></i>
        </a>
      </Container>
      <div class="outer-background">
        <Container>
          <Feature
            v-for="(feature, i) in marketplace.features.primary"
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
        <h2 mb3>Use Cases</h2>
        <div flex row wrap mb1>
          <TextWithIcon
            half
            v-for="(usecase, i) in marketplace.usecase"
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

    <CallToAction
      mb3
      title="Integrate complexities with confidence"
      description="Receive priority technical support from a team of engineers dedicated to your project, day or night."
      :links="[{ title: 'Enterprise solutions' , to: links.enterprise }]"
    />

    <GetStarted mb3 />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Button from "~/components/Button";
import Container from "~/components/Container";
import CallToAction from "~/components/CallToAction";
import GetStarted from "~/components/GetStarted";
import TextWithIcon from "~/components/TextWithIcon";
import Feature from "~/components/Feature";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    CallToAction,
    GetStarted,
    TextWithIcon,
    Feature
  },
  mixins: [
    page({
      title: "MESG Marketplace",
      description:
        "The new economy for buying and selling access to modular app components. Easily implement new application features, or earn royalties from the services you create."
    })
  ],
  computed: {
    ...mapGetters({
      products: "products",
      links: "links",
      externalLinks: "externalLinks"
    }),
    marketplace() {
      return this.products.find(x => x.id === "marketplace");
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: $mobile-breakpoint) {
  #network-of-services .intro {
    padding-bottom: 0;
  }
}
</style>


<template>
  <div>
    <Header
      mb3
      :picture="require('~/assets/marketplace/marketplace.svg')"
      :title="title"
      :description="description"
    >
      <div>
        <Button :to="links.enterprise" primary mr2>Enterprise solutions</Button>
        <Button :href="externalLinks.marketplace" target="_blank" secondary>The Marketplace</Button>
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
      <Container>
        <h2 mb1>A decentralized network of services</h2>
        <p
          mb2
          class="text-center"
        >Our marketplace of app components and executions is a key part of our vision to create a decentralized network of services.</p>
      </Container>
      <div class="inner-background">
        <Container>
          <Feature
            v-for="(feature, i) in marketplace.features.primary"
            :key="i"
            v-bind="feature"
            :reverse="i % 2 === 1"
            mb3
          />
        </Container>
      </div>
    </section>

    <section id="usecase" mb3>
      <Container>
        <h2 mb2>MESG Marketplace Use Cases</h2>
        <div flex row wrap>
          <TextWithIcon
            half
            v-for="(usecase, i) in marketplace.usecase"
            :key="i"
            :src="usecase.src"
            :title="usecase.title"
            :text="usecase.description"
          />
        </div>
        <!--
        <div class="text-center">
          <Button secondary :to="links.showcase">App Showcase</Button>
        </div>
        -->
      </Container>
    </section>

    <hr mb3>

    <section id="token">
      <Container>
        <div flex row space-between align-center wrap>
          <div half>
            <img
              src="~/assets/marketplace/token-marketplace.svg"
              alt="The MESG Token and Marketplace"
            >
          </div>
          <div half>
            <h2 class="text-left" mb1>The MESG Token and Marketplace</h2>
            <p
              mb2
            >The MESG Token can be used to purchase access to services in the Marketplace. Once decentralized, the Token will also be used to secure and power the network.</p>
            <Button outline :to="links.token">Discover the MESG Token</Button>
          </div>
        </div>
      </Container>
    </section>

    <CallToAction
      mb3
      title="Integrate complexities with confidence"
      description="Receive priority technical support from a team of engineers dedicated to your project, day or night."
      :links="[{ title: 'Enterprise solutions' , to: links.enterprise }]"
    />

    <Discover mb3 left="engine" right="foundation"/>

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
import TextWithIcon from "~/components/TextWithIcon";
import Feature from "~/components/Feature";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    CallToAction,
    Discover,
    GetStarted,
    TextWithIcon,
    Feature
  },
  mixins: [
    page({
      title: "MESG Marketplace",
      description:
        "The new economy for buying and selling modular application components. Choose new application features, or monetize off the ones you create."
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

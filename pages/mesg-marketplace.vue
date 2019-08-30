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
        <h2 class="text-center" mb3>Use Cases</h2>
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

        <div class="text-center" mb3>
          <Button secondary :to="links.showcase">App Showcase</Button>
        </div>
      </Container>
    </section>

    <hr mb3 />

    <section mb3>
      <Container>
        <div flex row mobile-column align-center>
          <div half>
            <h3 mb1>Help & Guidance</h3>
            <p
              mb2
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus id nunc suscipit volutpat.</p>
          </div>
          <div half>
            <ListSN one="telegram" two="forum" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      title="Marketplace"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus id nunc suscipit volutpat. Curabitur ac sodales elit."
      :links="[{ title: 'MESG Marketplace' , href: externalLinks.marketplace }]"
      mb1
    />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Button from "~/components/Button";
import Container from "~/components/Container";
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
    CTA,
    ListSN,
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
  .intro {
    padding-bottom: 0;
  }
}
</style>


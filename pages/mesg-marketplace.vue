<template>
  <div>
    <Header
      :picture="require('~/assets/marketplace/marketplace.svg')"
      :title="title"
      :description="description"
    >
      <div>
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

    <section id="presentation" mb3>
      <Container class="intro text-center">
        <h2 mb1>A decentralized network of services</h2>
        <p
          mb2
        >Our marketplace of app components and executions is a key part of our vision to create a decentralized network of services.</p>
        <Button
          secondary
          mb2
          href="/documents/decentralized-network-of-services.pdf"
          download
          icon="fal fa-file-download"
        >Whitepaper</Button>
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

    <section id="use-cases" mb3>
      <Container>
        <h2 class="text-center" mb2>Use Cases</h2>
        <div flex row wrap mb1 class="usecases">
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

    <section>
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section id="more-infos" mb3>
      <Container>
        <div flex row mobile-column align-center>
          <div half>
            <h3 mb1>Help & Guidance</h3>
            <p
              mb2
            >Have questions or not sure where to start? Head over to Discord to chat with the team, or browse the forum.</p>
          </div>
          <div half>
            <ListSN :list="[icons.discord, icons.forum]" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      icon="fal fa-store"
      title="Marketplace"
      description="MESG Marketplace beta is out now. Earn tokens when your services are used or save time by purchasing access to services."
      :links="[{ title: 'MESG Marketplace' , href: externalLinks.marketplace }]"
      mb1
    />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Button from "@mesg-components/button";
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
      externalLinks: "externalLinks",
      icons: "icons"
    }),
    marketplace() {
      return this.products.find(x => x.id === "marketplace");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
@media only screen and (max-width: $mobile-breakpoint) {
  .intro {
    padding-bottom: 0;
  }
  .usecases {
    margin-bottom: calc(#{$margin} * 2) !important;
  }
}
</style>


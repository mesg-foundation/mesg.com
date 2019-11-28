<template>
  <div>
    <Header
      :picture="require('~/assets/engine/engine.svg')"
      :title="title"
      :description="description"
    >
      <div>
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

    <section id="presentation" mb3>
      <Container class="intro text-center">
        <h2 mb1>Effortless interoperability</h2>
        <p
          mb2
        >The SDK is built for constructing and managing components within modular applications. Add nearly any feature to any app without the headache.</p>
        <Button
          secondary
          mb2
          href="/documents/MESG-application-of-the-decentralized-network-of-services.pdf"
          download
          icon="fas fa-download"
        >Technical implementation</Button>
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

    <section id="use-cases" mb3>
      <Container>
        <h2 class="text-center" mb2>Use Cases</h2>
        <div flex row wrap mb1 class="usecases">
          <TextWithIcon
            half
            v-for="(usecase, i) in engine.usecase"
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

    <section id="github" mb3>
      <Container>
        <div flex row mobile-column-reverse align-center>
          <div half>
            <h2 mb1>Github</h2>
            <p
              mb1
            >Devs, join in on the fun! Everyone has free and open access to all assets, repos and docs. MESG is open-source and is built by contributors from all over the world.</p>
            <Button secondary :href="externalLinks.github" target="_blank">Explore our Github</Button>
          </div>
          <div half p1>
            <img src="~/assets/github.svg" alt="github" />
          </div>
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
            >The MESG Forum and Github are built to support the community. Browse existing issues and solutions, or create a new one.</p>
          </div>
          <div half>
            <ListSN :list="[icons.github, icons.forum]" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      title="Get started"
      description="MESG is free to start and only takes moments to install. Build more with less effort."
      :links="[{ title: 'Get started' , href: externalLinks.getStarted }]"
      mb1
    />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Button from "@mesg-components/button";
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
      externalLinks: "externalLinks",
      icons: "icons"
    }),
    engine() {
      return this.products.find(x => x.id === "engine");
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: $mobile-breakpoint) {
  .intro {
    padding-bottom: 0;
  }
  .usecases {
    margin-bottom: calc(var(--margin) * 2) !important;
  }
}
</style>








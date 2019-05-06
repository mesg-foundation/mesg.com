<template>
  <div>
    <Header
      mb3
      :picture="require('~/assets/product/engine/engine.png')"
      :title="title"
      :description="description"
    >
      <div flex row>
        <Button :to="links.enterprise" primary>Enterprise Solutions</Button>
        <Button :to="links.getStarted" secondary>Get Started</Button>
      </div>
    </Header>

    <section id="features" mb3>
      <Container flex row space-between>
        <TextWithIcon
          v-for="(feature, i) in engine.features.secondary"
          :key="i"
          :src="feature.src"
          :title="feature.title"
          :text="feature.description"
        />
      </Container>
    </section>

    <section id="interoperability" mb3>
      <Container>
        <h2 mb1>Enabling effortless interoperability</h2>
        <p
          mb2
          class="text-center"
        >The MESG Engine is built for efficient management of components within modular applications. Add nearly any feature to any app without the headache.</p>
      </Container>
      <div class="with-background">
        <Container>
          <Feature
            v-for="(feature, i) in engine.features.primary"
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
        <h2 mb2>MESG Engine Use Cases</h2>
        <div flex row wrap>
          <TextWithIcon
            half
            v-for="(usecase, i) in engine.usecase"
            :key="i"
            :src="usecase.src"
            :title="usecase.title"
            :text="usecase.description"
          />
        </div>
        <div class="text-center">
          <Button secondary :to="links.showcase">App Showcase</Button>
        </div>
      </Container>
    </section>

    <hr mb3>

    <section id="token">
      <Container>
        <div flex row space-between align-center>
          <div>
            <img src="~/assets/product/engine/token-engine.png" alt="The MESG Token and Engine">
          </div>
          <div>
            <h2 class="text-left" mb1>The MESG Token and Engine</h2>
            <p
              mb2
            >The MESG Engine is free to use locally. For partially or fully decentralized apps, the Engine will use the MESG Token to reward network participants who manage and secure executions.</p>
            <Button outline :to="links.token">Discover the MESG Token</Button>
          </div>
        </div>
      </Container>
    </section>

    <section id="enterprise" mb3>
      <Container>
        <PrimaryCallToAction
          title="Streamline your business with MESG"
          description="Optimize processes and automate workflows between your whole stack of connected systems."
          :links="[{ title: 'Enterprise solutions' , to: links.enterprise }]"
        />
      </Container>
    </section>

    <section id="discover" mb3>
      <Container>
        <SecondaryCallToAction
          title="Discover more about MESG"
          :left="{ title: 'MESG Marketplace', description: 'Speed up application development and earn from sharing your code.', link: 'Access MESG Marketplace', to: links.marketplace }"
          :right="{ title: 'MESG Foundation', description: 'MESG is developed for the MESG Foundation, a nonprofit organization.', link: 'Visit MESG Foundation', to: links.foundation }"
        />
      </Container>
    </section>

    <section id="get-started" mb3>
      <Container>
        <CardCallToAction
          title="Discover more about MESG"
          description="MESG is free to start and only takes moments to install. Build more with less effort."
          action="Get Started"
          :to="links.getStarted"
          :links="[externalLinks.documentation, externalLinks.marketplace, externalLinks.github]"
        />
      </Container>
    </section>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Card from "~/components/Card";
import PrimaryCallToAction from "~/components/callToAction/Primary";
import SecondaryCallToAction from "~/components/callToAction/Secondary";
import CardCallToAction from "~/components/callToAction/Card";
import TextWithIcon from "~/components/TextWithIcon";
import Feature from "~/components/Feature";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    Card,
    PrimaryCallToAction,
    SecondaryCallToAction,
    CardCallToAction,
    TextWithIcon,
    Feature
  },
  mixins: [
    page({
      title: "MESG Engine",
      description:
        "An open event channel and CLI for building and hosting modular applications. Control the flow of data and level of security between your whole stack of connected systems."
    })
  ],
  computed: {
    ...mapGetters({
      products: "products",
      externalLinks: "externalLinks",
      links: "links"
    }),
    engine() {
      return this.products.find(x => x.id === "engine");
    }
  }
};
</script>

<style>
#interoperability .container > p {
  max-width: 680px;
  margin: auto;
}
#interoperability .card {
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>

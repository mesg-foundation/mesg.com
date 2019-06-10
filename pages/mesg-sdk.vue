<template>
  <div>
    <Header
      :picture="require('~/assets/engine/engine.svg')"
      :title="title"
      :description="description"
    >
      <div>
        <Button :to="links.enterprise" primary mr2>Enterprise solutions</Button>
        <Button :href="externalLinks.getStarted" target="_blank" secondary>Get started</Button>
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
          class="feature"
        />
      </Container>
    </section>

    <section id="interoperability" mb3>
      <Container>
        <h2 mb1>Enabling effortless interoperability</h2>
        <p
          mb2
          class="text-center description"
        >The MESG SDK is built for constructing and managing components within modular applications. Add nearly any feature to any app without the headache.</p>
      </Container>
      <div class="inner-background">
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
        <h2 mb2>MESG SDK Use Cases</h2>
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

    <hr class="separator" mb3>

    <section id="token">
      <Container>
        <div flex row space-between align-center wrap>
          <div half>
            <img src="~/assets/engine/token-engine.svg" alt="The MESG Token and SDK">
          </div>
          <div half>
            <h2 class="text-left" mb1>The MESG Token and SDK</h2>
            <p
              mb2
            >The tools of the MESG SDK are free to use locally. However, in order to build variably decentralized apps, MESG Tokens will be required to reward network participants who manage and secure executions.</p>
            <Button outline :to="links.token">Discover the MESG Token</Button>
          </div>
        </div>
      </Container>
    </section>

    <CallToAction
      mb3
      title="Streamline your business with MESG"
      description="Optimize processes and automate workflows between your whole stack of connected systems."
      :links="[{ title: 'Enterprise solutions' , to: links.enterprise }]"
    />

    <Discover mb3 left="marketplace" right="foundation"/>

    <GetStarted mb3/>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Card from "~/components/Card";
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
    Card,
    CallToAction,
    Discover,
    GetStarted,
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







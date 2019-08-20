<template>
  <div>
    <Header
      :picture="require('~/assets/workflows/workflows.svg')"
      :title="title"
      :description="description"
    >
      <div class="btn-center">
        <Button :to="links.enterprise" primary mr2>Start building</Button>
      </div>
    </Header>

    <section id="features" mb3>
      <Container flex row space-between wrap>
        <TextWithIcon
          v-for="(feature, i) in workflows.features.secondary"
          :key="i"
          :src="feature.src"
          :title="feature.title"
          :text="feature.description"
          third
          class="feature"
        />
      </Container>
    </section>

    <section id="community" mb3>
      <Container class="intro">
        <h2 mb1>Community-driven Workflows</h2>
        <p
          mb2
          class="text-center description"
        >Build workflows using an open-source decentralized system built upon a global economy where every user is a cloud provider.</p>
      </Container>
      <div class="inner-background">
        <Container>
          <Feature
            v-for="(feature, i) in workflows.features.primary"
            :key="i"
            v-bind="feature"
            :reverse="i % 2 === 1"
            mb3
          />
        </Container>
      </div>
    </section>

    <CallToAction
      mb3
      title="Streamline your business"
      description="Optimize processes and automate workflows between your whole stack of connected systems."
      :links="[{ title: 'Enterprise solutions' , to: links.enterprise }]"
    />

    <Discover mb3 left="engine" right="marketplace" />

    <GetStarted mb3 />
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
      title: "Workflows",
      description:
        "A distributed service-orchestration system for automated app testing, deployment, scaling and management."
    })
  ],
  computed: mapGetters({
    links: "links",
    externalLinks: "externalLinks",
    workflows: "workflows"
  })
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: $mobile-breakpoint) {
  #community .intro {
    padding-bottom: 0;
  }
}
</style>








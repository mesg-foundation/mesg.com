<template>
  <div>
    <Header
      :picture="require('~/assets/orchestrator.svg')"
      :title="title"
      :description="description"
    >
      <Button :href="externalLinks.process" primary target="_blank">Start building</Button>
    </Header>

    <section id="features" mb3>
      <Container flex row space-between wrap>
        <TextWithIcon
          v-for="(feature, i) in orchestrator.features.secondary"
          :key="i"
          :src="feature.src"
          :title="feature.title"
          :text="feature.description"
          third
          class="feature"
        />
      </Container>
    </section>

    <section id="config" mb3>
      <Container class="intro text-center">
        <h2 mb1>Feature-based applications</h2>
        <p>Orchestrate services to create features for your applications. After all, what is an application but a collection of features?</p>
      </Container>
      <div class="outer-background" pt3 pb3>
        <Container>
          <div flex row space-between align-center wrap>
            <div half>
              <Code class="code" />
            </div>
            <div half>
              <Titletext3
                title="Describe your feature"
                text="Orchestrate your application by connecting the events and tasks from any service with a process.</br></br>Implement complex technologies like blockchains and AI without managing the complexities.</br></br>Any existing services from the Marketplace can be used to create features, or users can write new services using any language.</br></br>Currently, services can be orchestrated by writing a process file, and soon, other formats will become available like a UI and Turing-complete programming languages."
              />
            </div>
          </div>
        </Container>
      </div>
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
      title="Build faster with MESG Orchestrator"
      description="Start creating feature-rich software today with a simple process file."
      mb1
    >
      <Button :href="externalLinks.process" target="_blank" white>Start building</Button>
    </CTA>
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
import Titletext3 from "~/components/Titletext3";
import Code from "~/components/Code";
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
    Titletext3,
    Code
  },
  mixins: [
    page({
      title: "MESG Orchestrator",
      description:
        "Build feature-based applications through the orchestration of MESG services."
    })
  ],
  computed: mapGetters({
    links: "links",
    externalLinks: "externalLinks",
    orchestrator: "orchestrator",
    icons: "icons"
  })
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: $mobile-breakpoint) {
  .code {
    margin-bottom: calc(var(--margin) * 2);
  }
}
</style>








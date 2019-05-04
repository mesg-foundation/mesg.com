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
        <div v-for="(feature, i) in engine.features" :key="i">
          <img mb1 :src="feature.src" :alt="feature.title">
          <h4 mb1>{{ feature.title }}</h4>
          <p>{{ feature.description }}</p>
        </div>
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
          <div mb4 flex row space-between>
            <div half>
              <img src="~/assets/product/engine/mesg-tech.png">
            </div>
            <Card half p2 column flex space-between>
              <h3 mb1>Integrate complicated tech easily</h3>
              <p mb2>
                Any API or microservice can be connected to any app or workflow. Even connect apps to hard-to-reach technologies like blockchains, IoT devices, or custom software.
                <br>
                <br>The Engine manages and forwards events between all components so each component can stand on its own, making it simple to add, remove or update any component.
              </p>
              <span spacer/>
              <Button outline :to="links.getStarted">Quick start</Button>
            </Card>
          </div>
          <div flex row space-between>
            <Card half p2 column flex space-between>
              <h3 mb1>No wasted development hours</h3>
              <p mb2>
                A fundamental principle at MESG is DRY: Don’t Repeat Yourself. Core allows you to reuse any app component; and not just from your apps, but from the community’s apps too.
                <br>
                <br>After components are built, either keep them private, or share them and earn in the Marketplace.
              </p>
              <span spacer/>
              <Button outline :to="links.marketplace">Go to the Marketplace</Button>
            </Card>
            <div half>
              <img src="~/assets/product/engine/mesg-development.png">
            </div>
          </div>
        </Container>
      </div>
    </section>

    <section id="usecase">
      <Container>
        <h2 mb2>MESG Engine Use Cases</h2>
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
          to="/"
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
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    Card,
    PrimaryCallToAction,
    SecondaryCallToAction,
    CardCallToAction
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
#features img {
  height: 50px;
  width: 50px;
}
#interoperability .container > p {
  max-width: 680px;
  margin: auto;
}
#interoperability .card {
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>

<template>
  <div>
    <Header
      mb3
      :picture="require('~/assets/product/marketplace/marketplace.png')"
      :title="title"
      :description="description"
    >
      <div flex row>
        <Button :to="links.enterprise" primary>Enterprise Solutions</Button>
        <Button :to="links.marketplace" secondary>The Marketplace</Button>
      </div>
    </Header>

    <section id="features" mb3>
      <Container flex row space-between>
        <TextWithIcon
          v-for="(feature, i) in engine.features"
          :key="i"
          :src="feature.src"
          :title="feature.title"
          :text="feature.description"
        />
      </Container>
    </section>

    <section id="interoperability" mb3>
      <Container>
        <h2 mb1>A decentralized network of services</h2>
        <p
          mb2
          class="text-center"
        >Our marketplace of app components and executions is a key part of our vision to create a decentralized network of services.</p>
      </Container>
      <div class="with-background">
        <Container>
          <div mb4 flex row space-between>
            <div half>
              <img src="~/assets/product/engine/mesg-tech.png">
            </div>
            <Card half p2 column flex space-between>
              <h3 mb1>Marketplace and Engine</h3>
              <p mb2>
                Our Marketplace is built to be complementary to the free, open-source MESG Engine. All Modules in the Marketplace come automatically compatible with the Engine.
                <br>
                <br>No more installing libraries or learning data formats before adding new features. Plug any feature or component into any app.
              </p>
              <span spacer/>
              <Button outline :to="links.marketplace">Go to the Marketplace</Button>
            </Card>
          </div>
          <div flex row space-between>
            <Card half p2 column flex space-between>
              <h3 mb1>Decentralized executions</h3>
              <p mb2>
                The Marketplace will soon be decentralized, with all Modules and applications interacting in a variably decentralized way.
                <br>
                <br>When executions are not dependent on a single server or machine, apps can become unstoppable, distributed, and always available.
              </p>
              <span spacer/>
              <Button outline :to="links.home">Our solutions</Button>
            </Card>
            <div half>
              <img src="~/assets/product/engine/mesg-development.png">
            </div>
          </div>
        </Container>
      </div>
    </section>

    <section id="usecase" mb3>
      <Container>
        <h2 mb2>MESG Marketplace Use Cases </h2>
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
            <img src="~/assets/product/engine/token-engine.png" alt="The MESG Token and Marketplace">
          </div>
          <div>
            <h2 class="text-left" mb1>The MESG Token and Marketplace</h2>
            <p
              mb2
            >The MESG Token can be used to purchase access to Modules in the Marketplace. Once decentralized, the Token will also be used to secure and power the network.</p>
            <Button outline :to="links.token">Discover the MESG Token</Button>
          </div>
        </div>
      </Container>
    </section>

    <section id="enterprise" mb3>
      <Container>
        <PrimaryCallToAction
          title="Integrate complexities with confidence"
          description="Receive priority technical support from a team of engineers dedicated to your project, day or night."
          :links="[{ title: 'Enterprise solutions' , to: links.enterprise }]"
        />
      </Container>
    </section>

    <section id="discover" mb3>
      <Container>
        <SecondaryCallToAction
          title="Discover more about MESG"
          :left="{ title: 'MESG Engine', description: 'Build feature-rich apps without needing to manage dependencies.', link: 'Access MESG Engine', to: links.engine }"
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
    TextWithIcon
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
      externalLinks: "externalLinks",
      links: "links"
    }),
    engine() {
      return this.products.find(x => x.id === "marketplace");
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

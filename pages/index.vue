<template>
  <div>
    <Header mb3 :picture="require('~/assets/home.png')" :title="title" :description="description">
      <div flex row>
        <Button :to="links.enterprise" primary>Enterprise Solutions</Button>
        <Button :to="links.getStarted" secondary>Get Started</Button>
      </div>
    </Header>

    <section id="partners" mb3>
      <Container flex column align-center>
        <div mb2>
          <img mr2 src="~/assets/partners/windprotocol.png" alt="windprotocol">
          <img mr2 src="~/assets/partners/yuser.png" alt="yuser">
          <img mr2 src="~/assets/partners/beachhead.png" alt="beachhead">
          <img src="~/assets/partners/yellow.png" alt="yellow">
        </div>
        <Button secondary :to="links.partners">Our partners</Button>
      </Container>
    </section>

    <section id="intro" mb3>
      <Container flex column align-center>
        <h2 mb2>How MESG accelerates app development</h2>
        <Card>
          <Video src="https://www.youtube.com/embed/VjPG51iE_fk"></Video>
        </Card>
      </Container>
    </section>

    <section id="product-intro" mb2>
      <Container flex column align-center>
        <h2 mb1>Our products</h2>
        <p
          mb2
          class="text-center"
        >MESG’s Engine and Marketplace work in tandem to offer an open economy of limitless app and workflow integrations that all work together right out of the box.</p>
      </Container>
    </section>
    <section id="products" mb3 class="with-background">
      <Container>
        <div flex row space-between>
          <Card v-for="product in products" :key="product.id" :id="product.id" p2 mb2 flex column>
            <div>
              <img class="product" mb1 :src="product.img" :alt="product.title">
            </div>
            <h3 mb1>{{ product.title }}</h3>
            <p mb2 v-html="product.description"/>
            <span spacer/>
            <List :items="product.features"/>
            <Button outline :to="links[product.id]">{{ product.action }}</Button>
          </Card>
        </div>
        <Card p2 id="token">
          <div flex row>
            <div>
              <img src="~/assets/product/token/token.png" alt="token">
            </div>
            <div>
              <h3 mb1>Build Modules, Earn Tokens</h3>
              <p>Earn MESG Tokens by building reusable Modules in the decentralized economy of app development.</p>
            </div>
            <div>
              <Button outline :to="links.token">Discover the MESG Token</Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>

    <section id="articles" mb3>
      <Container flex column align-center>
        <h2 mb2>In the news</h2>
        <div flex row space-between>
          <Card v-for="article in articles" :key="article.id" :id="article.id" p1 mb2 bordered>
            <img mb1 :src="article.img" :alt="article.title">
            <h4 mb1>{{ article.title }}</h4>
          </Card>
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
          :left="{ title: 'Showcase', description: 'Not sure what to build on MESG? Find your inspiration here.', link: 'Explore the showcase', to: links.showcase }"
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
import Video from "~/components/Video";
import Card from "~/components/Card";
import List from "~/components/List";
import PrimaryCallToAction from "~/components/callToAction/Primary";
import SecondaryCallToAction from "~/components/callToAction/Secondary";
import CardCallToAction from "~/components/callToAction/Card";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    Video,
    Card,
    List,
    PrimaryCallToAction,
    SecondaryCallToAction,
    CardCallToAction
  },
  mixins: [
    page({
      title: "The new economy of app development",
      description:
        "Build apps or autonomous workflows with reusable, shareable integrations connecting any service, app, blockchain or decentralized network."
    })
  ],
  computed: {
    ...mapGetters({
      products: "products",
      articles: "articles",
      externalLinks: "externalLinks",
      links: "links"
    })
  }
};
</script>

<style lang="scss" scoped>
#partners img {
  height: 40px;
  width: auto;
}

#products .card img.product {
  height: 160px;
  width: 160px;
  max-width: 100%;
}

#token img {
  width: 100px;
  height: 100px;
}

#articles img {
  height: 20px;
  width: auto;
}

#articles .card {
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
}
</style>

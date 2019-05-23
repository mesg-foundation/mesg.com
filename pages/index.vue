<template>
  <div>
    <Header mb3 :picture="require('~/assets/home.svg')" :title="title" :description="description">
      <div>
        <Button :to="links.enterprise" primary mr2>Enterprise solutions</Button>
        <Button :href="externalLinks.getStarted" target="_blank" secondary>Get started</Button>
      </div>
    </Header>

    <section id="partners" mb3>
      <Container flex column align-center>
        <Partners mb2/>
        <Button secondary :to="links.partners">Our partners</Button>
      </Container>
    </section>

    <section id="intro" mb3>
      <Container flex column align-center>
        <h2 mb2>How MESG accelerates app development:</h2>
        <Card>
          <Video :src="externalLinks.video"></Video>
        </Card>
      </Container>
    </section>

    <section id="product-intro">
      <Container flex column align-center class="intro">
        <h2 mb1>Our products</h2>
        <p
          mb2
          class="text-center product-desc"
        >MESG’s Engine and Marketplace work in tandem to create an open economy of application components that are all instantly compatible straight out of the box.</p>
      </Container>
    </section>
    <section id="products" mb3 class="inner-background">
      <Container>
        <div flex row space-between wrap>
          <Card
            v-for="product in products"
            :key="product.id"
            :id="product.id"
            p2
            mb2
            flex
            column
            half
          >
            <div>
              <img class="product" mb1 :src="product.img" :alt="product.title">
            </div>
            <h3 mb1>{{ product.title }}</h3>
            <p mb2 v-html="product.description"/>
            <span spacer/>
            <List :items="product.features.secondary"/>
            <Button outline :to="links[product.id]">{{ product.action }}</Button>
          </Card>
        </div>
        <Card p2 id="token">
          <div flex row mobile-column align-center>
            <div flex mobile-column>
              <div flex column quarter class="token">
                <img src="~/assets/token/MESG-token.svg" alt="token">
              </div>
              <div flex column>
                <h3 mb1>Build services, earn tokens</h3>
                <p
                  class="token-desc"
                >Earn MESG Tokens by building modular application components in the decentralized economy of app development.</p>
              </div>
            </div>
            <div flex column third>
              <Button outline :to="links.token">Discover the MESG Token</Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>

    <News :articles="articles"/>

    <CallToAction
      mb3
      title="Accelerate your business with MESG"
      description="MESG is built for efficiency and scalability. Create and share app components to add new features or even enter new industries. Then scale limitlessly with a decentralized network."
      :links="[{ title: 'Enterprise solutions' , to: links.enterprise }]"
    />

    <Discover mb3 left="showcase" right="foundation"/>

    <GetStarted mb3/>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Video from "~/components/Video";
import Card from "~/components/Card";
import News from "~/components/News";
import List from "~/components/List";
import CallToAction from "~/components/CallToAction";
import Discover from "~/components/Discover";
import GetStarted from "~/components/GetStarted";
import Partners from "~/components/Partners";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    Video,
    Card,
    News,
    List,
    CallToAction,
    Discover,
    GetStarted,
    Partners
  },
  mixins: [
    page({
      title: "The new economy of app development",
      description:
        "Build apps or autonomous workflows with reusable, shareable integrations connecting any service, app, blockchain or decentralized network."
    })
  ],
  computed: mapGetters({
    products: "products",
    articles: "articles",
    links: "links",
    externalLinks: "externalLinks"
  })
};
</script>

<style lang="scss" scoped>
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
}

#articles .card:last-child {
  margin-right: 0;
}

.icon {
  font-size: 1em;
  text-align: right;
}

@media only screen and (max-width: $mobile-breakpoint) {
  .token {
    margin-bottom: 20px;
  }
  .token-desc {
    margin-bottom: 40px;
  }
}
@media only screen and (max-width: $tablet-breakpoint) {
  .intro {
    padding-bottom: 0;
  }
  .product-desc {
    margin-bottom: 0 !important;
  }
  .token {
    margin-right: 20px;
  }
}
</style>

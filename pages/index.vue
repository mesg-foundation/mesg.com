<template>
  <div>
    <Header mb3 :picture="require('~/assets/home.svg')" :title="title" :description="description">
      <div>
        <Button :href="externalLinks.getStarted" target="_blank" primary>Get started</Button>
      </div>
    </Header>

    <section id="features" mb3>
      <Container flex row space-between wrap>
        <TextWithIcon
          v-for="(feature, i) in home.features.primary"
          :key="i"
          :src="feature.src"
          :title="feature.title"
          :text="feature.description"
          third
        />
      </Container>
    </section>

    <section id="presentation">
      <Container flex column class="intro text-center">
        <h2 mb1>Products</h2>
        <p>Together, the Marketplace and SDK form an open economy of versatile, intercompatible application components.</p>
      </Container>
    </section>

    <section id="products" mb3 class="outer-background">
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
              <img class="product" mb1 :src="product.img" :alt="product.title" />
            </div>
            <h3 mb1>{{ product.title }}</h3>
            <p mb2 v-html="product.description" />
            <span spacer />
            <List :items="product.features.secondary" />
            <Button outline :to="links[product.id]">{{ product.action }}</Button>
          </Card>
        </div>
        <Card p2 id="token">
          <div flex row mobile-column align-center>
            <div flex mobile-column class="content">
              <div flex column quarter class="token">
                <img src="~/assets/token/MESG-token.svg" alt="MESG Token" />
              </div>
              <div flex column>
                <h3 mb1>Build services, earn tokens</h3>
                <p
                  class="token-desc"
                >Earn MESG Tokens by sharing components in the decentralized MESG Marketplace.</p>
              </div>
            </div>
            <div flex column third>
              <Button outline :to="links.token">Discover the MESG Token</Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>

    <section id="showcase" mb3>
      <Container>
        <div flex column align-center>
          <h2 class="text-center" mb2>Built with MESG</h2>
          <div flex row mobile-column mb2>
            <UseCase v-for="usecase in usecases" :key="usecase.id" :usecase="usecase" />
          </div>
          <Button secondary :to="links.showcase">See the showcase</Button>
        </div>
      </Container>
    </section>

    <section>
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section id="blog" mb3>
      <Container>
        <div flex row mobile-column-reverse align-center>
          <div half>
            <h2 mb1>Blog</h2>
            <p
              mb1
            >Stay up to date with the MESG Foundation on our blog. Check out in-depth features about what we are building and why we are building it.</p>
            <Button secondary :href="externalLinks.blog" target="_blank">Read our blog</Button>
          </div>
          <div half p1>
            <img src="~/assets/blog.svg" alt="Blog" />
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
          <CardNewsletter
            title="Newsletter"
            description="Sign up for our monthly newsletter to receive updates about MESG, our roadmap, products, new releases and more."
            half
          />
          <div half class="community">
            <h3 mb1>Community</h3>
            <p
              mb2
            >MESG is open-source and is community-driven. Join us in building the bridges between legacy and emerging technologies.</p>
            <ListSN
              :list="[icons.twitter,icons.github,icons.telegram,icons.forum,icons.discord,icons.reddit]"
            />
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
import UseCase from "~/components/UseCase";
import TextWithIcon from "~/components/TextWithIcon";
import Card from "~/components/Card";
import List from "~/components/List";
import CardNewsletter from "~/components/CardNewsletter";
import ListSN from "~/components/ListSN";
import CTA from "~/components/CTA";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    UseCase,
    Button,
    TextWithIcon,
    Card,
    List,
    CardNewsletter,
    ListSN,
    CTA
  },
  mixins: [
    page({
      title: "The builders’ open economy",
      description:
        "A decentralized event-driven task-orchestration system based on an open market of pay-per-use services."
    })
  ],
  computed: {
    ...mapGetters({
      products: "products",
      home: "home",
      links: "links",
      externalLinks: "externalLinks",
      allusecases: "usecases",
      icons: "icons"
    }),
    usecases() {
      return this.allusecases.slice(0, 3);
    }
  }
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

@media only screen and (max-width: $tablet-breakpoint) {
  .token {
    margin-right: var(--margin);
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  .intro {
    padding-bottom: 0;
  }
  #token {
    margin-top: calc(var(--margin) * 2);
  }
  #token .content {
    margin-bottom: calc(var(--margin) * 2);
  }
  .token {
    margin-right: 0;
    margin-bottom: var(--margin);
  }
  .community {
    margin-top: calc(var(--margin) * 3);
  }
}
</style>

<template>
  <div>
    <Header
      :picture="require('~/assets/token/token.svg')"
      :title="title"
      :description="description"
    >
      <div>
        <p mb1>
          <strong>Buy and trade on:</strong>
        </p>
        <div flex row wrap>
          <a
            v-for="exchange in exchanges"
            :key="exchange.id"
            :href="exchange.to"
            class="logo link-secondary"
            target="_blank"
            third
          >
            <img :src="exchange.src" :alt="exchange.id" />
          </a>
        </div>
      </div>
    </Header>

    <section id="features" mb3>
      <Container flex row space-between wrap>
        <TextWithIcon
          v-for="(feature, i) in token.features.primary"
          :key="i"
          :src="feature.src"
          :title="feature.title"
          :text="feature.description"
          third
        />
      </Container>
    </section>

    <section id="atd">
      <Container>
        <h2 class="text-center" mb1>Algorithmic Token Distribution</h2>
        <p
          mb3
          class="text-center"
        >Built to promote stability and transparency, the Algorithmic Token Distribution (ATD) is the MESG Foundation’s commitment to limiting token releases to only a fraction of the previous day’s volume.</p>
        <div flex row space-between wrap>
          <TextWithIcon
            half
            v-for="(feature, i) in token.features.secondary"
            :key="i"
            :src="feature.src"
            :title="feature.title"
            :text="feature.description"
          />
        </div>
      </Container>
    </section>

    <section id="distribution" class="outer-background" mb3>
      <Container>
        <Feature
          :src="require('~/assets/token/token-distribution.svg')"
          title="Token distribution"
          action="ATD website"
          :href="externalLinks.atd"
        >
          <h4 mb2>Total token supply 250MM</h4>
          <ColoredList
            :items="[
              { color: '#2E1359', title: 'Sale Distribution 62.5%'},
              { color: '#7E44D8', title: 'Partners & Bounties 5%'},
              { color: '#C2A3FF', title: 'Team and Founders 12.5%'},
              { color: '#DFCDF7', title: 'Reserve 20%'}
            ]"
          />
        </Feature>
      </Container>
    </section>

    <section id="documents" mb3>
      <Container>
        <h2 class="text-center" mb3>MESG documents</h2>
        <div flex row space-between wrap>
          <Document :list="['whitepaper', 'implementation', 'twopager', 'business']" />
        </div>
      </Container>
    </section>

    <section id="faq" mb3>
      <Container>
        <h2 class="text-center" mb3>Frequently Asked Questions</h2>
        <div flex row space-between wrap>
          <Titletext4
            half
            v-for="(faq, i) in token.faq"
            :key="i"
            :title="faq.title"
            :text="faq.description"
          />
        </div>
      </Container>
    </section>

    <section id="partners" mb3>
      <Container flex column align-center>
        <h2 mb3>Already building on MESG</h2>
        <Partners />
      </Container>
    </section>

    <News :articles="articles" mb3 />

    <hr mb3 />

    <section mb3>
      <Container>
        <div flex row mobile-column align-center>
          <CardNewsletter
            title="Newsletter"
            description="Sign up for our monthly newsletter to receive updates about MESG, our roadmap, products, new releases and more."
            half
          />
          <div half>
            <h3 mb1>Community</h3>
            <p
              mb2
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus id nunc suscipit volutpat.</p>
            <ListSN :list="['telegram', 'discord']" />
          </div>
        </div>
      </Container>
    </section>

    <section id="cta" mb1>
      <Container>
        <Card purple p2>
          <h2 class="text-center" mb2>Buy and Trade</h2>
          <div flex row mobile-column class="exchange">
            <Button
              white
              v-for="exchange in exchanges"
              :key="exchange.id"
              :href="exchange.to"
              target="_blank"
            >
              <img :src="exchange.src" :alt="exchange.id" />
            </Button>
          </div>
        </Card>
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
import Titletext4 from "~/components/Titletext4";
import News from "~/components/News";
import Partners from "~/components/Partners";
import CardNewsletter from "~/components/CardNewsletter";
import ListSN from "~/components/ListSN";
import CallToAction from "~/components/CallToAction";
import TextWithIcon from "~/components/TextWithIcon";
import Feature from "~/components/Feature";
import ColoredList from "~/components/ColoredList";
import Document from "~/components/Document";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    Card,
    Titletext4,
    News,
    Partners,
    CardNewsletter,
    ListSN,
    CallToAction,
    TextWithIcon,
    Feature,
    ColoredList,
    Document
  },
  mixins: [
    page({
      title: "MESG Token",
      description:
        "Buy and sell access to app components in the new economy of app development. The MESG Token is available now."
    })
  ],
  computed: {
    ...mapGetters({
      token: "token",
      links: "links",
      externalLinks: "externalLinks",
      articles: "articles",
      exchanges: "exchanges"
    })
  }
};
</script>

<style lang="scss" scoped>
#cta {
  position: relative;
}

#cta::before {
  content: "";
  position: absolute;
  width: 100%;
  height: calc(100% + 100px);
  background: var(--light-background);
  transform: translateY(30%) skewY(-8deg);
  z-index: -1;
}
#cta h2 {
  color: var(--white);
}

ul {
  list-style: none;
}

a img {
  height: 25px;
  display: block;
}

a.btn--white img {
  margin: auto;
}
li img {
  vertical-align: middle;
}

@media only screen and (max-width: $mobile-breakpoint) {
  .btn--white {
    margin-bottom: 40px !important;
  }
  .btn--white:last-child {
    margin-bottom: 0 !important;
  }
  .exchange {
    margin-bottom: 0 !important;
  }
  .logo {
    margin-bottom: 40px;
  }
}

@media only screen and (min-width: $mobile-breakpoint) and (max-width: $tablet-breakpoint) {
  .logo {
    width: calc((100% - (3 - 1) * 2 * var(--margin)) / 3);
    min-width: calc((100% - (3 - 1) * 2 * var(--margin)) / 3);
    max-width: calc((100% - (3 - 1) * 2 * var(--margin)) / 3);
  }
}
</style>

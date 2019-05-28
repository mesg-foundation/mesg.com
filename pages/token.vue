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
            target="_blank"
            third
            class="logo"
          >
            <img :src="exchange.src" :alt="exchange.id">
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

    <section id="atd" mb3>
      <Container>
        <h2 mb1>Algorithmic Token Distribution</h2>
        <p
          mb2
          class="text-center"
        >Built to promote stability and transparency, the Algorithmic Token Distribution (ATD) is the MESG Foundation’s commitment to limiting token releases to only a fraction of the previous day’s total volume.</p>
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

    <section id="distribution" class="outer-background" pt3 pb3 mb3>
      <Container>
        <Feature
          :src="require('~/assets/token/token-distribution.svg')"
          title="Token distribution"
          action="Check out our roadmap"
          :to="links.roadmap"
        >
          <h4 mb1>Total token supply 250MM</h4>
          <ColoredList
            :items="[
              { color: '#e0d1ff', title: 'Sale Distribution 62.5%' },
              { color: '#ffd4a3', title: 'Reserve 20%' },
              { color: '#9777c7', title: 'Team and Founders 12.5%' },
              { color: '#8ceda1', title: 'Partners & Bounties 5%' }
            ]"
          />
        </Feature>
      </Container>
    </section>

    <section id="documents" mb3>
      <Container>
        <h2 mb2>MESG documents</h2>
        <div flex row space-between wrap>
          <Document v-for="(document, i) in documents" :key="i" half :document="document" mb2/>
        </div>
      </Container>
    </section>

    <section id="faq" mb3>
      <Container>
        <h2 mb2>Frequently Asked Questions</h2>
        <div flex row space-between wrap>
          <Titletext4
            half
            v-for="(faq, i) in token.faq"
            :key="i"
            :title="faq.title"
            :text="faq.description"
          />
        </div>
        <div class="text-center">
          <Button secondary :to="links.faq">Access the FAQ</Button>
        </div>
      </Container>
    </section>

    <News :articles="articles"/>

    <CallToAction mb3 title="Buy and trade MESG Token on">
      <div flex row wrap mb2 class="exchange">
        <Button
          white
          v-for="exchange in exchanges"
          :key="exchange.id"
          :href="exchange.to"
          target="_blank"
          third
        >
          <img :src="exchange.src" :alt="exchange.id">
        </Button>
      </div>
    </CallToAction>

    <Discover mb3 left="showcase" right="enterprise"/>

    <GetStarted mb3/>
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
import CallToAction from "~/components/CallToAction";
import Discover from "~/components/Discover";
import GetStarted from "~/components/GetStarted";
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
    CallToAction,
    Discover,
    GetStarted,
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
      documents: "documents",
      articles: "articles",
      exchanges: "exchanges"
    })
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.soon {
  opacity: 0.3;
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

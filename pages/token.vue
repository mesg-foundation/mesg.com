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
          mb2
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
          <template v-slot:right>
            <h4 mb2>Total token supply 250MM</h4>
            <ColoredList
              :items="[
              { color: '#2e1359', title: 'Sale Distribution 62.5%'},
              { color: '#7e44d8', title: 'Partners & Bounties 5%'},
              { color: '#c2a3ff', title: 'Team and Founders 12.5%'},
              { color: '#dfcdf7', title: 'Reserve 20%'}
            ]"
            />
          </template>
        </Feature>
      </Container>
    </section>

    <section id="documents" mb3>
      <Container>
        <h2 class="text-center" mb2>MESG documents</h2>
        <div flex row space-between wrap>
          <Document :list="['whitepaper', 'implementation', 'twopager', 'business']" />
        </div>
      </Container>
    </section>

    <section id="faq" mb3>
      <Container>
        <h2 class="text-center" mb2>Frequently Asked Questions</h2>
        <div flex row space-between wrap>
          <Titletext4
            half
            v-for="(faq, i) in token.faq"
            :key="i"
            :title="faq.title"
            :text="faq.description"
            mb2
          />
        </div>
      </Container>
    </section>

    <section id="partners" mb3>
      <Partners />
    </section>

    <News :articles="articles" mb3 />

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
            >Join the community of builders and traders in our Telegram group, or head over to Discord to chat with the team.</p>
            <ListSN :list="[icons.telegram, icons.discord]" />
          </div>
        </div>
      </Container>
    </section>

    <section id="cta" mb1>
      <Container>
        <Card p2>
          <h2 class="text-center" mb2>Buy and Trade</h2>
          <div flex row mobile-column>
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
import Button from "@mesg-components/button";
import Container from "~/components/Container";
import Card from "@mesg-components/card";
import Titletext4 from "~/components/Titletext4";
import News from "~/components/News";
import Partners from "~/components/Partners";
import CardNewsletter from "~/components/CardNewsletter";
import ListSN from "~/components/ListSN";
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
    TextWithIcon,
    Feature,
    ColoredList,
    Document
  },
  mixins: [
    page({
      title: "MESG Token",
      description:
        "Buy and sell access to services in the new economy of app development. The MESG Token is available now."
    })
  ],
  computed: {
    ...mapGetters({
      token: "token",
      links: "links",
      externalLinks: "externalLinks",
      articles: "articles",
      exchanges: "exchanges",
      icons: "icons"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";

a img {
  height: 25px;
  display: block;
}

#atd {
  div {
    padding-top: calc(#{$margin} * 2);
  }
}

#distribution {
  ul {
    list-style: none;
    margin-left: 0;
  }
}

#cta {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: calc(100% + 100px);
    background: $grey-light;
    transform: translateY(30%) skewY(-8deg);
    z-index: -1;
  }
  .card {
    background-image: linear-gradient(to right, $primary, $purple);
    h2 {
      color: $white;
    }
    img {
      margin: auto;
    }
  }
}

@media only screen and (min-width: $huge-breakpoint +1) {
  #cta:before {
    transform: none;
    top: 60px;
  }
}

@media only screen and (max-width: $tablet-breakpoint) {
  #cta:before {
    height: calc(100% + 80px);
  }
  #atd {
    div {
      padding-top: 0;
    }
  }
}

@media only screen and (max-width: $mobile-breakpoint) {
  .logo {
    margin-bottom: calc(#{$margin} * 2);
  }
  #cta {
    div {
      margin-bottom: 0 !important;
      .btn--white {
        margin-bottom: calc(#{$margin} * 2) !important;
        &:last-child {
          margin-bottom: 0 !important;
        }
      }
    }
  }
  #atd {
    .container {
      padding-bottom: 0;
    }
  }
  #more-infos {
    .community {
      margin-top: calc(#{$margin} * 3);
    }
  }
}

@media only screen and (min-width: $mobile-breakpoint) and (max-width: $tablet-breakpoint) {
  .logo {
    width: calc((100% - (3 - 1) * 2 * #{$margin}) / 3);
    min-width: calc((100% - (3 - 1) * 2 * #{$margin}) / 3);
    max-width: calc((100% - (3 - 1) * 2 * #{$margin}) / 3);
  }
}
</style>

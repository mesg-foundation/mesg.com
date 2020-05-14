<template>
  <div>
    <Header :image="require('~/assets/token/token.svg')" :title="title" :description="description">
      <template v-slot:top>
        <span flex class="label">{{ token.label }}</span>
      </template>
      <div>
        <Button
          :href="externalLinks.tokenUtility"
          target="_blank"
          primary
          mt2
        >Discover the token's utility</Button>
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

    <section>
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section id="documents" mb3>
      <Container>
        <h2 class="text-center" mb2>MESG documents</h2>
        <div flex row space-between wrap>
          <Document :list="['whitepaper', 'implementation']" />
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
            >Join the community of builders in our Telegram group, or head over to Discord to chat with the team.</p>
            <ListSN :list="[icons.telegram, icons.discord]" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      icon="fal fa-coins"
      title="Token Utility in the MESG Ecosystem"
      description="Explore the native token, how it works in the builders' open economy and what it can mean for you"
      :links="[{ title: 'Read the article' , href: externalLinks.tokenUtility }]"
      mb1
    />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Header from "@mesg-components/header";
import Button from "@mesg-components/button";
import Container from "~/components/Container";
import CTA from "~/components/CTA";
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
    CTA,
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
      title: "Token",
      description:
        "Securely delegate application processing, task executions, and validations to network participants using the native token."
    })
  ],
  computed: {
    ...mapGetters({
      products: "products",
      links: "links",
      externalLinks: "externalLinks",
      articles: "articles",
      exchanges: "exchanges",
      icons: "icons"
    }),
    token() {
      return this.products.find(x => x.id === "token");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";

.sub-text {
  font-size: 17px !important;
}

a img {
  height: 25px !important;
  display: block;
}
.logo {
  transition: 0.1s ease-in;
  &:hover {
    transform: scale(1.1);
  }
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

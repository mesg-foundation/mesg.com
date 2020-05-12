<template>
  <div>
    <Header :image="require('~/assets/home.svg')" :title="title" :description="description">
      <div>
        <Button :to="links.getstarted" primary mt2>Get started</Button>
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
        <h2 mb1>Technology</h2>
        <p>Together, the MESG Engine, Services, Processes, and Token form an ultra-efficient, open economy of application development and hosting.</p>
      </Container>
    </section>

    <section id="technology" mb3 class="outer-background">
      <Container>
        <div flex row space-between wrap>
          <Card flex row mobile-column>
            <div v-for="(entrypoints, i) in home.entrypoints" :key="i" class="technology-card">
              <nuxt-link
                :id="entrypoints.id"
                :to="entrypoints.to"
                flex
                column
                align-center
                p2
                v-if="entrypoints.to"
              >
                <div>
                  <img mb2 :src="entrypoints.img" :alt="entrypoints.title" />
                </div>
                <span class="label text-center">{{ entrypoints.label }}</span>
                <h3 mb1>{{ entrypoints.title }}</h3>
                <i class="fal fa-long-arrow-alt-right"></i>
              </nuxt-link>
              <a
                :id="entrypoints.id"
                :href="entrypoints.href"
                flex
                column
                align-center
                p2
                v-else
                target="_blank"
              >
                <div>
                  <img mb2 :src="entrypoints.img" :alt="entrypoints.title" />
                </div>
                <span class="label text-center">{{ entrypoints.label }}</span>
                <h3 mb1>{{ entrypoints.title }}</h3>
                <i class="fal fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </Card>
        </div>
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
        <div flex column align-center>
          <h2 mb2>Blog</h2>
          <div flex row mobile-column mb2>
            <Article v-for="article in articles" :key="article.id" :article="article" />
          </div>
          <Button secondary :href="externalLinks.blogHome" target="_blank">Read our blog</Button>
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
      icon="fal fa-book"
      title="Get started"
      description="MESG is free to start and only takes moments to install. Build more with less effort."
      :links="[{ title: 'Get started' , to: links.getstarted }]"
      mb1
    />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Header from "@mesg-components/header";
import Button from "@mesg-components/button";
import Container from "~/components/Container";
import UseCase from "~/components/UseCase";
import TextWithIcon from "~/components/TextWithIcon";
import Card from "@mesg-components/card";
import List from "~/components/List";
import CardNewsletter from "~/components/CardNewsletter";
import ListSN from "~/components/ListSN";
import CTA from "~/components/CTA";
import Article from "~/components/Article";
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
    CTA,
    Article
  },
  fetch: ({ store }) => store.dispatch("articles/fetchAll"),
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
      icons: "icons",
      articles: "articles/all"
    }),
    usecases() {
      return this.allusecases.slice(0, 3);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
#alert {
  .alert-card {
    background-color: $primary;
    box-shadow: none;
    .alert-icon {
      max-width: 50px;
      margin-right: $margin;
      span {
        min-width: 50px;
        width: 50px;
        max-width: 50px;
        min-height: 50px;
        height: 50px;
        max-height: 50px;
        background-color: $purple;
        border-radius: 100%;
        i {
          color: $white;
          font-size: 24px;
          text-align: center;
        }
      }
    }
    p {
      color: $white;
    }
  }
}

#technology {
  .card {
    padding: 0;
  }
  .technology-card {
    transition: 0.1s ease-in;
    margin-right: 0;
    border-right: dotted 1px $lavender-light;
    &:hover {
      transform: scale(1.01);
      background-color: transparentize($primary-light, 0.85);
    }
    img {
      height: 140px;
      width: 140px;
      max-width: 100%;
    }
  }
}

@media only screen and (max-width: $mobile-breakpoint) {
  #alert {
    .alert-icon {
      margin-bottom: $margin;
      margin-right: 0 !important;
    }
    p {
      text-align: center;
      margin-bottom: calc(#{$margin} * 2);
    }
  }
  .intro {
    padding-bottom: 0;
  }
  .technology-card {
    border-right: none !important;
    border-bottom: dotted 1px $lavender-light;
    &:last-child {
      border-bottom: none;
    }
  }
  #more-infos {
    .community {
      margin-top: calc(#{$margin} * 3);
    }
  }
}
</style>

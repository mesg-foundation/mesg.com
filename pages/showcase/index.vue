<template>
  <div>
    <Header :image="require('~/assets/showcase.svg')" :title="title" :description="description">
      <div>
        <Button :to="links.getstarted" primary mt2>Start building</Button>
      </div>
    </Header>

    <section id="use cases" mb3>
      <Container flex column align-center>
        <h2 mb2>Built with MESG</h2>
        <div flex row wrap mb2 class="usecases">
          <UseCase mb2 v-for="usecase in usecases" :key="usecase.id" :usecase="usecase" />
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
          <Button secondary :href="externalLinks.blogShowcase" target="_blank">Read our blog</Button>
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
            >MESG is open-source and is community-driven. Join us in building the bridge between legacy and emerging technologies.</p>
            <ListSN :list="[icons.forum, icons.discord]" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      icon="fal fa-book"
      title="Get started"
      description="MESG is free to start and only takes moments to install. Build more with less effort."
      :links="[{ title: 'Start building' , to: links.getstarted }]"
      mb1
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@mesg-components/header";
import Container from "~/components/Container";
import UseCase from "~/components/UseCase";
import Button from "@mesg-components/button";
import TypeFormPopup from "@mesg-components/type-form-popup";
import CTA from "~/components/CTA";
import ListSN from "~/components/ListSN";
import CardNewsletter from "~/components/CardNewsletter";
import Article from "~/components/Article";
import page from "../page";

export default {
  components: {
    Header,
    Container,
    UseCase,
    Button,
    TypeFormPopup,
    CTA,
    ListSN,
    CardNewsletter,
    Article
  },
  fetch: ({ store }) => store.dispatch("articles/fetchAll"),
  mixins: [
    page({
      title: "Showcase",
      description:
        "Not sure what to build? Get inspired by examples showing the wide range of possibilities."
    })
  ],
  computed: mapGetters({
    links: "links",
    externalLinks: "externalLinks",
    usecases: "usecases",
    icons: "icons",
    forms: "forms",
    articles: "articles/all"
  })
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";

@media only screen and (max-width: $mobile-breakpoint) {
  .usecases {
    margin-bottom: calc(#{$margin} * 3) !important;
  }
  .community {
    margin-top: calc(#{$margin} * 3);
  }
}

@media only screen and (max-width: $mobile-only) {
  .form {
    width: 100%;
  }
}
</style>


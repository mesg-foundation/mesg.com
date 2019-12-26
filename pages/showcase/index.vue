<template>
  <div>
    <Header :picture="require('~/assets/showcase.svg')" :title="title" :description="description">
      <div>
        <Button :to="links.getstarted" primary>Start building</Button>
      </div>
    </Header>

    <section id="use cases" mb3>
      <Container flex column align-center>
        <h2 mb2>Built with MESG</h2>
        <div flex row wrap mb2 class="usecases">
          <UseCase mb2 v-for="usecase in usecases" :key="usecase.id" :usecase="usecase" />
        </div>
        <TypeFormPopup :id="forms.contactForm" class="form">
          <Button primary>Submit my project</Button>
        </TypeFormPopup>
      </Container>
    </section>

    <section id="separator">
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section id="marketplace" class="outer-background" mb3>
      <Container>
        <div flex row mobile-column align-center>
          <div half p1>
            <img src="~/assets/marketplace/marketplace.svg" alt="MESG Marketplace" />
          </div>
          <div half>
            <h2 mb1>Get inspired</h2>
            <p
              mb2
            >Find new services to implement in your applications. Any service from the Marketplace featuring any technology or language and can be added to any process or application.</p>
            <Button secondary :href="externalLinks.marketplace" target="_blank">MESG Marketplace</Button>
          </div>
        </div>
      </Container>
    </section>

    <section id="blog" mb3>
      <Container>
        <div flex row mobile-column-reverse align-center>
          <div half>
            <h2 mb1>Blog</h2>
            <p
              mb1
            >Discover even more ways to use MESG on our blog, plus stay up to date about what we are building and why we are building it.</p>
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
import Header from "~/components/Header";
import Container from "~/components/Container";
import UseCase from "~/components/UseCase";
import Button from "@mesg-components/button";
import TypeFormPopup from "@mesg-components/type-form-popup";
import CTA from "~/components/CTA";
import ListSN from "~/components/ListSN";
import CardNewsletter from "~/components/CardNewsletter";
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
    CardNewsletter
  },
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
    forms: "forms"
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
  #separator .container {
    padding-bottom: 0;
  }
}

@media only screen and (max-width: $mobile-only) {
  .form {
    width: 100%;
  }
}
</style>


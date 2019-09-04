<template>
  <div>
    <Header :picture="require('~/assets/showcase.svg')" :title="title" :description="description">
      <div class="btn-center">
        <Button :href="externalLinks.getStarted" target="_blank" primary>Start building</Button>
      </div>
    </Header>

    <section id="use cases" mb3>
      <Container flex column align-center>
        <h2 mb3>Use Cases</h2>
        <UseCase mb2 />
        <Button primary :href="externalLinks.contact" target="_blank">Submit my project</Button>
      </Container>
    </section>

    <hr />

    <section class="outer-background" mb3>
      <Container>
        <div flex row mobile-column align-center>
          <div half>
            <img
              src="~/assets/marketplace/marketplace.svg"
              alt="MESG Marketplace"
              class="marketplace"
            />
          </div>
          <div half>
            <h2 mb1>Get inspired</h2>
            <p
              mb2
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus id nunc suscipit volutpat. Curabitur ac sodales elit.Lorem ipsum dolor sit amet, consectetur.</p>
            <Button secondary :href="externalLinks.marketplace" target="_blank">MESG Marketplace</Button>
          </div>
        </div>
      </Container>
    </section>

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
            <ListSN :list="['forum', 'discord']" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      title="Get started"
      description="MESG is free to start and only takes moments to install. Build more with less effort."
      :links="[{ title: 'Start building' , href: externalLinks.getStarted }]"
      mb1
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Container from "~/components/Container";
import UseCase from "~/components/UseCase";
import Button from "~/components/Button";
import Card from "~/components/Card";
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
    Card,
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
    externalLinks: "externalLinks"
  })
};
</script>

<style lang="scss" scoped>
.marketplace {
  padding: calc(var(--margin) * 1);
  width: 100%;
  max-width: 490px;
  height: 100%;
  max-height: 490px;
}
</style>

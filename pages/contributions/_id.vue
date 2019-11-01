<template>
  <div>
    <Header :title="title" :description="description">
      <template v-slot:top>
        <div class="reward" flex align-center mb1>
          <i class="fas fa-award"></i>
        </div>
      </template>
      <div class="details">
        <Tag mr2>{{ contribution.category }}</Tag>
        <p>
          <i class="fas fa-user-circle"></i>
          <a
            v-if="contribution.profile"
            :href="contribution.profile"
            target="_blank"
            >{{ contribution.name }}</a
          >
          <a href="#" v-else>{{ contribution.name }}</a>
        </p>
      </div>
      <template v-slot:picture>
        <EmbedCard :url="contribution.link" />
      </template>
    </Header>

    <section id="contribute" mb3>
      <Container flex column align-center>
        <h2 mb1>Contribute</h2>
        <p class="text-center" mb3>
          You too contribute to the MESG project... Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <div flex row space-between wrap mb3>
          <div half>
            <i class="fas fa-badge-check success" mb1></i>
            <Titletext4
              title="Quality first"
              text="The value of contributions is determined first by quality. Contributions focusing on quality over quantity have a much greater chance of being rewarded."
            />
          </div>
          <div half>
            <i class="fas fa-award gold" mb1></i>
            <Titletext4
              title="Reward payouts"
              text="Contributions are reviewed by our team, and if we are impressed by the quality and impact of your work, we’ll contact you to send a reward within a few business days."
            />
          </div>
        </div>
        <ContributionForm />
      </Container>
    </section>

    <section>
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section id="community" mb3>
      <Container flex column align-center>
        <h3 mb1>MESG community</h3>
        <p class="text-center" mb2>
          Want to check the lastest contributions or get some ideas about how to
          contribute?
        </p>
        <Button secondary :to="links.showcase">Check out the community</Button>
      </Container>
    </section>

    <CTA
      title="Add your contribution"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit lorem, eleifend posuere posuere ac, malesuada convallis velit."
      :links="[{ title: 'Add contribution', href: externalLinks.contact }]"
      mb1
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "~/components/Header";
import CTA from "~/components/CTA";
import ContributionForm from "~/components/ContributionForm";
import EmbedCard from "@mesg-components/embed-card";
import Titletext4 from "~/components/Titletext4";
import Container from "~/components/Container";
import Button from "@mesg-components/button";
import Tag from "@mesg-components/tag-label";
import page from "../page";

export default {
  components: {
    Header,
    CTA,
    ContributionForm,
    EmbedCard,
    Titletext4,
    Container,
    Button,
    Tag
  },
  mixins: [
    page(x => ({
      title: x.contribution.title,
      description: x.contribution.description
    }))
  ],
  fetch: ({ store }) => store.dispatch("contributions/fetchAll"),
  computed: {
    ...mapGetters({
      contributions: "contributions/all",
      links: "links",
      externalLinks: "externalLinks"
    }),
    contribution() {
      return this.contributions[this.$route.params.id];
    }
  }
};
</script>

<style lang="scss" scoped>
.details {
  display: flex;
}

.reward {
  width: 60px;
  height: 60px;
  max-width: 60px;
  max-height: 60px;
  border-radius: 3px;
  background-color: var(--gold);
  & i {
    text-align: center;
    margin-right: 0;
    font-size: 34px;
    color: var(--white);
  }
}

p {
  i {
    margin-right: calc(var(--margin) / 2);
    font-size: 18px;
    color: var(--light-purple);
  }
}

#contribute {
  i {
    font-size: 24px;
  }
}
</style>

<template>
  <div>
    <Header :title="title" :description="description">
      <template v-slot:top v-if="contribution.rewarded">
        <div flex row align-center mb1>
          <div class="reward" flex align-center>
            <i class="fas fa-award"></i>
          </div>
          <p class="reward-label gold">Rewarded</p>
        </div>
      </template>
      <div class="details">
        <Tag mr2>{{ contribution.category }}</Tag>
        <p v-if="contribution.profile">
          <i class="fas fa-user-circle"></i>
          <a :href="contribution.profile" target="_blank">{{ contribution.name }}</a>
        </p>
        <p v-else>
          <i class="fas fa-user-circle"></i>
          {{ contribution.name }}
        </p>
      </div>
      <template v-slot:picture>
        <Card class="preview" p2 mb1>
          <div flex mobile-only-column align-center wrap>
            <p class="infos text-right">Share this contribution</p>
            <Tweetbtn
              class="tweet-btn"
              v-if="contribution.rewarded"
              :url="contributionLink(contribution)"
              :text="
                    `Check out the rewarded contribution to the @MESGfoundation by ${contribution.name}. #MESGRewards`
                  "
              ml1
            />
            <Tweetbtn
              class="tweet-btn"
              v-else
              :url="contributionLink(contribution)"
              :text="
                    `Check out the contribution to the @MESGfoundation by ${contribution.name}. #MESGContributions`
                  "
              ml1
            />
          </div>
          <hr mt1 mb1 />
          <EmbedCard :url="contribution.link" />
        </Card>
        <p class="infos text-center edit">
          Content not showing up as expected?
          <TypeFormPopup :id="forms.editContribution" class="form link">
            <a>Let us know</a>
          </TypeFormPopup>
        </p>
      </template>
    </Header>

    <section id="contribute" pt2 mb3>
      <Container flex column align-center>
        <h2 mb1>MESG contributions</h2>
        <p
          class="text-center"
          mb2
        >See the latest contributions to the MESG community in the live feed, or get inspired by our list of ways to contribute.</p>
        <Button secondary :to="links.contributions">Check out the contributions</Button>
      </Container>
    </section>

    <section>
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section id="rules" mb3>
      <Container>
        <div flex row space-between wrap>
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
      </Container>
    </section>

    <CTA
      icon="fal fa-file-alt"
      title="Add a contribution"
      description="Have a quality contribution? Awesome! Send it our way, and you could be eligible for a reward. MESG thrives on community support and collaborations."
      mb1
    >
      <TypeFormPopup :id="forms.addContribution" class="form">
        <Button white>Add a contribution</Button>
      </TypeFormPopup>
    </CTA>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "~/components/Header";
import CTA from "~/components/CTA";
import Card from "~/components/Card";
import Tweetbtn from "@mesg-components/social-network";
import TypeFormPopup from "@mesg-components/type-form-popup";
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
    Card,
    Tweetbtn,
    TypeFormPopup,
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
      externalLinks: "externalLinks",
      forms: "forms"
    }),
    contribution() {
      return this.contributions[this.$route.params.id];
    }
  },
  methods: {
    contributionLink(contribution) {
      return (
        (location ? location.origin : "") + `/contributions/${contribution.id}`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  a {
    width: 100%;
  }
  &:hover {
    cursor: pointer;
  }
}

.preview {
  max-height: 540px;
  overflow-y: auto;
  hr {
    width: auto;
  }
  .infos {
    font-weight: bold;
  }
}
.tweet-btn {
  text-align: right;
  max-width: fit-content;
  height: 20px;
}

.reward {
  width: 60px;
  height: 60px;
  max-width: 60px;
  max-height: 60px;
  border-radius: 3px;
  background-color: var(--gold);
  margin-right: var(--margin);
  i {
    text-align: center;
    margin-right: 0;
    font-size: 34px;
    color: var(--white);
  }
}
.reward-label {
  font-size: 20px;
  font-weight: 600;
}

.details {
  display: flex;
  p {
    i {
      margin-right: calc(var(--margin) / 2);
      font-size: 18px;
      color: var(--light-purple);
    }
  }
}

#rules {
  i {
    font-size: 34px;
  }
}

@media only screen and (max-width: $mobile-breakpoint) {
  h2 {
    text-align: center;
  }
  .edit {
    margin-bottom: calc(var(--margin) * 2);
  }
}
@media only screen and (max-width: $mobile-only) {
  .preview {
    .tweet-btn {
      margin-left: 0 !important;
      margin-top: var(--margin);
    }
    p {
      text-align: center;
    }
  }
  .size--small {
    padding: 6px calc(10px / 2) !important;
  }
  .form {
    display: block;
  }
}
</style>

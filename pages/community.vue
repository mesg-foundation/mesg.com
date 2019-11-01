<template>
  <div>
    <Header
      :picture="require('~/assets/community/community.svg')"
      :title="title"
      :description="description"
    >
      <div>
        <ContributionForm />
      </div>
    </Header>

    <section id="contributors" mb3>
      <Container flex column align-center>
        <h2 mb1>Contributors</h2>
        <p
          class="text-center"
          mb2
        >Here, we feature all contributors to the MESG ecosystem. Rewards are dependent on utility, creativity and impact.</p>
        <Card class="contributors-table" bordered thin flex column p2 mb3>
          <h3 class="white" mb2>Latest reward</h3>
          <Card flex row mobile-column align-center mb2>
            <div class="user-rewarded" flex column align-center third p2>
              <div class="reward" flex align-center mb1>
                <i class="fas fa-award"></i>
              </div>
              <div flex column align-center>
                <p class="text-center" mb1>{{ latestReward.title}}</p>
                <Tag mb1>{{ latestReward.category}}</Tag>
                <p>
                  <i class="fas fa-user-circle"></i>
                  {{ latestReward.name}}
                </p>
              </div>
            </div>
            <div class="preview" p2>
              <Card no-shadow flex row align-center mb1 p1>
                <p class="infos">Share this contribution</p>
                <Tweetbtn
                  :url="latestReward.urlContribution"
                  :text="`Check out the latest rewarded contribution to the @MESGfoundation by ${latestReward.name}. #MESGRewards`"
                  class="tweet"
                />
              </Card>
              <Card no-shadow p1>
                <EmbedCard :url="latestReward.urlContribution" />
              </Card>
            </div>
          </Card>
          <h3 mb1>Live feed</h3>
          <Table
            :headers="[
              { key: 'title', text: 'Title', value: 'title' },
              { key: 'category', text: 'Category', value: 'category' },
              { key: 'name', text: 'Name', value: 'name' },
              { key: 'createdAt', text: 'createdAt', value: 'createdAt', align: 'right' },
            ]"
            :items="contributions"
            hideHeader
            compact
          >
            <template v-slot:item_title="{item}">
              <i class="fas fa-award" :class="{gold:item.reward, white:!item.reward}"></i>
              <nuxt-link to="https://google.com">{{item.title}}</nuxt-link>
            </template>
            <template v-slot:item_category="{item}">
              <Tag>{{ item.category }}</Tag>
            </template>
            <template v-slot:item_name="{item}">
              <p>
                <i class="fas fa-user-circle"></i>
                {{item.name}}
              </p>
            </template>
            <template v-slot:item_createdAt="{item}">
              <p class="date">{{item.createdAt | relativeDate}}</p>
            </template>
          </Table>
        </Card>

        <div flex row space-between wrap mb2>
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

    <section id="help">
      <Container class="ideas" flex column align-center>
        <h2 mb1>Ways to help</h2>
        <p
          class="text-center"
          mb2
        >MESG is open to contributions in nearly any way imaginable. From developing the infrastructure to spreading the word. Below are examples, but feel free to get creative and help however you’d like.</p>

        <div flex row wrap>
          <div v-for="(community, i) in community" :key="i" class="test" flex column third>
            <Card bordered thin p1 mb2>
              <div flex row align-center mb1>
                <h4>
                  <i :class="community.icon"></i>
                  {{ community.category }}
                </h4>
              </div>
              <hr mb1 />
              <ul>
                <li v-for="(list, j) in community.list" :key="j">{{ list }}</li>
              </ul>
            </Card>
          </div>
          <Card flex third align-center justify-center bordered thin p1 mb2>
            <h4 class="text-center">
              <i class="fas fa-plus"></i>Get creative
            </h4>
          </Card>
        </div>
      </Container>

      <div flex column align-center class="outer-background" mb3>
        <Container flex column align-center>
          <h3 mb1>Bonus tasks</h3>
          <p
            class="text-center"
            mb2
          >We use Bounties Network and Gitcoin to manage specific payable tasks we need help with. Tasks for developers are found on Gitcoin, while all other tasks are found on Bounties Network.</p>
          <div flex row align-center>
            <a
              href="https://explorer.bounties.network/profile/0x59d47550bfc7905aa52044610eeda530d780329b/"
              target="_blank"
              class="link-secondary"
              mr2
            >
              <img src="~/assets/community/bounties-network.svg" alt="The Bounties Network logo" />
            </a>
            <a href="https://gitcoin.co/explorer?org=mesg" target="_blank" class="link-secondary">
              <img src="~/assets/community/gitcoin.svg" alt="Gitcoin logo" />
            </a>
          </div>
        </Container>
      </div>
    </section>

    <section id="more-infos" mb3>
      <Container>
        <div flex row mobile-column align-center>
          <div half>
            <h3 mb1>Share the love</h3>
            <p>If your contributions are sharable on one of our channels, we encourage you to do so!</p>
          </div>
          <div half>
            <ListSN
              :list="['twitter', 'github', 'telegram', 'forum', 'discord', 'reddit']"
              display-title
            />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      title="Connect with us"
      description="Want to share your contribution directly, or did your post slip under the radar? Let us know! We’d love to check out your work."
      :links="[{ title: 'Let us know' , href: externalLinks.contact }]"
      mb1
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "~/components/Header";
import Container from "~/components/Container";
import Card from "~/components/Card";
import EmbedCard from "@mesg-components/embed-card";
import ContributionForm from "~/components/ContributionForm";
import Tweetbtn from "@mesg-components/social-network";
import Button from "@mesg-components/button";
import Tag from "@mesg-components/tag-label";
import Table from "@mesg-components/table";
import Titletext4 from "~/components/Titletext4";
import ListSN from "~/components/ListSN";
import CTA from "~/components/CTA";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Card,
    ContributionForm,
    EmbedCard,
    Tweetbtn,
    Button,
    Table,
    Tag,
    Titletext4,
    ListSN,
    CTA
  },
  fetch: ({ store, params }) =>
    store.dispatch("contributions/bind", params.hash),
  data() {
    return {
      contribution: {}
    };
  },
  mixins: [
    page({
      title: "Built by the community",
      description:
        "MESG thrives on community support and collaborations. There are countless ways to contribute, even for non-developers."
    })
  ],
  computed: {
    ...mapGetters({
      contributions: "contributions/all",
      links: "links",
      externalLinks: "externalLinks",
      community: "community"
    }),
    latestReward() {
      return this.contributions.find(x => x.reward);
    }
  },
  methods: {
    ...mapActions({
      createContribution: "contributions/create"
    }),
    async submit() {
      await this.createContribution(this.contribution);
      this.contribution = {};
    }
  }
};
</script>

<style lang="scss" scoped>
#contributors {
  .card.bordered.thin {
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 17%;
      z-index: -1;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      background-color: var(--purple);
    }
  }
  .user-rewarded {
    margin-right: 0;
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
  .preview {
    max-height: 500px;
    overflow-y: auto;
    background-color: var(--light-background);
  }
  .tweet {
    text-align: right;
  }

  table {
    .date {
      font-size: 15px;
      color: var(--light-purple);
    }
  }
}

.card.bordered.thin:hover {
  border: solid 2px transparent;
  box-shadow: 0 0 0 1px var(--light-purple) inset;
}

#help {
  hr {
    width: auto;
  }
  & li::before {
    content: "";
    width: 7px;
    height: 7px;
    margin-right: calc(var(--margin) - 5px);
    background-color: var(--deep-purple);
    border-radius: 100%;
    display: inline-block;
    vertical-align: middle;
  }
}

i {
  margin-right: calc(var(--margin) / 2);
  font-size: 18px;
  color: var(--light-purple);
}

img {
  height: 40px;
  width: auto;
}

@media only screen and (max-width: $tablet-breakpoint) {
  #help .ideas {
    padding-bottom: 0;
  }
  .contributors-table {
    margin-bottom: calc(var(--margin) * 2) !important;
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  #more-infos p {
    margin-bottom: calc(var(--margin) * 2);
  }
}
</style>
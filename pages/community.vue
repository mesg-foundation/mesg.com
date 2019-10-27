<template>
  <div>
    <Header
      :picture="require('~/assets/community/community.svg')"
      :title="title"
      :description="description"
    >
      <div>
        <Button :href="externalLinks.contact" target="_blank" primary>Add contribution</Button>
      </div>
    </Header>

    <section id="contributors" mb3>
      <Container flex column align-center>
        <h2 mb1>Contributors</h2>
        <p
          class="text-center"
          mb2
        >Here, we feature all contributors to the MESG ecosystem. Rewards are dependent on utility, creativity and impact.</p>
        <div class="table-contributors" flex column mb3>
          <div class="inner-background-purple" p2>
            <h3 class="head-reward" mb2>Latest reward</h3>
            <Card flex row align-center>
              <div class="user-rewarded" flex column align-center third p2>
                <div class="reward" flex align-center mb1>
                  <i class="fas fa-award rewardwhite"></i>
                </div>
                <div flex column align-center>
                  <p mb1>{{ latestReward.description}}</p>
                  <p>
                    <i class="fas fa-user-circle"></i>
                    {{ latestReward.name}}
                  </p>
                </div>
              </div>
              <div class="preview" p2>
                <div class="embedCard" flex space-between align-center mb1>
                  <span class="label">{{ latestReward.category}}</span>
                  <div class="tweet">
                    <a
                      href="https://twitter.com/intent/tweet?button_hashtag=MESGRewards&ref_src=twsrc%5Etfw"
                      class="twitter-hashtag-button"
                      :data-text="`Check out the latest rewarded contribution to the @MESGfoundation by ${latestReward.name}.`"
                      data-url="https://mesg.com/community"
                      data-related="mesgfoundation"
                      data-show-count="false"
                    >Tweet #MESGRewards</a>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                  </div>
                </div>
                <div class="embedCard">
                  <a
                    class="embedly-card"
                    data-card-controls="0"
                    :href="latestReward.urlContribution"
                  >Card</a>
                  <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
                </div>
              </div>
            </Card>
          </div>
          <div p2>
            <h3 mb2>Live feed</h3>
            <Table
              :headers="[
              { key: 'reward', text: 'Reward', value: 'reward' },
              { key: 'description', text: 'Description', value: 'description' },
              { key: 'category', text: 'Category', value: 'category' },
              { key: 'name', text: 'Name', value: 'name' },
              { key: 'createdAt', text: 'createdAt', value: 'createdAt' },
            ]"
              :items="contributions"
            >
              <template v-slot:item_reward="{item}">
                <i class="fas fa-award rewardgold" v-if="item.reward"></i>
                <span v-else></span>
              </template>
              <template v-slot:item_description="{item}">
                <nuxt-link to>{{item.description}}</nuxt-link>
              </template>
              <template v-slot:item_category="{item}">
                <span class="label">{{ item.category }}</span>
              </template>
              <template v-slot:item_name="{item}">
                <p>
                  <i class="fas fa-user-circle"></i>
                  {{item.name}}
                </p>
              </template>
              <template v-slot:item_description="{item}">
                <a :href="item.urlContribution" target="_blank">{{item.description}}</a>
              </template>
            </Table>
            <form @submit.prevent="submit">
              <label>
                Username
                <input type="text" v-model="contribution.username" />
              </label>
              <label>
                Link
                <input type="url" v-model="contribution.url" />
              </label>
              <label>
                Description
                <input type="description" v-model="contribution.description" />
              </label>
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>

        <div flex row space-between wrap mb2>
          <Titletext4
            half
            title="Quality first"
            text="The value of contributions is determined first by quality. Contributions focusing on quality over quantity have a much greater chance of being rewarded."
          />
          <Titletext4
            half
            title="Reward payouts"
            text="Contributions are reviewed by our team, and if we are impressed by the quality and impact of your work, we’ll contact you to send a reward within a few business days."
          />
        </div>

        <Button :href="externalLinks.contact" target="_blank" primary>Add contribution</Button>
      </Container>
    </section>

    <section>
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section id="help">
      <Container flex column align-center>
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
            <a href="https://www.bounties.network" target="_blank" class="link-secondary" mr2>
              <img src="~/assets/community/bounties-network.svg" alt="The Bounties Network logo" />
            </a>
            <a href="https://gitcoin.co" target="_blank" class="link-secondary">
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
import Button from "@mesg-components/button";
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
    Button,
    Table,
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

<style scoped>
.table-contributors {
  border: 1px solid var(--light-purple);
  border-radius: 6px;
}

.inner-background-purple {
  position: relative;
}
.inner-background-purple::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 55%;
  z-index: -1;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: var(--purple);
}

.head-reward {
  color: var(--white);
}

.share {
  font-size: 15px;
  color: var(--light-purple);
}

.tweet {
  text-align: right;
}

.user-rewarded {
  margin-right: 0;
}

.reward {
  width: 60px;
  height: 60px;
  max-width: 60px;
  max-height: 60px;
  border-radius: 6px;
  background-color: #f2c46d;
}
.rewardwhite {
  text-align: center;
  margin-right: 0;
  font-size: 34px;
  color: var(--white);
}

.embedCard {
  border-radius: 6px;
  padding: var(--margin);
  background-color: var(--white);
}
.preview {
  max-height: 500px;
  overflow-y: auto;
  background-color: var(--light-background);
}

li::before {
  content: "";
  width: 7px;
  height: 7px;
  margin-right: calc(var(--margin) - 5px);
  background-color: var(--deep-purple);
  border-radius: 100%;
  display: inline-block;
}

#help hr {
  width: auto;
}

.rewardgold {
  color: #f2c46d;
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
</style>
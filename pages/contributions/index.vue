<template>
  <div>
    <Header
      :picture="require('~/assets/community/community.svg')"
      :title="title"
      :description="description"
    >
      <div>
        <TypeFormPopup :id="forms.addContribution" class="form">
          <Button primary>Add a contribution</Button>
        </TypeFormPopup>
      </div>
    </Header>

    <section id="contributors" mb3>
      <Container flex column align-center>
        <h2 mb1>Contributors</h2>
        <p class="text-center" mb2>
          Here, we feature all contributors to the MESG ecosystem. Rewards are
          dependent on utility, creativity and impact.
        </p>

        <Card class="contributors-table" bordered thin flex column p2 mb1>
          <h3 class="white" mb2>Latest reward</h3>
          <Card
            class="contributors-card"
            flex
            row
            mobile-column
            align-center
            mb2
            v-if="latestReward"
          >
            <div class="user-rewarded" flex column align-center third p2>
              <div class="reward" flex align-center mb1>
                <i class="fas fa-award"></i>
              </div>
              <div flex column align-center>
                <p class="text-center" mb1>
                  {{
                  latestReward.title
                  }}
                </p>
                <Tag mb1>{{ latestReward.category }}</Tag>
                <div flex row class="user">
                  <i class="fal fa-user-circle"></i>
                  <span>{{ latestReward.name }}</span>
                </div>
                <Button
                  secondary
                  :to="`/contributions/${latestReward.id}`"
                  class="text-center"
                  mt2
                >More info</Button>
              </div>
            </div>
            <div class="preview" p2>
              <Card no-shadow>
                <div flex mobile-only-column align-center wrap>
                  <span class="infos text-right">Share this contribution</span>
                  <Tweetbtn
                    class="tweet-btn"
                    :url="contributionLink(latestReward)"
                    :text="
                    `Check out the latest rewarded contribution to the @MESGfoundation by ${latestReward.name}. #MESGRewards`
                  "
                    ml1
                  />
                </div>
                <hr mt1 mb1 />
                <EmbedCard :url="latestReward.link" />
              </Card>
            </div>
          </Card>

          <h3 mb1>Live feed</h3>
          <Table
            :headers="[
              { key: 'title', text: 'Title', value: 'title' },
              { key: 'category', text: 'Category', value: 'category' },
              { key: 'name', text: 'Name', value: 'name' },
              {
                key: 'createdAt',
                text: 'createdAt',
                value: 'createdAt',
                align: 'right'
              }
            ]"
            :items="contributions"
            hideHeader
            compact
          >
            <template v-slot:item_title="{ item }">
              <div flex row>
                <i class="fas fa-award" :class="{ gold: item.rewarded, white: !item.rewarded }"></i>
                <nuxt-link :to="`/contributions/${item.id}`">
                  {{
                  item.title
                  }}
                </nuxt-link>
              </div>
            </template>
            <template v-slot:item_category="{ item }">
              <Tag>{{ item.category }}</Tag>
            </template>
            <template v-slot:item_name="{ item }">
              <div flex row>
                <i class="fal fa-user-circle"></i>
                <span>{{ item.name }}</span>
              </div>
            </template>
            <template v-slot:item_createdAt="{ item }">
              <datetime class="date">{{ item.createdAt | relativeDate }}</datetime>
            </template>
          </Table>
        </Card>
        <p class="infos edit text-center" mb3>
          Content not showing up as expected?
          <TypeFormPopup :id="forms.editContribution" class="form link">
            <a>Let us know</a>
          </TypeFormPopup>
        </p>

        <div id="contribute" flex row space-between wrap mb2>
          <div half>
            <i class="fas fa-badge-check success" mb1></i>
            <Titletext4
              title="Quality first"
              text="Contribution value is determined by quality first. Those focused on quality over quantity have a much greater chance of getting rewarded."
              mb2
            />
          </div>
          <div half>
            <i class="fas fa-award gold" mb1></i>
            <Titletext4
              title="Rewarded payouts"
              text="Contributions will be reviewed, and if we’re impressed by the quality and impact of your work, we’ll contact you to send a reward."
              mb2
            />
          </div>
        </div>
        <TypeFormPopup :id="forms.addContribution" class="form popup">
          <Button primary>Add a contribution</Button>
        </TypeFormPopup>
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
        >MESG is open to nearly any type of contribution, from developing the infrastructure to spreading the word. Below are examples for inspiration, but feel free to get creative and help however you’d like.</p>
        <div flex row wrap>
          <div v-for="(community, i) in community" :key="i" flex column third>
            <Card bordered thin mb2>
              <div flex row align-center mb1>
                <h4>
                  <i :class="community.icon"></i>
                  {{ community.category }}
                </h4>
              </div>
              <hr mb1 />
              <ul>
                <li v-for="(list, j) in community.list" :key="j" v-html="list">{{ list }}</li>
              </ul>
            </Card>
          </div>
          <Card flex third align-center justify-center bordered thin mb2>
            <h4 class="text-center">
              <i class="fal fa-plus"></i>Get creative
            </h4>
          </Card>
        </div>
      </Container>

      <div flex column align-center class="outer-background" mb3>
        <Container flex column align-center>
          <h3 mb1>Bonus tasks</h3>
          <p class="text-center" mb2>
            We use Bounties Network and Gitcoin to manage specific payable tasks
            we need help with. Tasks for developers are found on Gitcoin, while
            all other tasks are found on Bounties Network.
          </p>
          <div flex row align-center>
            <a
              href="https://explorer.bounties.network/profile/0x59d47550bfc7905aa52044610eeda530d780329b/"
              target="_blank"
              mr2
            >
              <img src="~/assets/community/bounties-network.svg" alt="The Bounties Network logo" />
            </a>
            <a href="https://gitcoin.co/explorer?org=mesg-foundation" target="_blank">
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
            <p>
              If your contributions are sharable on one of our channels, we
              encourage you to do so!
            </p>
          </div>
          <div half>
            <ListSN
              :list="[
              { ...icons.twitter, description: 'Twitter' },
              { ...icons.github, description: 'Github' },
              { ...icons.telegram, description: 'Telegram' },
              { ...icons.forum, description: 'Forum' },
              { ...icons.discord, description: 'Discord' },
              { ...icons.reddit, description: 'Reddit' }
              ]"
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
import Container from "~/components/Container";
import Card from "@mesg-components/card";
import EmbedCard from "@mesg-components/embed-card";
import Tweetbtn from "@mesg-components/social-network";
import TypeFormPopup from "@mesg-components/type-form-popup";
import Button from "@mesg-components/button";
import Tag from "@mesg-components/tag-label";
import Table from "@mesg-components/table";
import Titletext4 from "~/components/Titletext4";
import ListSN from "~/components/ListSN";
import CTA from "~/components/CTA";
import page from "../page";

export default {
  components: {
    Header,
    Container,
    Card,
    EmbedCard,
    Tweetbtn,
    TypeFormPopup,
    Button,
    Table,
    Tag,
    Titletext4,
    ListSN,
    CTA
  },
  fetch: ({ store }) => store.dispatch("contributions/fetchAll"),
  data() {
    return {
      contribution: {}
    };
  },
  mixins: [
    page({
      title: "Contributions Hub",
      description:
        "MESG thrives on community support and collaborations. There are countless ways to contribute, even for non-developers."
    })
  ],
  computed: {
    ...mapGetters({
      _contributions: "contributions/all",
      links: "links",
      externalLinks: "externalLinks",
      community: "community",
      forms: "forms",
      icons: "icons"
    }),
    contributions() {
      return Object.keys(this._contributions)
        .map(x => this._contributions[x])
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(0, 10);
    },
    latestReward() {
      return this.contributions.find(x => x.rewarded);
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
@import "~/assets/_variables";

#contributors {
  .card.bordered:hover {
    box-shadow: none;
    transform: none;
  }
  .contributors-table {
    width: 100%;
    position: relative;
    z-index: 0;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 340px;
      z-index: -1;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      background-color: $primary;
    }
  }
  .contributors-card {
    padding: 0;
  }
  .user-rewarded {
    margin-right: 0;
    .reward {
      width: 60px;
      height: 60px;
      max-width: 60px;
      max-height: 60px;
      border-radius: 3px;
      background-color: $gold;
      i {
        text-align: center;
        margin-right: 0;
        font-size: 34px;
        color: $white;
      }
    }
    .user {
      i {
        min-width: 18px;
        max-width: 18px;
        margin-top: 0.2em;
      }
    }
  }
  .preview {
    min-height: 450px;
    max-height: 500px;
    overflow-y: auto;
    background-color: $grey-light;
    .infos {
      font-weight: bold;
    }
    .tweet-btn {
      text-align: right;
      max-width: fit-content;
      height: 20px;
    }
  }
  table {
    .date {
      font-size: 15px;
      color: $primary-light;
    }
    div {
      width: auto;
      margin: 0;
    }
    i {
      min-width: 18px;
      max-width: 18px;
      margin-top: 0.2em;
    }
  }
}

#contribute {
  i {
    font-size: 34px;
  }
}

#help {
  .card.bordered.thin {
    transform: none;
    box-shadow: none;
  }
  hr {
    width: auto;
  }
  a {
    transition: 0.1s ease-in;
    &:hover {
      transform: scale(1.1);
    }
    img {
      height: 40px;
      width: auto;
    }
  }
}

i {
  margin-right: calc(#{$margin} / 2);
  color: $lavender-light;
}

.form {
  .popup {
    width: 100%;
  }
}

@media only screen and (max-width: $tablet-breakpoint) {
  #help .ideas {
    padding-bottom: 0;
  }
  .contributors-table {
    margin-bottom: $margin !important;
  }
  .edit {
    margin-bottom: calc(#{$margin} * 2) !important;
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  #more-infos p {
    margin-bottom: calc(#{$margin} * 2);
  }
}
@media only screen and (max-width: $mobile-only) {
  .preview p {
    text-align: center;
  }
  .tweet-btn {
    margin-left: 0 !important;
    margin-top: $margin;
  }
  .form {
    width: 100%;
    display: flex;
    a {
      width: 100%;
    }
  }
}
</style>

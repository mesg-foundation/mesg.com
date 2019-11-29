<template>
  <div>
    <Header
      :picture="require('~/assets/enterprise/enterprise.svg')"
      :title="title"
      :description="description"
    >
      <div>
        <Button :href="externalLinks.getStarted" primary target="_blank">Quick start</Button>
      </div>
    </Header>

    <section id="steps" mb3>
      <Container flex row space-between wrap>
        <div flex align-center>
          <div class="number" mr1></div>
          <h4>Install and run Engine</h4>
        </div>
        <div flex align-center>
          <div class="number" mr1></div>
          <h4>Build or reuse services</h4>
        </div>
        <div flex align-center>
          <div class="number" mr1></div>
          <h4>Create a process</h4>
        </div>
      </Container>
    </section>

    <section id="resources" mb3>
      <Container class="intro text-center">
        <h2>Lorem ipsum dolor</h2>
      </Container>
      <div class="outer-background">
        <Container>
          <Card v-for="(getstarted, i) in getstarted" :key="i" flex row p2 mb2>
            <div half pr1>
              <Tag class="tag-purple" mb1>{{ getstarted.tag}}</Tag>
              <h3 mb1>{{ getstarted.title}}</h3>
              <p class="test" v-html="getstarted.description"></p>
            </div>
            <span class="separator"></span>
            <div flex column half pl1>
              <Table
                :headers="[
              { key: 'link', text: 'Link', value: 'link' },
              { key: 'info', text: 'Info', value: 'info', align: 'right'}
            ]"
                :items="getstarted.resources"
                hideHeader
                compact
                flex
                align-center
              >
                <template v-slot:item_link="{ item }">
                  <div class="link-resource" flex row align-center>
                    <span class="circle" :class="item.color" flex align-center mr1>
                      <i class="text-center" :class="item.category"></i>
                    </span>
                    <nuxt-link v-if="item.to" :to="item.to">{{ item.title }}</nuxt-link>
                    <a v-else :href="item.link" target="_blank">{{ item.title }}</a>
                  </div>
                </template>
                <template v-slot:item_info="{ item }">
                  <div class="info" flex row align-center>
                    <span>
                      {{ item.info }}
                      <i class="icon-right-table" :class="item.icon"></i>
                    </span>
                  </div>
                </template>
              </Table>
            </div>
          </Card>
        </Container>
      </div>
    </section>

    <section id="more-infos" mb3>
      <Container>
        <div flex row>
          <div flex column mobile-column half>
            <div mb2>
              <div flex row space-between align-center>
                <h3 mb1>Need help?</h3>
                <nuxt-link secondary :to="links.faq" class="btn-more-infos">
                  <i class="fal fa-long-arrow-alt-right" mr1></i>Help center
                </nuxt-link>
              </div>
              <p>Browse the Forum and Github for answers, and create a new issue if you don’t find your solution. Our team is also available for help on Discord.</p>
            </div>
            <ListSN
              :list="[
                { ...icons.forum, description: 'Create a post on the Forum' },
                { ...icons.github, description: 'Create an issue on Github' },
                { ...icons.discord, description: 'Reach out to us on Discord' }
              ]"
            />
          </div>
          <div flex column mobile-column half>
            <div mb2>
              <div flex row space-between align-center>
                <h3 mb1>Tutorials</h3>
                <a
                  secondary
                  :href="externalLinks.getStarted"
                  target="_blank"
                  class="btn-more-infos"
                >
                  <i class="fal fa-external-link-alt" mr1></i>See all
                </a>
              </div>
              <p>Follow along with step-by-step tutorials for guidance on how to install the SDK and build services and applications with MESG.</p>
              <Table
                :headers="[
              { key: 'title', text: 'Title', value: 'title' },
              { key: 'icon', text: 'Icon', value: 'icon', align: 'right'}
            ]"
                :items="tutorials"
                hideHeader
                compact
              >
                <template v-slot:item_title="{ item }">
                  <a :href="item.tutorial.link" target="_blank">{{ item.tutorial.title }}</a>
                </template>
                <template v-slot:item_title="{ item }">
                  <i class="fal fa-external-link-alt"></i>
                </template>
              </Table>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section id="links-card" mb3>
      <Container>
        <div flex row>
          <a :href="externalLinks.github" target="_blank" half fill-height>
            <Card bordered p2 class="open-source">
              <span flex align-center>
                <i class="fal fa-code"></i>
              </span>
              <div class="content">
                <h3 mb1>Open source</h3>
                <p
                  mb2
                >MESG is completely open-source. Everyone is free to browse the source code, fix bugs, or help us build the framework.</p>
              </div>
              <div flex class="icon">
                <i class="fal fa-external-link-alt"></i>
              </div>
            </Card>
          </a>
          <nuxt-link :to="links.enterprise" half fill-height>
            <Card bordered p2 class="enterprise">
              <span flex align-center>
                <i class="fal fa-globe"></i>
              </span>
              <div class="content">
                <h3 mb1>Enterprise</h3>
                <p
                  mb2
                >Build ultra-efficient services and applications with confidence using technical, advisory and design support from the MESG Enterprise Team.</p>
              </div>
              <div flex class="icon">
                <i class="fal fa-long-arrow-alt-right"></i>
              </div>
            </Card>
          </nuxt-link>
        </div>
      </Container>
    </section>

    <CTA
      title="Get started"
      description="Don’t know where to begin? Get going with the quickstart guide on our documentation."
      :links="[{ title: 'Quick start' , href: externalLinks.getStarted }]"
      mb1
    >
      <template v-slot:icon>
        <i class="fal fa-book icon-cta"></i>
      </template>
    </CTA>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "@mesg-components/button";
import Header from "~/components/Header";
import Container from "~/components/Container";
import Package from "~/components/Package";
import TextWithIcon from "~/components/TextWithIcon";
import Partners from "~/components/Partners";
import Titletext4 from "~/components/Titletext4";
import CTA from "~/components/CTA";
import Card from "~/components/Card";
import Tag from "@mesg-components/tag-label";
import Table from "@mesg-components/table";
import ListSN from "~/components/ListSN";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Package,
    TextWithIcon,
    Button,
    Partners,
    Titletext4,
    CTA,
    Card,
    Tag,
    Table,
    ListSN
  },
  mixins: [
    page({
      title: "Start building with MESG today",
      description:
        "Connect blockchain events to the outside world, reuse services within any applications, and scale limitlessly in a decentralized cloud."
    })
  ],
  computed: mapGetters({
    links: "links",
    icons: "icons",
    externalLinks: "externalLinks",
    getstarted: "getstarted",
    tutorials: "tutorials"
  })
};
</script>

<style lang="scss" scoped>
.number {
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
  background-color: red;
}

#resources {
  .tag-purple {
    background-color: $light-electric-purple;
    color: $electric-purple;
  }
  .separator {
    position: absolute;
    left: 50%;
    height: 264px;
    border: solid 0.5px $light-purple;
  }
  .circle {
    min-width: 50px;
    max-width: 50px;
    min-height: 50px;
    max-height: 50px;
    border-radius: 100%;
  }
  .link-resource {
    width: auto;
    margin: 0;
  }
  .info {
    width: auto;
    margin: 0;
    span {
      font-size: 12px;
      font-weight: bold;
      color: $light-purple;
      i {
        color: $purple;
        margin-left: calc(#{$margin} / 2);
      }
    }
  }
}

#more-infos {
  .btn-more-infos {
    text-align: right;
  }
}

#links-card {
  .open-source {
    border-bottom-color: $blue;
    span {
      text-align: center;
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 6px;
      background-color: $light-blue;
      i {
        font-size: 30px;
        color: $blue;
      }
    }
  }
  .enterprise {
    border-bottom-color: $orange;
    span {
      text-align: center;
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 6px;
      background-color: $light-orange;
      i {
        font-size: 30px;
        color: $orange;
      }
    }
  }
  .content {
    margin-left: calc(#{$margin} * 4);
  }
  .icon {
    text-align: right;
  }
}

.icon-cta {
  font-size: 100px;
  color: $electric-purple;
}
</style>



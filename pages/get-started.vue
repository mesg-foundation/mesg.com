<template>
  <div>
    <Header :image="require('~/assets/getstarted.svg')" :title="title" :description="description">
      <div>
        <Button :href="externalLinks.getStarted" primary target="_blank" mt2>Quick start</Button>
      </div>
    </Header>

    <section id="steps" mb3>
      <Container flex row space-between mobile-column align-center>
        <div class="step-number" flex align-center>
          <div flex align-center mr1>
            <img src="~/assets/load-1.svg" />
            <span>1</span>
          </div>
          <h4>Install and run Engine</h4>
        </div>
        <div class="step-number" flex align-center>
          <div flex align center mr1>
            <img src="~/assets/load-2.svg" />
            <span>2</span>
          </div>
          <h4>Build or reuse services</h4>
        </div>
        <div class="step-number last" flex align-center>
          <div flex align-center mr1>
            <img src="~/assets/load-3.svg" />
            <span>3</span>
          </div>
          <h4>Create a process</h4>
        </div>
      </Container>
    </section>

    <section id="resources" mb3>
      <Container class="intro text-center">
        <h2>Build in 3 steps</h2>
      </Container>
      <div class="outer-background">
        <Container>
          <Card v-for="(getstarted, i) in getstarted" :key="i" flex row mobile-column p2>
            <div half class="getstarted-content" pr1>
              <TagLabel type="purple" mb1>{{ getstarted.tag}}</TagLabel>
              <h3 mb1>{{ getstarted.title}}</h3>
              <p v-html="getstarted.description"></p>
            </div>
            <div class="separator" fill-height></div>
            <div flex column half class="getstarted-list" pl1>
              <ul>
                <li v-for="(resource, i) in getstarted.resources" :key="i" flex row align-center>
                  <nuxt-link v-if="resource.to" :to="resource.to" flex row align-center>
                    <span class="circle" :class="resource.color" flex align-center mr1>
                      <i class="text-center" :class="resource.category"></i>
                    </span>
                    <div class="title" flex column>
                      <span>
                        <strong>{{ resource.title }}</strong>
                      </span>
                      <span class="info">{{ resource.info }}</span>
                    </div>
                    <i class="icon-right-list" :class="resource.icon"></i>
                  </nuxt-link>
                  <a v-else :href="resource.link" target="_blank" flex row align-center>
                    <span class="circle" :class="resource.color" flex align-center mr1>
                      <i class="text-center" :class="resource.category"></i>
                    </span>
                    <div class="title" flex column>
                      <span>
                        <strong>{{ resource.title }}</strong>
                      </span>
                      <span class="info">{{ resource.info }}</span>
                    </div>
                    <i class="icon-right-list" :class="resource.icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Card>
        </Container>
      </div>
    </section>

    <section id="more-infos" mb3>
      <Container>
        <div flex row mobile-column fill-height>
          <div flex column half class="help">
            <div class="title-link" flex row space-between align-center mb1>
              <h3>Need help?</h3>
              <nuxt-link :to="links.faq" class="link">Help center</nuxt-link>
            </div>
            <p
              mb2
            >Browse the Forum and Github for answers, and create a new issue if you don’t find your solution. Our team is also available for help on Discord.</p>
            <ListSN
              :list="[
                { ...icons.forum, description: 'Create a post on the Forum' },
                { ...icons.github, description: 'Create an issue on Github' },
                { ...icons.discord, description: 'Reach out to us on Discord' }
              ]"
            />
          </div>
          <div flex column half>
            <div class="title-link" flex row space-between align-center mb1>
              <h3>Tutorials</h3>
              <a :href="externalLinks.tutorials" target="_blank" class="link">See all</a>
            </div>
            <p
              mb1
            >Follow along with step-by-step tutorials for guidance on how to install the SDK and build services and applications with MESG.</p>
            <ul>
              <li v-for="(tutorial, j) in tutorials" :key="j">
                <a :href="tutorial.to" target="_blank" flex row>
                  <i class="fal fa-external-link-alt"></i>
                  {{ tutorial.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>

    <section id="links-card" mb3>
      <Container>
        <div flex row mobile-column>
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
      icon="fal fa-book"
      title="Get started"
      description="Don’t know where to begin? Get going with the quickstart guide on our documentation."
      :links="[{ title: 'Quick start' , href: externalLinks.getStarted }]"
      mb1
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "@mesg-components/button";
import Header from "@mesg-components/header";
import Container from "~/components/Container";
import CTA from "~/components/CTA";
import Card from "@mesg-components/card";
import TagLabel from "@mesg-components/tag-label";
import ListSN from "~/components/ListSN";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    CTA,
    Card,
    TagLabel,
    ListSN
  },
  mixins: [
    page({
      title: "Start building with MESG",
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
@import "~/assets/_variables";
#steps {
  .step-number {
    div {
      width: 50px;
      height: 50px;
      max-width: 50px;
      max-height: 50px;
      img {
        max-width: 50px;
        position: absolute;
      }
      span {
        min-width: 50px;
        color: $purple;
        font-size: 28px;
        line-height: 50px;
        text-align: center;
      }
    }
  }
}

#resources {
  .card {
    position: relative;
    margin-bottom: calc(#{$margin} * 2);
    &:last-child {
      margin-bottom: 0;
    }
    .separator {
      position: absolute;
      left: 50%;
      height: calc(100% - 80px);
      top: 40px;
      border: solid 0.5px $lavender-light;
    }
    .circle {
      min-width: 50px;
      max-width: 50px;
      min-height: 50px;
      max-height: 50px;
      border-radius: 100%;
    }
    .title {
      margin-right: $margin;
    }
  }
}
ul {
  list-style: none;
  margin-left: 0;
  li {
    border-bottom: 1px dotted $lavender-light;
    margin-bottom: 0;
    &:last-child {
      border-bottom: 0;
    }
    a {
      padding: $margin;
      transition: 0.1s ease-in;
      &:hover {
        background-color: transparentize($primary-light, 0.85);
        .info {
          color: $text-color;
        }
      }
      .icon-right-list {
        max-width: 17px;
        color: $primary;
      }
      .info {
        font-size: 12px;
        font-weight: bold;
        color: $lavender-light;
      }
    }
  }
}

#more-infos {
  .title-link {
    a {
      text-align: right;
    }
  }
  i {
    max-width: 17px;
    margin-right: calc(#{$margin} / 2);
  }
}

#links-card {
  .card.bordered {
    position: relative;
  }
  .open-source {
    border-bottom-color: $blue;
    transition: 0.1s ease-in;
    span {
      text-align: center;
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 6px;
      background-color: $blue-light;
      i {
        font-size: 30px;
        color: $blue;
      }
    }
    .icon {
      position: absolute;
      bottom: calc(#{$margin} * 2);
      right: calc(#{$margin} * 2);
    }
  }
  .enterprise {
    border-bottom-color: $orange;
    transition: 0.1s ease-in;
    span {
      text-align: center;
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 6px;
      background-color: $orange-light;
      i {
        font-size: 30px;
        color: $orange;
      }
    }
    .icon {
      position: absolute;
      bottom: calc(#{$margin} * 2);
      right: calc(#{$margin} * 2);
    }
  }
  .content {
    margin-left: calc(#{$margin} * 4);
  }
  .icon {
    text-align: right;
  }
}

@media only screen and (max-width: $mobile-breakpoint) {
  #steps {
    .step-number {
      width: 100%;
      margin-bottom: $margin;
    }
    .last {
      margin-bottom: 0;
    }
  }
  #resources {
    .intro {
      padding-bottom: 0;
    }
    .getstarted-content {
      padding-left: 0;
      margin-bottom: calc(#{$margin} * 2);
    }
    .getstarted-list {
      padding-left: 0 !important;
      padding-right: 0;
    }
    .separator {
      display: none;
    }
  }
  #more-infos {
    .help {
      margin-bottom: calc(#{$margin} * 2);
    }
  }
  #links-card {
    .open-source {
      margin-bottom: calc(#{$margin} * 2);
    }
    .content {
      margin-left: 0;
      margin-top: calc(#{$margin} * 4);
    }
  }
  .help {
    margin-bottom: calc(#{$margin} * 3) !important;
    p {
      margin-bottom: $margin !important;
    }
  }
}

@media only screen and (max-width: $mobile-only) {
  ul {
    a {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
}
</style>



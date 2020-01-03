<template>
  <div>
    <Header :picture="require('~/assets/roadmap.svg')" :title="title" :description="description" />

    <section id="roadmap" mb3>
      <Container>
        <h2 class="text-center" mb2>Our next goals</h2>
        <ul class="years" id="roadmap-list">
          <li v-for="(year, i) in roadmap" :key="i">
            <h2>{{year.year}}</h2>
            <ul class="quarters">
              <li v-for="(quarter, j) in year.quarters" :key="j">
                <h3>{{quarter.quarter}}</h3>
                <ul class="goals">
                  <li v-for="(goal, k) in quarter.goals" :key="k">
                    <h4>
                      {{ goal.title }}
                      <a v-if="goal.link" :href="goal.link" target="_blank">
                        <i class="fal fa-external-link-alt" />
                      </a>
                    </h4>
                    <ul class="bullet-points">
                      <li v-for="(item, l) in goal.list" :key="l">{{item}}</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
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
            <h3 mb1>Stay connected</h3>
            <p
              mb2
            >MESG is built for and by the community. Join our chats, learn more on our blog, or help us build on Github.</p>
            <ListSN :list="[icons.twitter, icons.telegram, icons.github, icons.blog]" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      icon="fal fa-envelope-open-text"
      title="Contact us"
      description="Aligned with our vision and goals? We’d love to connect. Drop us a line and we’ll get back to you."
      mb1
    >
      <TypeFormPopup :id="forms.contactForm" class="form">
        <Button white>Get in touch</Button>
      </TypeFormPopup>
    </CTA>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import ListSN from "~/components/ListSN";
import CTA from "~/components/CTA";
import Button from "@mesg-components/button";
import TypeFormPopup from "@mesg-components/type-form-popup";
import CardNewsletter from "~/components/CardNewsletter";
import Container from "~/components/Container";
import page from "./page";

export default {
  components: {
    Header,
    ListSN,
    CTA,
    Button,
    TypeFormPopup,
    CardNewsletter,
    Container
  },
  mixins: [
    page({
      title: "Roadmap",
      description:
        "Follow our progress on building the universal platform for connecting traditional technologies to trustless systems."
    })
  ],
  computed: {
    ...mapGetters({
      links: "links",
      externalLinks: "externalLinks",
      roadmap: "roadmap",
      icons: "icons",
      forms: "forms"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
#roadmap-list {
  h2 {
    width: 80px;
    height: 42px;
  }
  h3 {
    width: 60px;
    height: 60px;
    padding: calc(#{$margin} / 2);
    color: $lavender;
    border: solid 2px;
    border-radius: 3px;
    text-align: center;
  }
  h4 {
    font-weight: bold;
    margin-bottom: calc(#{$margin} - 8px);
    a {
      margin-left: calc(#{$margin} / 2);
    }
  }
}

ul {
  list-style: none;
  margin-left: 0;
}

.years {
  width: $small-width;
  max-width: 100%;
  margin: auto;
}
.years > li {
  margin-bottom: calc(#{$margin} + 35px);
}

.quarters {
  margin-left: calc(80px + 2 * #{$margin});
  margin-top: -51px;
}
.quarters > li {
  margin-bottom: calc(#{$margin} + 25px);
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 10px;
    height: 2px;
    background-color: $primary;
    display: inline-block;
    position: absolute;
    left: 25px;
    top: 77px;
  }
}

.goals {
  padding-left: calc(60px + 2 * #{$margin});
  margin-top: -42px;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 2px;
    height: calc(100% - 30px);
    background-color: $primary;
    display: inline-block;
    position: absolute;
    left: 29px;
    top: 60px;
  }
  &:after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: $primary;
    display: inline-block;
    position: absolute;
    left: 25px;
    bottom: -32px;
  }
}

.bullet-points {
  list-style: disc;
  margin-left: $margin;
}

.goals > li {
  margin-bottom: calc(#{$margin} + 12px);
}

@media only screen and (max-width: $mobile-breakpoint) {
  .quarters > li::after,
  .goals::after,
  .goals::before {
    display: none;
  }
  li,
  ul {
    margin: 0 !important;
  }
  .goals {
    padding-left: 0;
  }
  .goals ul {
    padding-left: 1em;
  }
  #roadmap-list {
    h2 {
      margin-top: calc(2 * #{$margin});
    }
    h3,
    h4 {
      margin-top: $margin;
    }
  }
  .community {
    margin-top: calc(#{$margin} * 3);
  }
}
</style>

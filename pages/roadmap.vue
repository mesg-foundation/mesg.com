<template>
  <div>
    <Header :picture="require('~/assets/roadmap.svg')" :title="title" :description="description" />

    <section id="roadmap" mb3>
      <Container>
        <h2 class="title text-center" mb3>Our next goals</h2>
        <ul class="years">
          <li v-for="(year, i) in roadmap" :key="i">
            <h3>{{year.year}}</h3>
            <ul class="quarters">
              <li v-for="(quarter, j) in year.quarters" :key="j">
                <h4>{{quarter.quarter}}</h4>
                <ul class="goals">
                  <li v-for="(goal, k) in quarter.goals" :key="k">
                    <h5>
                      {{ goal.title }}
                      <a v-if="goal.link" :href="goal.link" target="_blank">
                        <i class="far fa-external-link" />
                      </a>
                    </h5>
                    <ul class="items">
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
            <ListSN :list="['twitter', 'telegram', 'github', 'blog']" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      title="Contact us"
      description="MESG is free to start and only takes moments to install. Build more with less effort."
      :links="[{ title: 'Get in touch' , href: externalLinks.contact }]"
      mb1
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import ListSN from "~/components/ListSN";
import CTA from "~/components/CTA";
import CardNewsletter from "~/components/CardNewsletter";
import Container from "~/components/Container";
import page from "./page";

export default {
  components: {
    Header,
    ListSN,
    CTA,
    CardNewsletter,
    Container
  },
  mixins: [
    page({
      title: "Roadmap",
      description:
        "Check out our progress on becoming the universally-used platform for connecting traditional technologies to trustless systems."
    })
  ],
  computed: {
    ...mapGetters({
      links: "links",
      externalLinks: "externalLinks",
      roadmap: "roadmap"
    })
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

h3 {
  width: 80px;
  height: 42px;
  font-size: 32px;
}

h4 {
  width: 60px;
  height: 60px;
  padding: 10px;
  font-size: 26px;
  font-weight: 600;
  color: var(--deep-purple);
  border: solid 2px;
  border-radius: 3px;
  text-align: center;
}

h5 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}

.years {
  width: var(--small-width);
  max-width: 100%;
  margin: auto;
}

.years > li {
  margin-bottom: 55px;
}

.quarters {
  margin-left: calc(80px + 2 * var(--margin));
  margin-top: -51px;
}

.quarters > li {
  margin-bottom: 45px;
  position: relative;
}

.quarters > li::after {
  content: "";
  display: block;
  width: 10px;
  height: 2px;
  background-color: var(--purple);
  display: inline-block;
  position: absolute;
  left: 25px;
  top: 77px;
}

.goals {
  padding-left: calc(60px + 2 * var(--margin));
  margin-top: -42px;
  position: relative;
}

.goals::before {
  content: "";
  display: block;
  width: 2px;
  height: calc(100% - 30px);
  background-color: var(--purple);
  display: inline-block;
  position: absolute;
  left: 29px;
  top: 60px;
}

.goals::after {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: var(--purple);
  display: inline-block;
  position: absolute;
  left: 25px;
  bottom: -32px;
}

.goals > li {
  margin-bottom: 32px;
}

.items li {
  font-size: 17px;
  font-weight: normal;
}

.items li::before {
  content: "";
  width: 7px;
  height: 7px;
  margin-right: 15px;
  background-color: var(--deep-purple);
  border-radius: 100%;
  display: inline-block;
}

@media only screen and (max-width: $tablet-breakpoint) {
  .title {
    margin-bottom: 40px !important;
  }
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
    padding: 0 !important;
  }
  h3 {
    margin-top: calc(2 * var(--margin));
  }
  h4 {
    margin-top: var(--margin);
  }
  h5 {
    margin-top: var(--margin);
  }
}
</style>

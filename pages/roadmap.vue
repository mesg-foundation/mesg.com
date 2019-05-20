<template>
  <div>
    <Header :picture="require('~/assets/roadmap.svg')" :title="title" :description="description"/>

    <section id="roadmap" mb3>
      <Container>
        <h2 mb3>Our next goals</h2>
        <ul class="years">
          <li v-for="(year, i) in roadmap" :key="i">
            <h3>{{year.year}}</h3>
            <ul class="quarters">
              <li v-for="(quarter, j) in year.quarters" :key="j">
                <h4>{{quarter.quarter}}</h4>
                <ul class="goals">
                  <li v-for="(goal, k) in quarter.goals" :key="k">
                    <h5>{{ goal.title }}</h5>
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

    <hr mb3>

    <Discover mb3 left="token" right="enterprise"/>

    <GetStarted mb3/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Discover from "~/components/Discover";
import GetStarted from "~/components/GetStarted";
import Container from "~/components/Container";
import page from "./page";

export default {
  components: {
    Header,
    Discover,
    GetStarted,
    Container
  },
  mixins: [
    page({
      title: "Roadmap",
      description:
        "Check out our progress on completing our vision to become the universally-used platform for connecting traditional technologies to trustless systems"
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
  height: 27px;
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

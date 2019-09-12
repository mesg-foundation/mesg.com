<template>
  <div>
    <Header :title="title" :description="description"></Header>

    <section id="policy" mb3>
      <Container>
        <div flex row mobile-column space-between>
          <div flex column quarter tablet-and-up>
            <SideMenu :items="policies" />
          </div>
          <ul flex column>
            <li v-for="(policy, i) in policies" :key="i">
              <h2 :id="policy.id" mb1>{{ policy.title }}</h2>
              <p v-html="policy.description" mb2></p>
              <hr mb2 />
            </li>
            <p class="infos">
              This document was last updated on August 12, 2019
              <br />
              <a href="https://mesg.com/" class="link" target="_blank">MESG.com</a>
            </p>
          </ul>
        </div>
      </Container>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Container from "~/components/Container";
import Button from "~/components/Button";
import SideMenu from "~/components/SideMenu";
import CallToAction from "~/components/CallToAction";
import Discover from "~/components/Discover";
import GetStarted from "~/components/GetStarted";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    SideMenu,
    CallToAction,
    Discover,
    GetStarted
  },
  mixins: [
    page({
      title: "Privacy and Cookie Policy",
      description:
        "This privacy policy ('Policy') describes how MESG Foundation ('MESG Foundation', 'we', 'us' or 'our') collects, protects and uses the personally identifiable information ('Personal Information') you ('User', 'you' or 'your') may provide on the <a href='https://mesg.com/' class='link' target='_blank'>mesg.com</a> website and any of its products or services (collectively, 'Website' or 'Services'). It also describes the choices available to you regarding our use of your Personal Information and how you can access and update this information. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage."
    })
  ],
  computed: mapGetters({
    links: "links",
    policies: "policies",
    externalLinks: "externalLinks"
  })
};
</script>

<style scoped>
ul {
  list-style: none;
}
h2 {
  text-align: left;
}
.infos {
  font-size: 14px;
}
</style>
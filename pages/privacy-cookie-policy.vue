<template>
  <div>
    <Header :title="title">
      <p>
        This privacy policy ('Policy') describes how MESG Foundation ('MESG Foundation', 'we', 'us' or 'our') collects, protects and uses the personally identifiable information ('Personal Information') you ('User', 'you' or 'your') may provide on the
        <a
          href="https://mesg.com/"
          class="link"
          target="_blank"
        >mesg.com</a> website and any of its products or services (collectively, 'Website' or 'Services'). It also describes the choices available to you regarding our use of your Personal Information and how you can access and update this information. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.
      </p>
    </Header>

    <section id="policy" mb3>
      <Container>
        <div flex row mobile-column space-between>
          <div flex column quarter tablet-and-up>
            <div class="menu-fixed">
              <SideMenu :items="policies" />
            </div>
          </div>
          <ul flex column>
            <li v-for="(policy, i) in policies" :key="i">
              <h2 :id="policy.key" mb1>{{ policy.title }}</h2>
              <p v-html="policy.description" mb2></p>
              <hr mb2 class="separator" />
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
import Header from "@mesg-components/header";
import Container from "~/components/Container";
import SideMenu from "@mesg-components/side-menu";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    SideMenu
  },
  mixins: [
    page({
      title: "Privacy and Cookie Policy",
      description:
        "This privacy policy ('Policy') describes how MESG Foundation ('MESG Foundation', 'we', 'us' or 'our') collects, protects and uses the personally identifiable information ('Personal Information') you ('User', 'you' or 'your') may provide on the mesg.com website and any of its products or services (collectively, 'Website' or 'Services'). It also describes the choices available to you regarding our use of your Personal Information and how you can access and update this information. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage."
    })
  ],
  computed: mapGetters({
    links: "links",
    policies: "policies",
    externalLinks: "externalLinks"
  })
};
</script>

<style lang="scss" scoped>
.menu-fixed > nav {
  position: sticky;
  top: 40px;
}
ul {
  list-style: none;
  margin-left: 0;
  .separator {
    width: 100%;
    min-width: 100%;
  }
}
</style>
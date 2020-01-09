<template>
  <div>
    <Header :image="require('~/assets/faq.svg')" :title="title" :description="description"></Header>

    <section id="faq" mb3>
      <Container>
        <div flex row mobile-column space-between>
          <div flex column quarter tablet-and-up>
            <div class="menu-fixed">
              <SideMenu :items="questions" />
            </div>
          </div>
          <ul flex column>
            <li v-for="(category, i) in questions" :key="i">
              <h2 :id="category.key" mb2>{{category.text}}</h2>
              <ul>
                <li v-for="(content, j) in category.contents" :key="j">
                  <h3 mb1>{{content.title }}</h3>
                  <p v-html="content.description" mb2></p>
                </li>
              </ul>
              <hr mb2 class="separator" />
            </li>
            <p class="infos">
              * These FAQs are intended only for informational purposes and shouldn’t be relied upon exclusively or considered as warranties. Please refer to
              <a
                href="https://github.com/mesg-foundation/"
                class="link"
                target="_blank"
              >GitHub</a> and other resources for additional details.
            </p>
          </ul>
        </div>
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
          <div half>
            <h3 mb1>Connect with us</h3>
            <p
              mb2
            >MESG is built by our global community. Join us on our forum and chats, or connect with us on social media.</p>
          </div>
          <div half>
            <ListSN :list="[icons.forum, icons.twitter, icons.discord, icons.telegram]" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      icon="fal fa-envelope-open-text"
      title="Still have questions?"
      description="If you didn’t find the answer you were looking for, reach out to us! The MESG team is here to help."
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
import Header from "@mesg-components/Header";
import Container from "~/components/Container";
import Button from "@mesg-components/button";
import TypeFormPopup from "@mesg-components/type-form-popup";
import SideMenu from "@mesg-components/side-menu";
import CTA from "~/components/CTA";
import ListSN from "~/components/ListSN";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    TypeFormPopup,
    SideMenu,
    CTA,
    ListSN
  },
  mixins: [
    page({
      title: "Frequently Asked Questions",
      description:
        "Find answers to common questions about MESG’s products and the MESG Foundation."
    })
  ],
  computed: mapGetters({
    links: "links",
    questions: "questions",
    externalLinks: "externalLinks",
    icons: "icons",
    forms: "forms"
  })
};
</script>

<style lang="scss" scoped>
#faq {
  .menu-fixed > nav {
    position: sticky;
    top: 40px;
  }
  ul {
    list-style: none;
    margin-left: 0;
  }
  .separator {
    width: 100%;
    min-width: 100%;
  }
}
</style>

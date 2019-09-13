<template>
  <div>
    <Header :picture="require('~/assets/faq.svg')" :title="title" :description="description"></Header>

    <section id="faq" mb3>
      <Container>
        <div flex row mobile-column space-between>
          <div flex column quarter tablet-and-up>
            <SideMenu :items="questions" />
          </div>
          <ul flex column>
            <li v-for="(category, i) in questions" :key="i">
              <h2 :id="category.id" mb2>{{category.category}}</h2>
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
            <h3 mb1>Chat with us</h3>
            <p
              mb2
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus id nunc suscipit volutpat.</p>
          </div>
          <div half>
            <ListSN :list="['forum', 'twitter', 'discord', 'telegram']" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      title="Still have questions?"
      description="If you didn’t find the answer you were looking for above, reach out! The MESG team is here to help and to answer any questions you might have."
      :links="[{ title: 'Get in touch' , href: externalLinks.contact }]"
      mb1
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Container from "~/components/Container";
import Button from "~/components/Button";
import SideMenu from "~/components/SideMenu";
import CTA from "~/components/CTA";
import ListSN from "~/components/ListSN";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    SideMenu,
    CTA,
    ListSN
  },
  mixins: [
    page({
      title: "Frequently Asked Questions",
      description:
        "Below are some common questions and answers about MESG and the MESG Network."
    })
  ],
  computed: mapGetters({
    links: "links",
    questions: "questions",
    externalLinks: "externalLinks"
  })
};
</script>

<style scoped>
ul {
  list-style: none;
}

.separator {
  width: 100%;
  min-width: 100%;
}
</style>
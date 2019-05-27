<template>
  <div>
    <Header :picture="require('~/assets/faq.svg')" :title="title" :description="description"></Header>

    <section id="faq" mb3>
      <Container>
        <div flex row mobile-column space-between>
          <div flex column quarter>
            <p>menu</p>
          </div>
          <ul flex column>
            <li v-for="(category, i) in questions" :key="i">
              <h2 mb2>{{category.category}}</h2>
              <ul>
                <li v-for="(content, j) in category.contents" :key="j">
                  <h3 mb1>{{content.title }}</h3>
                  <p v-html="content.description" mb2></p>
                </li>
              </ul>
              <hr mb2>
            </li>
            <p>
              * These FAQs are intended only for informational purposes and shouldn’t be relied upon exclusively or considered as warranties. Please refer to
              <a
                href="https://github.com/mesg-foundation/"
                target="_blank"
              >GitHub</a> and other resources for additional details.
            </p>
          </ul>
        </div>
      </Container>
    </section>

    <CallToAction
      mb3
      title="Still have questions?"
      description="If you didn’t find the answer you were looking for above, reach out! The MESG team is here to help and to answer any questions you might have about our development tool and economy."
      :links="[{ title: 'Contact us' , to: links.demo }]"
    />

    <Discover mb3 left="token" right="enterprise"/>

    <GetStarted mb3/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Container from "~/components/Container";
import Button from "~/components/Button";
import CallToAction from "~/components/CallToAction";
import Discover from "~/components/Discover";
import GetStarted from "~/components/GetStarted";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    CallToAction,
    Discover,
    GetStarted
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
    questions: "questions"
  }),
  props: {
    text: {
      type: String
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
h2 {
  text-align: left;
}
</style>
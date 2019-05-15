<template>
  <div>
    <Header mb3 :picture="require('~/assets/faq.svg')" :title="title" :description="description"></Header>

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
    links: "links"
  })
};
</script>
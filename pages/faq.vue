<template>
  <div>
    <Header
      id="introduction"
      class="dark"
      :schema="schema"
      :title="title"
      :description="description"
    />
    <Faq id="faq" class="white"/>
    <CTAContact id="contact" class="dark"/>
  </div>
</template>

<script>
import Header from "~/components/Header";
import FAQ from "~/components/schema/FAQ";
import Faq from "~/components/Faq";
import CTAContact from "~/components/cta/Contact";
import page from "./page";
export default {
  components: {
    Header,
    Faq,
    CTAContact
  },
  mixins: [
    page({
      title: "Frequently Asked Questions",
      description:
        "Below are some common questions and answers about MESG and the MESG Network.",
      schema: FAQ
    })
  ]
};
</script>

<template>
  <div>
    <Header
      id="introduction"
      class="dark"
      :title="title"
      :description="description"
      :schema="schema"
      actionLink="https://marketplace.mesg.com"
      actionTitle="Check out the MESG Marketplace"
    />
    <MarketStory id="market story" class="white"/>
    <CTAGetStarted id="get started" class="dark"/>
  </div>
</template>

<script>
import Header from "~/components/Header";
import SchemaMarketplace from "~/components/schema/Marketplace";
import MarketStory from "~/components/MarketStory";
import CTAGetStarted from "~/components/cta/GetStarted";
import Button from "~/components/Button";
import page from "./page";
export default {
  components: {
    Header,
    MarketStory,
    CTAGetStarted,
    Button
  },
  mixins: [
    page({
      title: "MESG Marketplace",
      description:
        "The new economy for buying and selling modular application components. Choose new application features, or monetize off the ones you create.",
      schema: SchemaMarketplace
    })
  ]
};
</script>

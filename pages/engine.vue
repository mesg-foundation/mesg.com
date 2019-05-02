<template>
  <div>
    <Header
      id="introduction"
      class="dark"
      :schema="schema"
      :title="title"
      :description="description"
    />
    <EngineStory id="engine story" class="white"/>
    <CTAMarket id="cta market" class="dark"/>
  </div>
</template>

<script>
import EngineStory from "~/components/EngineStory";
import CTAMarket from "~/components/cta/Market";
import Header from "~/components/Header";
import SchemaEngine from "~/components/schema/Engine";
import page from "./page";
export default {
  components: {
    Header,
    EngineStory,
    CTAMarket
  },
  mixins: [
    page({
      title: "MESG Engine",
      description:
        "Connect and automate divergent tech with the MESG Engine. Now you can gain control over the flow of data and level of security between your whole stack of connected systems.",
      schema: SchemaEngine
    })
  ]
};
</script>

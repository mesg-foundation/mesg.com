<template>
  <div>
    <Header
      id="introduction"
      class="dark"
      :title="title"
      :description="description"
      :schema="schema"
    />
    <Team id="team" class="white"/>
    <CtaHiring id="ctahiring" class="dark"/>
  </div>
</template>

<script>
import Header from "~/components/Header";
import TEAM from "~/components/schema/TEAM";
import Team from "~/components/Team";
import CtaHiring from "~/components/cta/Hiring";
import page from "./page";
export default {
  components: {
    Header,
    Team,
    CtaHiring
  },
  mixins: [
    page({
      title: "The MESG Team",
      description:
        "The MESG Foundation is a group of passionate individuals dedicated to the creation of a new economy for developers.",
      schema: TEAM
    })
  ]
};
</script>

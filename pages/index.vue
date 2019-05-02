<template>
  <div>
    <Header id="introduction" :schema="schema" :title="title" :description="description">
      <nav flex mt2>
        <Button to="/token" primary>Enterprise Solutions</Button>
        <Button to="/token" secondary>Get Started</Button>
      </nav>
    </Header>
  </div>
</template>


<script>
import Header from "~/components/Header";
import Button from "~/components/Button";
import Video from "~/components/Video";
import page from "./page";
export default {
  components: {
    Header,
    Button,
    Video
  },
  mixins: [
    page({
      title: "The new economy of app development",
      description:
        "Build applications connecting reusable, shareable integrations from any API or decentralized network, managed by the MESG Engine. And get paid for it."
    })
  ]
};
</script>
<template>
  <div>
    <Header :picture="require('~/assets/404.svg')" :title="title" :description="description">
      <div>
        <Button :to="links.home" primary>Return to Homepage</Button>
        <span spacer></span>
      </div>
    </Header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Container from "~/components/Container";
import Button from "~/components/Button";
import GetStarted from "~/components/GetStarted";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    GetStarted
  },
  mixins: [
    page({
      title: "Oops! Looks like something went wrong",
      description:
        "Our best men are taking care of it. Meanwhile click on the button below to go back to Home, let's act like nothing happened."
    })
  ],
  computed: mapGetters({
    links: "links"
  })
};
</script>

<style scoped>
header::before {
  transform: none !important;
}
</style>

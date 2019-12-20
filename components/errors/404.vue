<template>
  <Header
    :picture="require('~/assets/404.svg')"
    :title="title"
    :description="description"
    flex
    align-center
  >
    <div>
      <Button :to="links.home" primary>MESG Home</Button>
    </div>
  </Header>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "@mesg-components/button";
import Header from "~/components/Header";
export default {
  components: {
    Header,
    Button
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  computed: mapGetters({
    links: "links"
  })
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";

header {
  min-height: calc(100vh - (#{$margin} * 4));
  margin-bottom: 0 !important;
  &:before {
    transform: none !important;
  }
}
</style>
<template>
  <Header :picture="require('~/assets/404.svg')" :title="title" :description="description">
    <div>
      <Button :to="links.home" primary mr>MESG Home</Button>
      <span spacer></span>
    </div>
  </Header>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Button from "~/components/Button";
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

<style scoped>
header::before {
  transform: none !important;
}
</style>

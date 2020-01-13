<template>
  <div>
    <Menu :logo="require('~/assets/MESG-logo-horizontal-purple.svg')" :items="menu" is-nuxt />
    <nuxt />
    <Footer />
  </div>
</template>


<script>
import Menu from "@mesg-components/Menu";
import Footer from "~/components/Footer";
import { mapGetters } from "vuex";
export default {
  components: {
    Menu,
    Footer
  },
  computed: mapGetters({
    menu: "menu"
  })
};
</script>

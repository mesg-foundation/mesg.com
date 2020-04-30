<template>
  <div>
    <Menu
      :logo="require('~/assets/MESG-logo-horizontal-purple.svg')"
      :items="menu"
      is-nuxt
      class="menu"
    />
    <nuxt />
    <Footer />
  </div>
</template>


<script>
import Banner from "~/components/Banner";
import Menu from "@mesg-components/menu";
import Footer from "~/components/Footer";
import { mapGetters } from "vuex";
export default {
  components: {
    Banner,
    Menu,
    Footer
  },
  computed: mapGetters({
    menu: "menu"
  })
};
</script>


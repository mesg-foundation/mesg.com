<template>
  <Menu :logo="require('~/assets/MESG-logo-horizontal-purple.svg')" :items="menu" is-nuxt />
</template>

<script>
import Menu from "@mesg-components/menu";
import { mapGetters } from "vuex";
export default {
  components: {
    Menu
  },
  computed: mapGetters({
    menu: "menu"
  })
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
</style>


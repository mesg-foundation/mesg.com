<template>
  <div>
    <Menu class="menu-bar" />
    <nuxt />
    <Footer />
  </div>
</template>


<script>
import Menu from "~/components/Menu";
import Footer from "~/components/Footer";
export default {
  components: {
    Menu,
    Footer
  }
};
</script>

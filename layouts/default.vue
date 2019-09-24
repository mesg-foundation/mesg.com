<template>
  <div>
    <Menu class="menu-bar"/>
    <nuxt/>
    <Footer/>
    <a
      class="producthunt"
      href="https://www.producthunt.com/posts/mesg-orchestrator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-mesg-orchestrator"
      target="_blank"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=168204&theme=light"
        alt="MESG Orchestrator - The decentralized way to orchestrate MESG Services | Product Hunt Embed"
        style="width: 250px; height: 54px;"
        width="250px"
        height="54px"
      />
    </a>
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

<style scoped>
.producthunt {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
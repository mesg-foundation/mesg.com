<template>
  <nav flex row space-between>
    <nuxt-link :to="links.home">
      <img src="~/assets/MESG-logo-horizontal-purple.svg" alt="MESG">
    </nuxt-link>
    <div class="actions">
      <Button :to="links.engine">Products</Button>
      <Button :to="links.getStarted">Developers</Button>
      <Button :to="links.foundation">Foundation</Button>
      <Button :to="links.token">Token</Button>
      <Button primary :to="links.enterprise">Enterprise</Button>
    </div>
  </nav>
</template>

<script>
import Button from "~/components/Button";
import { mapGetters } from "vuex";
export default {
  components: {
    Button
  },
  computed: mapGetters({
    links: "links"
  })
};
</script>


<style scoped>
nav {
  height: 80px;
  background-color: var(--white);
  padding: 18px 40px;
}
img {
  height: 100%;
}
.actions {
  text-align: right;
}
.actions a:not(.btn--primary) {
  color: var(--title-color);
}
</style>

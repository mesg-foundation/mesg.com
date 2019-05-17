<template>
  <nav flex row space-between>
    <nuxt-link :to="links.home">
      <img src="~/assets/MESG-logo-horizontal-purple.svg" alt="MESG">
    </nuxt-link>
    <div class="actions">
      <Button :to="links.engine" class="btn">Products</Button>
      <Button :to="links.getStarted" class="btn">Developers</Button>
      <Button :to="links.foundation" class="btn">Foundation</Button>
      <Button :to="links.token" class="btn" mr1>Token</Button>
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
.btn:hover {
  border-radius: 0;
  border-bottom: solid 2px var(--purple);
  transition: ease-in;
}
</style>

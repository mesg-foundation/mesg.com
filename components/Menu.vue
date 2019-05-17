<template>
  <nav flex row space-between>
    <nuxt-link :to="links.home">
      <img src="~/assets/MESG-logo-horizontal-purple.svg" alt="MESG">
    </nuxt-link>
    <div flex row space-between class="actions">
      <ul flex row id="menu-header">
        <li class="products" flex column align-center>
          <Button class="btn">Products</Button>
          <div flex column class="sub-menu product" p1 mt1>
            <Button :to="links.engine" class="btn">MESG Engine</Button>
            <Button :to="links.marketplace" class="btn">MESG Marketplace</Button>
          </div>
        </li>
        <li class="developers" flex column align-center>
          <Button class="btn">Developers</Button>
          <div flex column class="sub-menu developer" p1 mt1>
            <Button
              href="https://docs.mesg.com/guide/quick-start-guide.html"
              class="btn"
            >Get started</Button>
            <Button href="https://marketplace.mesg.com/" class="btn">Marketplace</Button>
            <Button href="https://docs.mesg.com/" class="btn">Documentation</Button>
            <Button href="https://forum.mesg.com/" class="btn">Forum</Button>
          </div>
        </li>
        <li class="foundation" flex column align-center>
          <Button class="btn">Foundation</Button>
          <div flex column class="sub-menu overview" p1 mt1>
            <Button :to="links.foundation" class="btn">Overview</Button>
            <Button :to="links.partners" class="btn">Partners</Button>
            <Button :to="links.roadmap" class="btn">Roadmap</Button>
            <Button href="https://medium.com/mesg" class="btn">Blog</Button>
          </div>
        </li>
        <Button :to="links.token" class="btn" mr1>Token</Button>
        <Button primary :to="links.enterprise">Enterprise</Button>
      </ul>
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
.actions .nuxt-link-active {
  border-bottom: solid 2px var(--purple);
}
.btn:hover {
  border-radius: 0;
  border-bottom: solid 2px var(--purple);
  transition: ease-in;
}

#menu-header {
  position: relative;
}

.sub-menu {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  width: auto;
  z-index: 1;
  position: relative;
  border-radius: 6px;
  background-color: var(--white);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s ease-in-out;
}
.sub-menu a {
  height: 50px;
}

.products:hover .product {
  opacity: 1;
  visibility: visible;
}
.developers:hover .developer {
  opacity: 1;
  visibility: visible;
}
.foundation:hover .overview {
  opacity: 1;
  visibility: visible;
}
</style>

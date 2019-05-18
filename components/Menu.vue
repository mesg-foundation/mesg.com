<template>
  <nav flex row space-between>
    <nuxt-link :to="links.home">
      <img src="~/assets/MESG-logo-horizontal-purple.svg" alt="MESG">
    </nuxt-link>
    <div flex row space-between class="actions">
      <ul flex row>
        <li class="products" flex column align-center>
          <Button class="btn main">Products</Button>
          <div flex column class="sub-menu product" p1 mt1>
            <Button :to="links.engine" class="btn">MESG Engine</Button>
            <Button :to="links.marketplace" class="btn">MESG Marketplace</Button>
            <Button class="btn soon">
              Showcase
              <span>coming soon</span>
            </Button>
            <Button class="btn soon">
              FAQ
              <span>coming soon</span>
            </Button>
          </div>
        </li>
        <li class="developers" flex column align-center>
          <Button class="btn main">Developers</Button>
          <div flex column class="sub-menu developer" p1 mt1>
            <Button
              href="https://docs.mesg.com/guide/quick-start-guide.html"
              target="_blank"
              class="btn"
            >Get started</Button>
            <Button href="https://marketplace.mesg.com/" target="_blank" class="btn">Marketplace</Button>
            <Button href="https://docs.mesg.com/" target="_blank" class="btn">Documentation</Button>
            <Button href="https://forum.mesg.com/" target="_blank" class="btn">Forum</Button>
          </div>
        </li>
        <li class="foundation" flex column align-center>
          <Button class="btn main">Foundation</Button>
          <div flex column class="sub-menu overview" p1 mt1>
            <Button :to="links.foundation" class="btn">Overview</Button>
            <Button :to="links.partners" class="btn">Partners</Button>
            <Button class="btn soon">
              Roadmap
              <span>coming soon</span>
            </Button>
            <Button href="https://medium.com/mesg" target="_blank" class="btn">Blog</Button>
          </div>
        </li>
        <Button :to="links.token" class="btn main" mr2>Token</Button>
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
  width: 300px;
  max-width: 100%;
  display: inline-block;
}
.actions a:not(.btn--primary) {
  color: var(--title-color);
}

ul {
  list-style: none;
  line-height: 40px;
  list-style-position: outside;
}
li {
  width: 100%;
}
li:hover {
  cursor: pointer;
}

i {
  display: none;
  margin-right: 10px;
}

.sub-menu {
  position: absolute;
  display: none;
  top: 50px;
  min-width: 200px;
  opacity: 0;
  z-index: 1;
  border-radius: 6px;
  background-color: var(--white);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  animation: appear-in 0.2s ease-in;
  border-top: solid 6px var(--purple);
}
.sub-menu::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  bottom: 100%;
  left: 45%;
  border-bottom: 15px solid var(--purple);
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
}
.sub-menu a {
  font-weight: normal;
  height: 50px;
  display: block;
  text-align: left;
}
.sub-menu a:hover {
  color: var(--purple);
  opacity: 1;
  font-weight: 600;
  transition: 0.1s ease-in;
}
.sub-menu:hover {
  cursor: default;
}
.sub-menu .soon {
  opacity: 0.5;
}
.sub-menu .soon:hover {
  opacity: 0.5;
  font-weight: normal;
  color: var(--title-color);
}
.sub-menu span {
  font-size: 10px;
}

.products:hover .product {
  opacity: 1;
  display: block;
}
.developers:hover .developer {
  opacity: 1;
  display: block;
}
.foundation:hover .overview {
  opacity: 1;
  display: block;
}

@keyframes appear-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

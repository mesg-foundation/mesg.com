<template>
  <div>
    <nav flex space-between align-center>
      <div flex row space-between align-center>
        <div>
          <nuxt-link :to="links.home">
            <img src="~/assets/MESG-logo-horizontal-purple.svg" alt="MESG">
          </nuxt-link>
        </div>
        <a @click="open = !open" class="burger" hidden-desktop>
          <span v-if="open">&times;</span>
          <span v-else>☰</span>
        </a>
      </div>
      <div flex row space-between class="actions" :class="{open}">
        <ul flex row mobile-column>
          <li class="drop-down" flex column align-center>
            <a href="#" class="title">Products</a>
            <div flex column class="sub-menu" p1 mt1>
              <nuxt-link :to="links.engine" class="btn">MESG SDK</nuxt-link>
              <nuxt-link :to="links.marketplace" class="btn">MESG Marketplace</nuxt-link>
              <nuxt-link :to="links.showcase" class="btn">Showcase</nuxt-link>
              <nuxt-link :to="links.faq" class="btn">FAQ</nuxt-link>
            </div>
          </li>
          <li class="drop-down" flex column align-center>
            <a href="#" class="title">Developers</a>
            <div flex column class="sub-menu" p1 mt1>
              <a :href="externalLinks.getStarted" target="_blank" class="btn">Get started</a>
              <a :href="externalLinks.marketplace" target="_blank" class="btn">Marketplace</a>
              <a :href="externalLinks.documentation" target="_blank" class="btn">Documentation</a>
              <a :href="externalLinks.forum" target="_blank" class="btn">Forum</a>
            </div>
          </li>
          <li class="drop-down" flex column align-center>
            <a href="#" class="title">Foundation</a>
            <div flex column class="sub-menu" p1 mt1>
              <nuxt-link :to="links.foundation" class="btn">Overview</nuxt-link>
              <nuxt-link :to="links.partners" class="btn">Partners</nuxt-link>
              <nuxt-link :to="links.roadmap" class="btn">Roadmap</nuxt-link>
              <a :href="externalLinks.blog" target="_blank" class="btn">Blog</a>
            </div>
          </li>
          <li flex align-center>
            <nuxt-link :to="links.token" class="token">Token</nuxt-link>
          </li>
          <li flex align-center>
            <Button primary :to="links.enterprise" class="enterprise">Enterprise</Button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Button from "~/components/Button";
import { mapGetters } from "vuex";
export default {
  components: {
    Button
  },
  data() {
    return {
      open: false
    };
  },
  computed: mapGetters({
    links: "links",
    externalLinks: "externalLinks"
  }),
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.open = false;
      next();
    });
  }
};
</script>


<style lang="scss" scoped>
nav {
  height: 80px;
  padding: 18px 40px;
}
img {
  max-width: 153px;
  max-height: 40px;
}
.enterprise {
  width: 100%;
}
li {
  height: 80px;
}
li > a:not(.btn--primary) {
  line-height: 80px;
  display: block;
}

//drop-down menu//
@media only screen and (min-width: $tablet-breakpoint + 1) {
  .actions {
    width: 300px;
    max-width: 100%;
    display: inline-block;
  }
  .actions a:not(.btn--primary) {
    color: var(--title-color);
  }
  ul {
    list-style: none;
  }
  li {
    text-align: center;
  }
  .btn {
    padding: 0.75em 2em;
  }
  .sub-menu {
    position: absolute;
    display: none;
    top: 47px;
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
  .drop-down:hover .sub-menu {
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
}

//menu responsive//
@media only screen and (max-width: $tablet-breakpoint) {
  .actions {
    border-radius: 6px;
    display: none;
    position: absolute;
    left: 2.5%;
    width: 95%;
    top: 80px;
    z-index: 1;
    background-color: var(--white);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  }
  .actions.open {
    display: block;
    animation: appear-in 0.2s ease-in;
  }
  .sub-menu a {
    font-weight: normal;
    display: block;
    color: var(--title-color);
  }
  .token {
    color: var(--title-color);
  }
  .burger {
    text-align: right;
    display: inline-block;
    line-height: 44px;
    height: 44px;
    font-size: 2em;
  }
  .btn {
    padding: 10px;
    padding-left: 0;
    padding-right: 0;
  }
  .title {
    width: 100%;
    font-weight: bold;
    color: var(--light-purple);
  }
  .sub-menu {
    width: 100%;
    padding: 0 !important;
    margin-top: 0 !important;
  }
  ul {
    padding: 40px;
    border-top: solid 6px var(--purple);
    list-style: none;
    border-radius: 6px;
  }
  ul::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    right: 20px;
    border-bottom: 10px solid var(--purple);
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
  li {
    height: auto;
  }
  li > a:not(.btn--primary) {
    line-height: 40px;
  }
  .appear-enter-active {
    animation: appear-in 0.2s ease-in;
  }
  .appear-leave-active {
    animation: appear-in 0.2s reverse ease-out;
  }
  @keyframes appear-in {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
//menu mobile//
@media only screen and (max-width: $mobile-breakpoint) {
  ul {
    align-items: left !important;
    padding-top: 20px;
  }
  li {
    margin-right: 0 !important;
  }
  li > a:not(.btn--primary) {
    line-height: 60px;
  }
  .btn {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .btn--primary {
    margin-top: 20px;
  }
}
</style>

<template>
  <div>
    <nav flex space-between align-center>
      <div flex row space-between align-center>
        <div>
          <nuxt-link :to="links.home">
            <img src="~/assets/MESG-logo-horizontal-purple.svg" alt="MESG" />
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
            <a href="#" class="top-menu">
              Technology
              <i class="far fa-angle-down"></i>
            </a>
            <div flex column class="sub-menu" p1 mt1>
              <nuxt-link :to="links.orchestrator">Orchestrator</nuxt-link>
              <nuxt-link :to="links.engine">SDK</nuxt-link>
              <nuxt-link :to="links.marketplace">Marketplace</nuxt-link>
              <nuxt-link :to="links.enterprise">Enterprise</nuxt-link>
            </div>
          </li>
          <li class="drop-down" flex column align-center>
            <a href="#" class="top-menu">
              Developers
              <i class="far fa-angle-down"></i>
            </a>
            <div flex column class="sub-menu" p1 mt1>
              <a :href="externalLinks.getStarted" target="_blank">Get started</a>
              <a :href="externalLinks.marketplace" target="_blank">Marketplace</a>
              <a :href="externalLinks.documentation" target="_blank">Documentation</a>
              <a :href="externalLinks.tutorials" target="_blank">Tutorials</a>
              <a :href="externalLinks.github" target="_blank">Github</a>
            </div>
          </li>
          <li flex align-center>
            <nuxt-link :to="links.showcase" class="top-menu">Showcase</nuxt-link>
          </li>
          <li flex align-center>
            <nuxt-link :to="links.contributions" class="top-menu">Contributions</nuxt-link>
          </li>
          <li flex align-center>
            <nuxt-link :to="links.token" class="top-menu">Token</nuxt-link>
          </li>
          <li flex align-center>
            <Button primary small :href="externalLinks.getStarted">Get started</Button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Button from "@mesg-components/button";
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
  padding: calc(var(--margin) - 2px) calc(var(--margin) * 2);
  img {
    max-width: 153px;
    max-height: 40px;
    &:hover {
      opacity: 0.7;
      transition: 0.1s ease;
    }
  }
  li {
    margin-right: 0;
    font-size: 15px;
    height: 80px;
    margin-left: 0;
    &:before {
      display: none;
    }
  }
  li > a:not(.btn--primary) {
    line-height: 80px;
    display: block;
  }
  .top-menu {
    color: var(--title-color);
    &:hover {
      opacity: 0.7;
      transition: 0.1s ease;
    }
  }
  .btn--small {
    padding: 0.45em;
  }
  .top-menu i {
    font-size: 12px;
    margin-left: calc(var(--margin) / 4);
  }
}

//drop-down menu//
@media only screen and (min-width: $tablet-breakpoint + 1) {
  .actions {
    max-width: 100%;
    display: inline-block;
  }
  li {
    text-align: center;
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
    &::before {
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
    a {
      font-weight: normal;
      height: 50px;
      display: block;
      text-align: left;
      padding: 0.75em 2em;
      color: var(--text-color);
      &:hover {
        color: var(--purple);
        font-weight: 600;
        transition: 0.1s ease;
      }
    }
  }
  .drop-down:hover {
    .sub-menu {
      opacity: 1;
      display: block;
    }
    .top-menu {
      opacity: 0.7;
      transition: 0.1s ease;
    }
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
    &.open {
      display: block;
      animation: appear-in 0.2s ease-in;
    }
  }

  .burger {
    text-align: right;
    display: inline-block;
    line-height: 44px;
    height: 44px;
    font-size: 2em;
    &:hover {
      cursor: pointer;
    }
  }

  ul {
    padding: calc(var(--margin) * 2);
    border-top: solid 6px var(--purple);
    border-radius: 6px;
    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      bottom: 100%;
      right: var(--margin);
      border-bottom: 10px solid var(--purple);
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
    }
    li {
      height: fit-content;
    }
    li > a:not(.btn--primary) {
      line-height: 40px;
    }
  }

  .top-menu {
    width: 100%;
    font-weight: bold;
    color: var(--title-color);
    i {
      display: none;
    }
  }

  .sub-menu {
    width: 100%;
    padding: 0 !important;
    margin-top: 0 !important;
    a {
      color: var(--text-color);
      font-weight: normal;
      display: block;
      padding: calc(var(--margin) / 2);
      padding-left: 0;
      padding-right: 0;
      &:hover {
        color: var(--purple);
        font-weight: 600;
        transition: 0.1s ease;
      }
    }
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
    align-items: left;
  }
  li {
    margin-bottom: var(--margin);
    a:not(.btn--primary) {
      line-height: 40px;
      padding: 0;
    }
  }
  .btn--primary {
    line-height: 50px;
    margin-top: calc(var(--margin) * 2);
  }
}
</style>

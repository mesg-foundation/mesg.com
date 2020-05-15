<template>
  <section id="footer">
    <div>
      <Container>
        <nav flex row space-between wrap mobile-column-reverse>
          <div flex column third>
            <nuxt-link :to="links.home" mb1>
              <img src="~/assets/MESG-logo-horizontal-purple.svg" alt="MESG" />
            </nuxt-link>
            <p class="copyright" mb2>© 2020 MESG Foundation</p>
            <nuxt-link :to="links.policy" class="policy" mb2>Privacy & Cookie Policy</nuxt-link>
            <div flex space-between wrap>
              <a v-for="(icon, i) in icons" :key="i" :href="icon.href" target="_blank" class="icon">
                <i :class="icon.icon"></i>
              </a>
            </div>
          </div>
          <ul flex row mobile-column>
            <li flex column quarter>
              <a href="#" class="category" mb1>Technology</a>
              <nuxt-link :to="links.engine">SDK</nuxt-link>
              <nuxt-link :to="links.marketplace">Services</nuxt-link>
              <nuxt-link :to="links.orchestrator">Process</nuxt-link>
              <nuxt-link :to="links.token">Economy</nuxt-link>
            </li>
            <li flex column quarter>
              <a href="#" class="category" mb1>Developers</a>
              <a :href="externalLinks.github" target="_blank">Github</a>
              <nuxt-link :to="links.showcase">Showcase</nuxt-link>
              <a :href="externalLinks.roadmap" target="_blank">Roadmap</a>
            </li>
            <li flex column quarter>
              <a href="#" class="category" mb1>About us</a>
              <nuxt-link :to="links.foundation">Foundation</nuxt-link>
              <nuxt-link :to="links.faq">Help Center</nuxt-link>
              <a :href="externalLinks.blogFooter" target="_blank">Blog</a>
              <a :href="externalLinks.press" target="_blank">Press & Media</a>
            </li>
            <li flex column quarter>
              <a href="#" class="category" mb1>Community</a>
              <nuxt-link :to="links.contributions">Contributions Hub</nuxt-link>
              <a :href="externalLinks.forumFooter" target="_blank">Forum</a>
              <a :href="externalLinks.discord" target="_blank">Discord</a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  </section>
</template>

<script>
import Button from "@mesg-components/button";
import Container from "~/components/Container";
import { mapGetters } from "vuex";
export default {
  components: {
    Button,
    Container
  },
  computed: {
    ...mapGetters({
      links: "links",
      externalLinks: "externalLinks"
    }),
    icons() {
      return [
        { href: this.externalLinks.blogFooter, icon: "fab fa-medium" },
        { href: this.externalLinks.github, icon: "fab fa-github" },
        { href: this.externalLinks.forumFooter, icon: "fas fa-comments" },
        { href: this.externalLinks.discord, icon: "fab fa-discord" },
        { href: this.externalLinks.twitter, icon: "fab fa-twitter" },
        { href: this.externalLinks.telegram, icon: "fab fa-telegram-plane" },
        { href: this.externalLinks.linkedin, icon: "fab fa-linkedin-in" },
        { href: this.externalLinks.facebook, icon: "fab fa-facebook" },
        { href: this.externalLinks.reddit, icon: "fab fa-reddit-alien" }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
#footer {
  padding: calc(#{$margin} * 2);
  width: 100%;
  background-color: $grey-light;
}

nav {
  div {
    height: fit-content;
  }
  img {
    height: 40px;
  }
  .copyright {
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $text-color;
  }
  .policy {
    font-size: 12px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $text-color;
  }
  .icon {
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    color: $text-color;
    transition: 0.1s ease-in;
    &:hover {
      color: $title-color;
      font-weight: normal;
    }
  }
}

ul {
  list-style: none;
  margin-left: 0;
  li {
    height: fit-content;
    margin-bottom: 0;
    .category {
      font-size: 17px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: $title-color;
      display: inline;
    }
    a {
      font-size: 15px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: left;
      padding: 0;
      margin-bottom: calc(#{$margin} / 2);
      color: $text-color;
      transition: 0.1s ease-in;
    }
  }
}

a:hover {
  color: $title-color;
  font-weight: bold;
}

@media only screen and (max-width: $tablet-breakpoint) {
  #footer {
    padding: calc(#{$margin} * 2);
  }
  .container {
    padding: 0;
  }
}

@media only screen and (max-width: $mobile-breakpoint) {
  img {
    margin-top: calc(#{$margin} * 2);
  }
  li {
    margin-bottom: $margin !important;
  }
}
</style>

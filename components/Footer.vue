<template>
  <section id="footer">
    <div class="bg">
      <Container>
        <nav flex row space-between wrap mobile-column-reverse>
          <div flex column third>
            <nuxt-link :to="links.home">
              <img src="~/assets/MESG-logo-horizontal-purple.svg" alt="MESG" />
            </nuxt-link>
            <p class="copyright">© 2019 MESG Foundation, All rights reserved.</p>
            <nuxt-link :to="links.policy" class="policy link-secondary" mb2>Privacy & Cookie Policy</nuxt-link>
            <div flex space-between wrap>
              <a v-for="(icon, i) in icons" :key="i" :href="icon.href" target="_blank" class="icon">
                <i :class="icon.icon"></i>
              </a>
            </div>
          </div>
          <ul flex row mobile-column class="menu">
            <li flex column quarter>
              <a href="#" class="category" mb1>Products</a>
              <nuxt-link :to="links.engine" class="link-secondary" mb1>MESG SDK</nuxt-link>
              <nuxt-link :to="links.marketplace" class="link-secondary" mb1>MESG Marketplace</nuxt-link>
              <nuxt-link :to="links.showcase" class="link-secondary" mb1>Showcase</nuxt-link>
              <nuxt-link :to="links.faq" class="link-secondary last">FAQ</nuxt-link>
            </li>
            <li flex column quarter>
              <a href="#" class="category" mb1>Developers</a>
              <a
                :href="externalLinks.getStarted"
                target="_blank"
                class="link-secondary"
                mb1
              >Get started</a>
              <a
                :href="externalLinks.marketplace"
                target="_blank"
                class="link-secondary"
                mb1
              >Marketplace</a>
              <a
                :href="externalLinks.documentation"
                target="_blank"
                class="link-secondary"
                mb1
              >Documentation</a>
              <a :href="externalLinks.forum" target="_blank" class="link-secondary last">Forum</a>
            </li>
            <li flex column quarter>
              <a href="#" class="category" mb1>Foundation</a>
              <nuxt-link :to="links.foundation" class="link-secondary" mb1>Overview</nuxt-link>
              <nuxt-link :to="links.roadmap" class="link-secondary" mb1>Roadmap</nuxt-link>
              <a :href="externalLinks.blog" target="_blank" class="link-secondary last">Blog</a>
            </li>
            <li flex column quarter>
              <nuxt-link :to="links.token" class="link-secondary last">Token</nuxt-link>
              <nuxt-link :to="links.enterprise" class="link-secondary">Enterprise</nuxt-link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  </section>
</template>

<script>
import Button from "~/components/Button";
import Container from "~/components/Container";
import Card from "~/components/Card";
import Newsletter from "~/components/Newsletter";
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
        { href: this.externalLinks.blog, icon: "fab fa-medium" },
        { href: this.externalLinks.github, icon: "fab fa-github" },
        { href: this.externalLinks.forum, icon: "fas fa-comments" },
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
#footer {
  padding: calc(var(--margin) * 3);
  width: 100%;
  background-color: var(--light-background);
}

.outline {
  border: solid 1px var(--deep-purple);
  background-color: var(--dark-purple);
}

.purple {
  color: var(--deep-purple);
}
.white {
  color: var(--white);
}

.copyright {
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--text-color);
}

.policy {
  font-size: 12px !important;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--text-color);
}

.category {
  font-size: 17px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--title-color);
  display: inline;
}

.icon {
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  color: var(--text-color);
}
.icon:hover {
  opacity: 0.7;
  transition: 0.1s ease;
}

.link-secondary {
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  padding: 0;
  color: var(--text-color);
}

img {
  height: 40px;
}
img:hover {
  opacity: 0.7;
  transition: 0.1s ease;
}

@media only screen and (max-width: $mobile-breakpoint) {
  .container {
    padding: 0;
  }
  a.link {
    min-height: auto;
    margin-bottom: 0;
  }
  .last {
    padding-bottom: calc(var(--margin) * 2);
  }
  img {
    margin-top: calc(var(--margin) * 2);
    margin-bottom: calc(var(--margin) * 1);
  }
}
</style>

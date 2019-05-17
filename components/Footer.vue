<template>
  <section id="footer">
    <div class="bg">
      <Container>
        <nav flex row space-between mb2>
          <div flex column one-quarter>
            <nuxt-link :to="links.home">
              <img src="~/assets/MESG-logo-horizontal-white.svg" alt="MESG" mb1>
            </nuxt-link>
            <p class="copyright" mb2>© 2019 MESG Foundation, All rights reserved.</p>
            <div flex space-between>
              <a v-for="(icon, i) in icons" :key="i" :href="icon.href" target="_blank" class="icon">
                <i :class="icon.icon"></i>
              </a>
            </div>
          </div>
          <div flex row three-quarter>
            <div flex column one-quarter>
              <p class="category" mb1>Products</p>
              <Button :to="links.engine" class="link" mb1>MESG Engine</Button>
              <Button :to="links.marketplace" class="link" mb1>MESG Marketplace</Button>
              <Button class="link" mb1>
                <span>Showcase</span>
              </Button>
              <Button class="link" mb1>
                <span>FAQ</span>
              </Button>
            </div>
            <div flex column one-quarter>
              <p class="category" mb1>Developers</p>
              <Button :href="externalLinks.getStarted" target="_blank" class="link" mb1>Get started</Button>
              <Button :href="externalLinks.marketplace" target="_blank" class="link" mb1>Marketplace</Button>
              <Button
                :href="externalLinks.documentation"
                target="_blank"
                class="link"
                mb1
              >Documentation</Button>
              <Button :href="externalLinks.forum" target="_blank" class="link" mb1>Forum</Button>
            </div>
            <div flex column one-quarter>
              <p class="category" mb1>Foundation</p>
              <Button :to="links.foundation" class="link" mb1>Overview</Button>
              <Button :to="links.partners" class="link" mb1>Partners</Button>
              <Button :to="links.roadmap" class="link" mb1>Roadmap</Button>
              <Button :href="externalLinks.blog" target="_blank" class="link" mb1>Blog</Button>
            </div>
            <div flex column one-quarter>
              <Button :to="links.token" class="link" mb1>Token</Button>
            </div>
          </div>
        </nav>
      </Container>

      <hr mb2>

      <section id="newsletter">
        <Container flex row align-center>
          <p class="category text-right" mr1>Sign up for our monthly newsletter</p>
          <div>
            <form action>
              <input type="email" name="email" placeholder="Your email address">
              <button type="submit" class="submit-newsletter">
                <i class="fas fa-arrow-right"/>
              </button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  </section>
</template>

<script>
import Button from "~/components/Button";
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
        { href: this.externalLinks.blog, icon: "fab fa-medium" },
        { href: this.externalLinks.github, icon: "fab fa-github" },
        { href: this.externalLinks.forum, icon: "fas fa-comments" },
        { href: this.externalLinks.discord, icon: "fab fa-discord" },
        { href: this.externalLinks.twitter, icon: "fab fa-twitter" },
        { href: this.externalLinks.linkedin, icon: "fab fa-linkedin-in" },
        { href: this.externalLinks.facebook, icon: "fab fa-facebook-f" }
      ];
    }
  }
};
</script>

<style scoped>
.bg {
  padding: 40px;
  width: 100%;
  background-color: var(--dark-purple);
}

.copyright {
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--deep-purple);
}

.category {
  font-size: 15px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--deep-purple);
  display: inline;
}

span {
  color: var(--deep-purple);
}

i {
  margin-right: 0;
}

.icon {
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  color: var(--white);
}

.link {
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  padding: 0;
  color: var(--white);
}

hr {
  color: var(--deep-purple);
}

img {
  height: 40px;
}

nav {
  width: 100%;
  background-color: var(--dark-purple);
}

.text-right {
  text-align: right;
}

form {
  position: relative;
}

input[type="email"] {
  font-size: 15px;
  width: 300px;
  padding: 13px var(--margin);
  border: solid 1px var(--deep-purple);
  border-radius: 3px;
  background-color: var(--dark-purple);
  color: var(--white);
  padding-right: calc(3 * var(--margin));
}

button[type="submit"] {
  transform: translateX(-40px);
  background: transparent;
  border: none;
  font-size: 18px;
  padding: 0;
  color: var(--white);
}
</style>

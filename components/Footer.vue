<template>
  <section id="footer">
    <div class="bg">
      <Container>
        <nav flex row space-between mb2>
          <div flex column one-quarter>
            <nuxt-link :to="links.home">
              <img src="~/assets/MESG-logo-horizontal-white.svg" alt="MESG" mb1>
              <p class="copyright" mb2>© 2019 MESG Foundation, All rights reserved.</p>
              <div flex row space-between class="icon">
                <i class="fab fa-medium"></i>
                <i class="fab fa-github"></i>
                <i class="fas fa-comments"></i>
                <i class="fab fa-discord"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-facebook-f"></i>
              </div>
            </nuxt-link>
          </div>
          <div flex row three-quarter>
            <div flex column one-quarter>
              <p class="category" mb1>Products</p>
              <Button :to="links.engine" class="link" mb1>MESG Engine</Button>
              <Button :to="links.marketplace" class="link" mb1>MESG Marketplace</Button>
              <Button :to="links.showcase" class="link" mb1>Showcase</Button>
              <Button :to="links.faq" class="link" mb1>FAQ</Button>
            </div>
            <div flex column one-quarter>
              <p class="category" mb1>Developers</p>
              <Button :to="links.engine" class="link" mb1>Get Started</Button>
              <Button :to="links.marketplace" class="link" mb1>Marketplace</Button>
              <Button :to="links.showcase" class="link" mb1>Documentation</Button>
              <Button :to="links.faq" class="link" mb1>Forum</Button>
            </div>
            <div flex column one-quarter>
              <p class="category" mb1>Foundation</p>
              <Button :to="links.engine" class="link" mb1>Overview</Button>
              <Button :to="links.marketplace" class="link" mb1>Partners</Button>
              <Button :to="links.showcase" class="link" mb1>Roadmap</Button>
              <Button :to="links.faq" class="link" mb1>Blog</Button>
            </div>
            <div flex column one-quarter>
              <Button :to="links.engine" class="link" mb1>Token</Button>
            </div>
          </div>
        </nav>
      </Container>

      <hr class="separator" mb2>

      <section id="newsletter">
        <Container>
          <div flex row space-between>
            <p class="category text-center">Sign up for our monthly newsletter</p>
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
  computed: mapGetters({
    links: "links"
  })
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
  color: var(--light-purple);
}

.category {
  font-size: 15px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--light-purple);
}

i {
  margin-right: 0;
}

.icon {
  font-size: 20px;
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

.separator {
  height: 1px;
  opacity: 0.5;
  color: var(--light-purple);
}

img {
  height: 40px;
}

nav {
  width: 100%;
  background-color: var(--dark-purple);
}
</style>

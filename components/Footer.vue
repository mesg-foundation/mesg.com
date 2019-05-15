<template>
  <section id="footer">
    <Container>
      <nav flex row space-between>
        <div flex column one-quarter>
          <nuxt-link :to="links.home">
            <img src="~/assets/MESG-logo-horizontal-purple.svg" alt="MESG">
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
.category {
  color: var(--light-purple);
}

.link {
  font-family: "OpenSans", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  padding: 0;
  color: var(--white);
}

nav {
  width: 100%;
  background-color: var(--dark-purple);
}
</style>

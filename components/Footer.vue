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
              <a href="https://medium.com/mesg" target="_blank" class="icon">
                <i class="fab fa-medium"></i>
              </a>
              <a href="https://github.com/mesg-foundation" target="_blank" class="icon">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://forum.mesg.com/" target="_blank" class="icon">
                <i class="fas fa-comments"></i>
              </a>
              <a href="https://discordapp.com/invite/SaZ5HcE" target="_blank" class="icon">
                <i class="fab fa-discord"></i>
              </a>
              <a href="https://twitter.com/mesgfoundation" target="_blank" class="icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/mesg/" target="_blank" class="icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.facebook.com/mesgfoundation/" target="_blank" class="icon">
                <i class="fab fa-facebook-f"></i>
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
              <Button
                href="https://docs.mesg.com/guide/quick-start-guide.html"
                target="_blank"
                class="link"
                mb1
              >Get started</Button>
              <Button
                href="https://marketplace.mesg.com/"
                target="_blank"
                class="link"
                mb1
              >Marketplace</Button>
              <Button href="https://docs.mesg.com/" target="_blank" class="link" mb1>Documentation</Button>
              <Button href="https://forum.mesg.com/" target="_blank" class="link" mb1>Forum</Button>
            </div>
            <div flex column one-quarter>
              <p class="category" mb1>Foundation</p>
              <Button :to="links.foundation" class="link" mb1>Overview</Button>
              <Button :to="links.partners" class="link" mb1>Partners</Button>
              <Button :to="links.roadmap" class="link" mb1>Roadmap</Button>
              <Button href="https://medium.com/mesg" target="_blank" class="link" mb1>Blog</Button>
            </div>
            <div flex column one-quarter>
              <Button :to="links.token" class="link" mb1>Token</Button>
            </div>
          </div>
        </nav>
      </Container>

      <hr mb2>

      <section id="newsletter">
        <Container>
          <form flex row align-center>
            <p class="category text-right" mr2>Sign up for our monthly newsletter</p>
            <div class="newsletter" flex row space-between>
              <input type="text" name="email" value="Your email adress">
              <Button class="link submit" type="submit">
                <i class="fas fa-arrow-right"></i>
              </Button>
            </div>
          </form>
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

span {
  color: var(--light-purple);
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

.text-right {
  text-align: right;
}

.newsletter {
  width: 300px;
  padding: 20px;
  border: solid 1px var(--light-purple);
  border-radius: 3px;
  background-color: var(--dark-purple);
  color: var(--white);
}

form {
  width: 800px;
  text-align: center;
}

input[type="text"] {
  font-size: 15px;
  color: var(--white);
  background-color: var(--dark-purple);
  border: none;
}

.submit {
  text-align: right;
}
</style>

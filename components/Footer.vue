<template>
  <section id="footer">
    <div class="bg">
      <Container>
        <nav flex row space-between wrap mobile-column-reverse mb2>
          <div flex column third>
            <nuxt-link :to="links.home">
              <img src="~/assets/MESG-logo-horizontal-white.svg" alt="MESG" mb1>
            </nuxt-link>
            <p class="copyright" mb2>© 2019 MESG Foundation, All rights reserved.</p>
            <div flex space-between wrap>
              <a v-for="(icon, i) in icons" :key="i" :href="icon.href" target="_blank" class="icon">
                <i :class="icon.icon"></i>
              </a>
            </div>
          </div>
          <div flex row mobile-column class="menu">
            <div flex column quarter>
              <p class="category" mb1>Products</p>
              <Button :to="links.engine" class="link" mb1>MESG Engine</Button>
              <Button :to="links.marketplace" class="link" mb1>MESG Marketplace</Button>
              <Button class="link" mb1>
                <span>Showcase</span>
              </Button>
              <Button class="link last" mb1>
                <span>FAQ</span>
              </Button>
            </div>
            <div flex column quarter>
              <p class="category" mb1>Developers</p>
              <Button :href="externalLinks.getStarted" target="_blank" class="link" mb1>Get started</Button>
              <Button :href="externalLinks.marketplace" target="_blank" class="link" mb1>Marketplace</Button>
              <Button
                :href="externalLinks.documentation"
                target="_blank"
                class="link"
                mb1
              >Documentation</Button>
              <Button :href="externalLinks.forum" target="_blank" class="link last" mb1>Forum</Button>
            </div>
            <div flex column quarter>
              <p class="category" mb1>Foundation</p>
              <Button :to="links.foundation" class="link" mb1>Overview</Button>
              <Button :to="links.partners" class="link" mb1>Partners</Button>
              <Button :to="links.roadmap" class="link" mb1>Roadmap</Button>
              <Button :href="externalLinks.blog" target="_blank" class="link last" mb1>Blog</Button>
            </div>
            <div flex column quarter>
              <Button :to="links.token" class="link token">Token</Button>
              <Button :to="links.enterprise" class="link">Enterprise</Button>
            </div>
          </div>
        </nav>
      </Container>

      <hr mb2>

      <section id="newsletter">
        <Container flex row mobile-column-reverse align-center>
          <p class="category text-right" mr1>Sign up for our monthly newsletter</p>
          <div class="form">
            <form data-token="32bdd13cbff3931061eb3eca01321d84" @submit.prevent="submit">
              <input type="email" placeholder="Your email address" v-model="email" required>
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
  data() {
    return {
      email: ""
    };
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
  },
  methods: {
    async submit() {
      const token = "32bdd13cbff3931061eb3eca01321d84";
      const data = new FormData();
      data.append("email", this.email);
      data.append("token", token);
      const req = window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");
      req.open(
        "POST",
        "https://app.sgwidget.com/v2/api/newsletter-signup",
        false
      );
      req.onload = () => {
        const res = JSON.parse(req.responseText);
        if (req.status === 200) {
          alert(res.message);
          this.email = "";
        } else {
          alert(res.email[0]);
        }
      };
      req.send(data);
    }
  }
};
</script>

<style lang="scss" scoped>
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

@media only screen and (max-width: $mobile-breakpoint) {
  .container {
    padding: 0;
  }
  .menu {
    margin-bottom: 40px;
  }
  a.link {
    min-height: auto;
    margin-bottom: 0;
  }
  .last {
    padding-bottom: 20px;
  }
  img {
    margin-top: 40px;
  }
  .token {
    margin-bottom: 40px !important;
  }
  .form {
    min-height: 50px;
    margin-bottom: 20px !important;
  }
  .form button {
    position: absolute;
    right: -20px;
    top: 12px;
  }
  #newsletter p {
    margin: auto !important;
  }
}
</style>

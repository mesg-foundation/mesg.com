<template>
  <section id="get-started">
    <Container>
      <Card p2>
        <div flex row align-center space-between mobile-column>
          <div class="content" flex column>
            <h3 mb1>{{title}}</h3>
            <p mb1>{{description}}</p>
            <nav flex row wrap class="links">
              <a
                v-for="(link, i) in links"
                :key="i"
                :href="link.to"
                target="_blank"
                class="link-secondary"
              >
                <i v-if="link.icon" :class="link.icon"></i>
                {{link.title}}
              </a>
            </nav>
          </div>
          <div flex column third class="button">
            <Button primary :href="externalLinks.getStarted" target="_blank">Get started</Button>
          </div>
        </div>
      </Card>
    </Container>
    <div class="background"></div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Container from "~/components/Container";
import Card from "@mesg-components/card";
import Button from "@mesg-components/button";
export default {
  components: {
    Container,
    Card,
    Button
  },
  computed: {
    ...mapGetters({
      externalLinks: "externalLinks",
      links: "links"
    }),
    title() {
      return "Ready to build?";
    },
    description() {
      return "MESG is free to start and only takes moments to install. Build more with less effort.";
    },
    links() {
      return [
        {
          title: "Documentation",
          to: this.externalLinks.documentation,
          icon: "fas fa-file-alt"
        },
        {
          title: "Marketplace",
          to: this.externalLinks.marketplace,
          icon: "fas fa-store"
        },
        {
          title: "Github",
          to: this.externalLinks.github,
          icon: "fab fa-github"
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
i {
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  padding-right: 0.5em;
}

#get-started {
  position: relative;
}

#get-started::before {
  content: "";
  position: absolute;
  width: 100%;
  height: calc(100% + 200px);
  background: $grey-light;
  transform: translateY(30%) skewY(-8deg);
  z-index: -1;
}

@media only screen and (max-width: $mobile-breakpoint) {
  .link-secondary {
    margin-bottom: $margin;
  }
  .content {
    margin-bottom: $margin;
  }
}
</style>

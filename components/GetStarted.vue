<template>
  <section id="get-started">
    <Container>
      <Card p2>
        <div flex row align-center space-between>
          <div flex column two-third>
            <h3 mb1>{{title}}</h3>
            <p mb1>{{description}}</p>
            <nav flex row>
              <a v-for="(link, i) in links" :key="i" :href="link.to" target="_blank">
                <i v-if="link.icon" :class="link.icon"></i>
                {{link.title}}
              </a>
            </nav>
          </div>
          <div flex column one-third>
            <Button
              primary
              href="https://docs.mesg.com/guide/quick-start-guide.html"
              target="_blank"
            >Get started</Button>
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
import Card from "~/components/Card";
import Button from "~/components/Button";
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
      return "Ready to get started?";
    },
    description() {
      return "MESG is free to start and only takes moments to install. Build more with less effort.";
    },
    links() {
      return [
        this.externalLinks.documentation,
        this.externalLinks.marketplace,
        this.externalLinks.github
      ];
    }
  }
};
</script>

<style scoped>
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
  background: var(--light-background);
  transform: translateY(30%) skewY(-8deg);
  z-index: -1;
}
</style>

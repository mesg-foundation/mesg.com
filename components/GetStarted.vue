<template>
  <section id="get-started">
    <Container>
      <Card p2>
        <div flex row align-center space-between>
          <div>
            <h3 mb1>{{title}}</h3>
            <p mb1>{{description}}</p>
            <nav flex row space-between>
              <Button v-for="(link, i) in links" :key="i" :to="link.to">
                <span v-if="link.icon">{{ link.icon }}</span>
                {{link.title}}
              </Button>
            </nav>
          </div>
          <div>
            <Button primary :to="to">{{action}}</Button>
          </div>
        </div>
      </Card>
    </Container>
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
      return "Discover more about MESG";
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
    },
    action() {
      return "Get Started";
    },
    to() {
      return this.links.getStarted;
    }
  }
};
</script>

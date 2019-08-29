<template>
  <section id="cta">
    <Container>
      <Card purple p2>
        <div flex row align-center space-between mobile-column>
          <div class="content" flex column>
            <h2 mb1>{{ title }}</h2>
            <p>{{ description }}</p>
          </div>
          <div flex column third>
            <Button white :href="href" target="_blank">{{ action }}</Button>
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
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    to: {
      type: [String, Object]
    },
    href: {
      type: String
    },
    action: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      externalLinks: "externalLinks",
      links: "links"
    })
  }
};
</script>

<style lang="scss" scoped>
h2,
p {
  color: var(--white);
}

#cta {
  position: relative;
}

#cta::before {
  content: "";
  position: absolute;
  width: 100%;
  height: calc(100% + 100px);
  background: var(--light-background);
  transform: translateY(30%) skewY(-8deg);
  z-index: -1;
}

@media only screen and (max-width: $mobile-breakpoint) {
  .content {
    margin-bottom: calc(var(--margin) * 2);
  }
}
</style>

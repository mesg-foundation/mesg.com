<template>
  <section id="cta">
    <Container>
      <Card purple p2>
        <div flex row align-center space-between mobile-column>
          <div class="content" flex column>
            <h2>{{ title }}</h2>
            <p v-if="description" mt1>{{ description }}</p>
          </div>
          <nav flex column third>
            <Button
              white
              v-for="(link, i) in links"
              :key="i"
              :to="link.to"
              :href="link.href"
              target="_blank"
            >{{ link.title }}</Button>
            <slot />
          </nav>
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
    links: {
      type: Array,
      default: () => []
    },
    externalLinks: {
      type: Array,
      default: () => []
    }
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

@media only screen and (max-width: $tablet-breakpoint) {
  #cta::before {
    height: calc(100% + 80px);
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  .content {
    margin-bottom: calc(var(--margin) * 2);
  }
}
</style>

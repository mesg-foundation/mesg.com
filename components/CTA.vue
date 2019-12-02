<template>
  <section id="cta">
    <Container>
      <Card purple p2>
        <div flex row align-center space-between mobile-column>
          <i :class="icon"></i>
          <div class="content">
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
import Button from "@mesg-components/button";
import Container from "~/components/Container";
import Card from "~/components/Card";
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
    icon: {
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
#cta {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: calc(100% + 100px);
    background: var(--light-background);
    transform: translateY(30%) skewY(-8deg);
    z-index: -1;
  }
  h2,
  p {
    color: var(--white);
  }
  i {
    font-size: 100px;
    color: $electric-purple;
  }
}

@media only screen and (min-width: $huge-breakpoint) {
  #cta::before {
    transform: translateY(30%) skewY(-5deg);
  }
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

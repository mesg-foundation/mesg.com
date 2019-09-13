<template>
  <section>
    <Container>
      <div mt4 mb4 class="primary-call-to-action">
        <h3>{{ title }}</h3>
        <p mb2>{{ description }}</p>
        <nav>
          <Button
            white
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            :href="link.href"
          >{{ link.title }}</Button>
          <slot />
        </nav>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from "~/components/Container";
import Button from "~/components/Button";
export default {
  components: {
    Container,
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
.primary-call-to-action {
  text-align: center;
  background: var(--light-purple);
  position: relative;
  z-index: 1;
  padding-top: calc(4 * var(--margin));
  padding-bottom: calc(4 * var(--margin));
}

.primary-call-to-action::after {
  content: "";
  background: var(--purple);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: skewY(-11deg);
  z-index: -1;
}
.primary-call-to-action > * {
  width: var(--small-width);
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
h3 {
  margin-bottom: var(--margin);
  color: var(--white);
}
p {
  color: var(--white);
}
@media only screen and (max-width: $tablet-breakpoint) {
  .primary-call-to-action {
    padding: calc(var(--margin) * 2);
    padding-top: calc(var(--margin) * 3);
    padding-bottom: calc(var(--margin) * 3);
  }
}
@media only screen and (min-width: $mobile-breakpoint) and (max-width: $tablet-breakpoint) {
  .primary-call-to-action {
    margin-top: calc(var(--margin) * 2);
    margin-bottom: calc(var(--margin) * 2);
  }
}
</style>

<template>
  <section>
    <Container>
      <div pt3 pb3 mt4 mb4 class="primary-call-to-action">
        <h3>{{ title }}</h3>
        <p mb2>{{ description }}</p>
        <nav>
          <Button white v-for="(link, i) in links" :key="i" :to="link.to">{{ link.title }}</Button>
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
    }
  }
};
</script>

<style scoped>
.primary-call-to-action {
  text-align: center;
  background: var(--light-purple);
  position: relative;
  z-index: 1;
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
  margin-bottom: 20px;
  color: var(--white);
}
p {
  color: var(--white);
}
</style>

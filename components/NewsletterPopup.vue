<template>
  <Card>
    <Container flex column p2>
      <slot />
      <h2 v-if="title" mb1>{{ title }}</h2>
      <p mb2>{{ description }}</p>
      <Newsletter />
    </Container>
    <Container class="bottom" p2>
      <p class="infos">
        By submitting this form you agree to receive email updates. Find out how we process
        <a
          href="/privacy-cookie-policy"
          class="link"
          target="_blank"
        >your data</a>.
      </p>
    </Container>
  </Card>
</template>

<script>
import Card from "~/components/Card";
import Container from "~/components/Container";
import Newsletter from "~/components/Newsletter";
export default {
  components: {
    Card,
    Container,
    Newsletter
  },
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
h2 {
  text-align: left;
}

.bottom {
  background-color: $grey-light;
}
</style>
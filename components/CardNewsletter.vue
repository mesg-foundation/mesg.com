<template>
  <div class="outline">
    <Container flex column p2>
      <slot />
      <h3 mb1>{{ title }}</h3>
      <p mb2>{{ description }}</p>
      <Newsletter />
    </Container>
    <Container class="bottom" p2>
      <p class="infos">
        By submitting this form you agree to receive email updates. Find out how we process
        <nuxt-link :to="links.policy" class="link">your data</nuxt-link>.
      </p>
    </Container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Container from "~/components/Container";
import Newsletter from "~/components/Newsletter";
export default {
  components: {
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
  },
  computed: mapGetters({
    links: "links"
  })
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
.outline {
  border-radius: 6px;
  border: solid 1px $lavender-light;
  .bottom {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: $grey-light;
  }
}
</style>
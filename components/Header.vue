<template>
  <header id="header" pt3 pb3 mb3>
    <Container
      v-if="picture || $slots.picture"
      flex
      row
      mobile-column-reverse
      align-center
      space-between
      wrap
    >
      <div half>
        <slot name="top" />
        <h1 mb1 v-html="title"></h1>
        <p mb2 v-html="description"></p>
        <slot v-if="$slots.default" />
      </div>
      <div half>
        <slot name="picture">
          <img :src="picture" :alt="title" />
        </slot>
      </div>
    </Container>
    <Container v-else>
      <div>
        <h1 mb1 v-html="title"></h1>
        <p v-html="description"></p>
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "~/components/Container";
export default {
  components: {
    Container
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    picture: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
#header {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: calc(100% + 200px);
    background-image: linear-gradient(to top, $grey-light, $white);
    transform: translateY(-35%) skewY(-8deg);
    z-index: -1;
  }
  p {
    font-size: 20px;
  }
  img {
    height: auto;
    max-height: calc(#{$width} / 2);
  }
}

@media only screen and (max-width: $mobile-breakpoint) {
  #header::before {
    height: calc(100% + 400px);
  }
  img {
    margin-bottom: calc(#{$margin} * 2);
  }
}
</style>

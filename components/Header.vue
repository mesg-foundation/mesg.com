<template>
  <header id="header" pt3 pb3 mb3>
    <Container flex row mobile-column-reverse align-center space-between wrap>
      <div half>
        <h1 mb1 v-html="title"></h1>
        <p mb2 v-html="description"></p>
        <slot v-if="$slots.default"/>
      </div>
      <div half v-if="picture">
        <img :src="picture" :alt="title">
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

<style scoped>
#header {
  position: relative;
}

#header::before {
  content: "";
  position: absolute;
  width: 100%;
  height: calc(100% + 200px);
  background-image: linear-gradient(
    to top,
    var(--light-background),
    var(--white)
  );
  transform: translateY(-35%) skewY(-8deg);
  z-index: -1;
}

p {
  font-size: 20px;
}
img {
  height: auto;
  max-height: calc(var(--width) / 2);
}
</style>

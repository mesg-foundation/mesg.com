<template>
  <header p3>
    <Container>
      <div flex row align-center space-between>
        <div>
          <h1 mb1 v-html="title"></h1>
          <p mb2 v-html="description"></p>
          <slot v-if="$slots.default"/>
        </div>
        <div ml2 v-if="picture">
          <img :src="picture" :alt="title">
        </div>
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
header {
  background-image: linear-gradient(to bottom, #fff, #f2f0f7);
  // clip-path: polygon(100% 0, 100% 79%, 0 100%, 0 0);
}
p {
  font-size: 20px;
}
img {
  height: 490px;
  width: 490px;
  max-width: 100%;
  max-height: 490px;
}
</style>

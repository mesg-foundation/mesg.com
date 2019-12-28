<template>
  <Container>
    <h2 mb2>Discover more</h2>
    <div flex row space-between wrap class="items">
      <div half v-for="(item, i) in items" :key="i" class="item">
        <h3 mb1>{{ item.title }}</h3>
        <p mb2>{{ item.description }}</p>
        <Button secondary :to="item.to">{{ item.action }}</Button>
      </div>
    </div>
  </Container>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "@mesg-components/button";
import Container from "~/components/Container";
export default {
  components: {
    Container,
    Button
  },
  props: {
    left: {
      type: String,
      required: true
    },
    right: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      _discover: "discover"
    }),
    items() {
      return [this._discover[this.left], this._discover[this.right]];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
.items {
  position: relative;
}
@media only screen and (min-width: $tablet-breakpoint) {
  .items::before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 0.1em;
    left: 50%;
    background-color: $primary-light;
  }
}

@media only screen and (max-width: $mobile-breakpoint) {
  .item {
    margin-bottom: calc(#{$margin} * 2);
    p {
      margin-bottom: 0 !important;
    }
  }
}
</style>

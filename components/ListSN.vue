<template>
  <nav flex row wrap>
    <a
      v-for="(item, i) in list"
      :key="i"
      :href="item.to"
      target="_blank"
      class="link-secondary"
      flex
      align-center
      half
    >
      <span :class="item.color" flex align-center mr1>
        <i class="text-center" :class="item.icon"></i>
      </span>
      <p>{{ item.description }}</p>
    </a>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
a {
  margin-top: calc(#{$margin} / 2);
  margin-bottom: calc(#{$margin} / 2);
  &:hover {
    opacity: 0.7;
    transition: 0.1s ease;
  }
  span {
    min-width: 50px;
    max-width: 50px;
    min-height: 50px;
    max-height: 50px;
    border-radius: 100%;
  }
}

@media only screen and (max-width: $mobile-only) {
  a {
    margin-right: 0;
  }
}
</style>
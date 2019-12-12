<template>
  <ul>
    <li mb1 v-for="(item, i) in items" :key="i" flex row align-center>
      <img mr1 v-if="item.src" :src="item.src" :alt="item.title" />
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
ul {
  list-style: none;
  margin-left: 0;
  li {
    &:last-child {
      margin-bottom: 0 !important;
    }
    img {
      height: 50px;
      width: 50px;
      max-width: 50px;
    }
  }
}
</style>

<template>
  <ul>
    <li v-for="(item, i) in items" :key="i">
      <span :style="`background-color: ${item.color}`"></span>
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
span {
  width: 20px;
  height: 20px;
  border-radius: 3px;
  display: inline-block;
  margin-right: calc(var(--margin) / 2);
  vertical-align: middle;
}
</style>

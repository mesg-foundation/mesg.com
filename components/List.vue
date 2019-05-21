<template>
  <ul mb2>
    <li mb1 v-for="(item, i) in items" :key="i">
      <img mr1 v-if="item.src" :src="item.src" :alt="item.title">
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
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

li img {
  height: 50px;
  width: 50px;
  vertical-align: middle;
}
</style>

<template>
  <ul class="grid">
    <li v-for="(item, i) in items" :key="i">
      <slot :item="item"></slot>
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
}
</script>


<style scoped>
   ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3em;
    padding: 0;
  }

  li {
    margin: .5em;
    max-width: 100%;
    width: 246px;
  }
</style>

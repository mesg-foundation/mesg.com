<template>
  <a
    class="shadow light hover"
    :href="application.url"
    target="_blank">
    <h3 class="truncate">{{ application.name }}</h3>
    <p class="p1">{{ application.description }}</p>
  </a>
</template>

<script>
export default {
  props: {
    application: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  display: block;
  text-decoration: none;
  height: 100%;
}
</style>

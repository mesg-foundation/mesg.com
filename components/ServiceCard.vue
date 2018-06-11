<template>
  <a
    class="shadow light hover"
    :href="service.url" nuxt target="_blank">
    <h3 class="truncate">{{ service.name }}</h3>
    <p class="p1">{{ service.description }}</p>
  </a>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  computed: {
    href() {
      return this.service.url.replace("https://github.com/", "/marketplace/")
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

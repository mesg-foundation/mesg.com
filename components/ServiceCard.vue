<template>
  <a
    class="shadow light hover"
    :href="href" nuxt>
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
      return this.service.url.replace("https://github.com/", "/examples/")
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

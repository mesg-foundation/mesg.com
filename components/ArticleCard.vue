<template>
  <a
    class="shadow light hover"
    :href="article.link" target="_blank" rel="noopener noreferrer">
    <img :src="article.thumbnail" :alt="article.title">
    <h5>{{ article.title }}</h5>
  </a>
</template>

<script>
export default {
  props: {
    article: {
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
  border-radius: 3px;
  overflow: hidden;
}

img {
  max-width: 100%;
  display: block;
}

h5 {
  padding: .5em;
}
</style>

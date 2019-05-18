<template>
  <iframe
    :src="src"
    width="680"
    height="380"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  props: {
    src: String
  }
};
</script>

<style scoped>
iframe {
  display: block;
  max-width: 100%;
}
</style>

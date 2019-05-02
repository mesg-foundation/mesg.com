<template>
  <iframe
    :src="src"
    width="1080"
    height="640"
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


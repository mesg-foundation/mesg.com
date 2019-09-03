<template>
  <Card>
    <div class="video-container">
      <iframe
        :src="src"
        width="680"
        height="382,5"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video"
      ></iframe>
    </div>
  </Card>
</template>

<script>
import Card from "~/components/Card";
export default {
  components: {
    Card
  },
  props: {
    src: String
  }
};
</script>

<style scoped>
.video-container {
  position: relative;
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

iframe {
  display: block;
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

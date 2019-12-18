<template>
  <Card>
    <div class="videoWrapper">
      <iframe
        :src="src"
        width="680"
        height="382"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </Card>
</template>

<script>
import Card from "@mesg-components/Card";
export default {
  components: {
    Card
  },
  props: {
    src: String
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";

.card {
  padding: 0;
}

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: calc(#{$margin} + 5px);
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

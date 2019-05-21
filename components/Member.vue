<template>
  <Card no-shadow>
    <img :src="src" :alt="title">
    <div class="text">
      <h4>{{ title }}</h4>
      <p v-html="text"></p>
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
    src: {
      type: String,
      default: true
    },
    title: {
      type: String,
      default: true
    },
    text: {
      type: String
    }
  }
};
</script>


<style scoped>
img {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.text {
  padding: 20px;
}
</style>

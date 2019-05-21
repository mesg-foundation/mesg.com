<template>
  <div mb2>
    <img mb1 :src="src" :alt="title">
    <h4 mb1>{{ title }}</h4>
    <p v-html="text"></p>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
img {
  height: 50px;
  width: 50px;
}
</style>

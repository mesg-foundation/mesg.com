<template>
  <div class="card" mb2>
    <img :src="src" :alt="title">
    <div class="text">
      <h4>{{ title }}</h4>
      <p v-html="text"></p>
    </div>
  </div>
</template>

<script>
export default {
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
.card {
  border-radius: 6px;
  width: 313px;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  height: ;
  border-radius: 6px;
  background-color: var(--white);
}

img {
  width: 313px;
  height: 313px;
  overflow: hidden;
}

.text {
  padding: 20px;
}
</style>

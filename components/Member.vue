<template>
  <div flex column class="card">
    <div>
      <img :src="src" :alt="title">
    </div>
    <div flex column class="details">
      <h4>{{ title }}</h4>
      <p v-html="text" mb1>{{ description }}</p>
      <hr v-if="company" mb1>
      <img v-if="company" :src="src" :alt="title" :class="logo">
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
}

img {
  width: 313px;
  height: 313px;
  overflow: hidden;
}

.details {
  padding: 20px;
  background-color: var(--white);
}

.logo {
  height: 20px;
}
</style>

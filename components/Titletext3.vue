<template>
  <div class="content">
    <h3 mb1>{{ title }}</h3>
    <p v-html="text"></p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String
    }
  }
};
</script>


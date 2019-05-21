<template>
  <div mb2>
    <h4 mb1>{{ title }}</h4>
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

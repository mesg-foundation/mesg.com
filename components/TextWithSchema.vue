<template>
  <div flex row space-between align-center>
    <div half flex column align-center>
      <img :src="src">
    </div>
    <div half>
      <h3 mb1>{{ title }}</h3>
      <p v-if="description" mb2 v-html="description"></p>
      <slot mb2></slot>
      <Button secondary :href="to" target="_blank">{{ action }}</Button>
    </div>
  </div>
</template>

<script>
import Button from "~/components/Button";
export default {
  components: {
    Button
  },
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    to: {
      type: [String, Object],
      required: true
    },
    action: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.img {
  max-width: 410px;
  padding: 80px;
}
</style>

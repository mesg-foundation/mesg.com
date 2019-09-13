<template>
  <div flex row space-between align-center wrap class="section">
    <div half p3>
      <img :src="src" />
    </div>
    <div class="content" half>
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

<style lang="scss" scoped>
@media only screen and (max-width: $mobile-breakpoint) {
  p {
    margin-bottom: 0 !important;
  }
  img {
    margin-bottom: var(--margin);
  }
}
.section {
  margin-bottom: calc(var(--margin) * 3) !important;
}
.section:last-child {
  margin-bottom: 0 !important;
}
</style>
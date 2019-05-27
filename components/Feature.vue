<template>
  <div flex row space-between align-center wrap class="feature">
    <div half>
      <img :src="src">
    </div>
    <div half>
      <Card p2 column flex space-between>
        <h3 mb1>{{ title }}</h3>
        <p v-if="description" mb2 v-html="description"></p>
        <slot mb2></slot>
        <Button outline :to="to" :href="href">{{ action }}</Button>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "~/components/Card";
import Button from "~/components/Button";
export default {
  components: {
    Card,
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
      type: [String, Object]
    },
    href: {
      type: String
    },
    action: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 12px;
}

@media only screen and (max-width: $mobile-breakpoint) {
  img {
    margin-bottom: 20px;
  }
}
</style>

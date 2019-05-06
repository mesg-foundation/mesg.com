<template>
  <div flex row space-between>
    <div half>
      <img :src="src">
    </div>
    <Card half p2 column flex space-between>
      <h3 mb1>{{ title }}</h3>
      <p mb2 v-html="description"></p>
      <span spacer/>
      <Button outline :to="to">{{ action }}</Button>
    </Card>
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
      type: String,
      required: true
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
.card {
  margin: 12px;
}
</style>

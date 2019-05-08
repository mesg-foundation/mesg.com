<template>
  <Card flex row space-between bordered thin>
    <div class="preview">
      <img :src="document.img" :alt="document.title">
    </div>
    <div class="description">{{ document.title }}</div>
    <div class="link">
      <a :download="document.title" :href="document.link">download</a>
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
    document: {
      type: Object,
      required: true
    }
  }
};
</script>

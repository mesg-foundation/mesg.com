<template>
  <div>
    <h2 mb2>{{ title }}</h2>
    <div flex row space-between>
      <div v-for="(item, i) in items" :key="i" class="item">
        <h3>{{ item.title }}</h3>
        <p mb2>{{ item.description }}</p>
        <Button secondary :to="item.to">{{ item.link }}</Button>
      </div>
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
    title: {
      type: String,
      required: true
    },
    left: {
      type: Object,
      required: true
    },
    right: {
      type: Object,
      required: true
    }
  },
  computed: {
    items() {
      return [this.left, this.right];
    }
  }
};
</script>

<style scoped>
h3 {
  margin-bottom: 14px;
}
.item:first-child {
  padding-right: 40px;
}
.item:last-child {
  padding-left: 40px;
  border-left: solid 1px var(--light-purple);
}
</style>

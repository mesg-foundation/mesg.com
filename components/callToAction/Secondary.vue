<template>
  <div>
    <h2 mb2>{{ title }}</h2>
    <div flex row space-between class="items">
      <div half v-for="(item, i) in items" :key="i" class="item">
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
.items {
  position: relative;
}
.items::before {
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 1px;
  left: 50%;
  background-color: var(--light-purple);
}
</style>

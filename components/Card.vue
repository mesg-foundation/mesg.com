<template>
  <div class="card" :class="{ bordered, thin }">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    bordered: {
      type: Boolean,
      default: false
    },
    thin: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped>
.card {
  border-radius: 6px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--white);
  overflow: hidden;
}

.card.bordered {
  border: solid 1px var(--light-purple);
  border-bottom-width: 6px;
  border-bottom-color: var(--purple);
  box-shadow: none;
}

.card.bordered.thin {
  border: solid 1px var(--light-purple);
}
</style>

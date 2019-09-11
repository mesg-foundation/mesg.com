<template>
  <div class="card" :class="{ bordered, thin, shadow: !noShadow }">
    <slot />
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
    },
    noShadow: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped>
.card {
  border-radius: 6px;
  background-color: var(--white);
  overflow: hidden;
}

.card.shadow {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
}

.card.bordered {
  border: solid 1px var(--light-purple);
  border-bottom-width: 6px;
  border-bottom-color: var(--purple);
  box-shadow: none;
}
.card.bordered:hover {
  transition: 0.2s ease;
  border: solid 1px var(--purple);
  border-bottom-width: 6px;
  border-bottom-color: var(--purple);
  box-shadow: 0 0 0 1px var(--purple) inset;
}

.card.bordered.thin {
  border: solid 2px transparent;
  box-shadow: 0 0 0 1px var(--light-purple) inset;
}
.card.bordered.thin:hover {
  transition: 0.2s ease;
  border-color: var(--purple);
  box-shadow: none;
}
</style>

<template>
  <div class="card" :class="{ bordered, thin, purple, shadow: !noShadow }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    purple: {
      type: Boolean,
      default: false
    },
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


<style lang="scss" scoped>
@import "~/assets/_variables";
.card {
  border-radius: 6px;
  background-color: $white;
  overflow: hidden;
}

.card.purple {
  background-color: $primary;
}

.card.shadow {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
}

.card.bordered {
  border: solid 1px $primary-light;
  border-bottom-width: 6px;
  border-bottom-color: $primary;
  box-shadow: none;
}
.card.bordered:hover {
  transition: 0.2s ease;
  border: solid 1px $primary;
  border-bottom-width: 6px;
  border-bottom-color: $primary;
  box-shadow: 0 0 0 1px $primary inset;
}

.card.bordered.thin {
  border: solid 2px transparent;
  box-shadow: 0 0 0 1px $primary-light inset;
}
.card.bordered.thin:hover {
  transition: 0.2s ease;
  border-color: $primary;
  box-shadow: none;
}
</style>

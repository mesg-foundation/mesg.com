<template>
  <div v-if="value">
    <div class="background" @click="$emit('input', false)"></div>
    <section>
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  }
}
</script>


<style scoped>
.background {
  position: fixed;
  top: 0; right: 0;
  left: 0; bottom: 0;
  background: rgba(0,0,0,0.25);
}
section {
  background-color: #f1f0f8;
  background-color: var(--pale-grey);
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.25);
  z-index: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 20px;
  border-radius: 2px;
}
</style>

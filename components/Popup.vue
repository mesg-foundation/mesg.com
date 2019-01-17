<template>
  <div v-if="value" class="popup" @click="close">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  methods: {
    close() {
      this.$emit('input', false)
    }
  }
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.popup::before {
  content: '';
  background-color: rgba(0,0,0,0.75);
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  z-index: -1;
}
</style>

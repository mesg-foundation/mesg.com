<template>
  <div class="card">
    <slot/>
  </div>
</template>

<style scoped>
.card {
  border-radius: 6px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--white-background);
  overflow: hidden;
}
</style>

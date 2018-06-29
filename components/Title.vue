<template>
  <div class="dark">
    <div class="container">
      <h1><slot></slot></h1>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  padding: 1em;
}
.dark {
  margin-bottom: 1em;
}
</style>

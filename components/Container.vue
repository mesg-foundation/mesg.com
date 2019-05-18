<template>
  <div class="container">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: var(--width);
  margin: auto;
}

@media only screen and (max-width: $mobile-breakpoint) {
  .container {
    max-width: 100%;
    padding: calc(2 * var(--margin));
  }
}

@media only screen and (max-width: $tablet-breakpoint) {
  .container {
    max-width: 100%;
    padding: calc(2 * var(--margin));
  }
}
</style>

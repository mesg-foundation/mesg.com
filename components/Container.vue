<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/_variables";
.container {
  max-width: $width;
  margin: auto;
}

@media only screen and (max-width: $mobile-breakpoint) {
  .container {
    max-width: 100%;
    padding: calc(2 * #{$margin});
  }
}

@media only screen and (max-width: $tablet-breakpoint) {
  .container {
    max-width: 100%;
    padding: calc(2 * #{$margin});
  }
}
</style>

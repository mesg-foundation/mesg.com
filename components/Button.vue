<template>
  <Button v-bind="$attrs">
    <slot />
  </Button>
</template>

<script>
import Button from "@mesg-components/button";
export default {
  components: { Button }
};
</script>
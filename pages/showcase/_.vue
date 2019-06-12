<template>
  <div></div>
</template>

<script>
export default {
  asyncData({ error }) {
    error({ statusCode: 404, message: "Usecase not found" });
  }
};
</script>

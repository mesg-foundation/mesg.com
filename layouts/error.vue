<template>
  <Error404 :title="title" :description="description"/>
</template>

<script>
import Error404 from "~/components/errors/404";
import page from "~/pages/page";

export default {
  components: {
    Error404
  },
  mixins: [
    page({
      title: "Oops! Looks like something went wrong",
      description:
        "Our best men are taking care of it. Meanwhile click on the button below to go back to Home, let's act like nothing happened."
    })
  ],
  props: ["error"]
};
</script>

<style scoped>
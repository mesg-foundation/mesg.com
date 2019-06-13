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
      title: "ROOOAAARRR!!!",
      description:
        "The page you are looking for does not exist anymore. Hurry up, you shouldn't be here any longer. Go back to safety now!"
    })
  ],
  props: ["error"]
};
</script>

<style scoped>
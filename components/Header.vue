<template>
  <header>
    <section class="content" flex align-center row space-between column-reverse-responsive>
      <div class="info">
        <h1 v-html="title"></h1>
        <p v-html="description"></p>
        <slot v-if="$slots.default"/>
      </div>
      <div class="schema">
        <component column justify-center align-center :is="schema"/>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    schema: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  padding: 90px 210px 150px 210px;
  background-image: linear-gradient(to bottom, #fff, #f2f0f7);
  clip-path: polygon(100% 0, 100% 79%, 0 100%, 0 0);

  .content {
    .info {
      flex: 1;
      margin-right: 60px;
    }

    .schema {
      width: 40%;
    }
  }
}
p {
  font-size: 20px;
}
</style>

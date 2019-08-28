<template>
  <div flex row space-between align-center wrap class="feature">
    <div half p1>
      <img :src="src" />
    </div>
    <div half>
      <h3 mb1>{{ title }}</h3>
      <p v-if="description" mb1 v-html="description"></p>
      <slot mb1></slot>
      <Button secondary :to="to" :href="href">{{ action }}</Button>
    </div>
  </div>
</template>

<script>
import Button from "~/components/Button";
export default {
  components: {
    Button
  },
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    to: {
      type: [String, Object]
    },
    href: {
      type: String
    },
    action: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.feature:last-child {
  margin-bottom: 0 !important;
}

@media only screen and (max-width: $tablet-breakpoint) {
  .feature {
    margin-bottom: 80px !important;
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  .feature {
    margin-bottom: 40px !important;
  }
  img {
    margin-bottom: 20px;
  }
}
</style>

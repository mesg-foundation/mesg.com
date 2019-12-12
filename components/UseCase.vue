<template>
  <nuxt-link :to="usecase.to" :id="usecase.id" flex column third mb2>
    <Card p1 bordered>
      <div mb2 flex row space-between class="logos">
        <img v-for="(logo, i) in usecase.logos" :key="i" :src="logo" />
      </div>
      <p class="category" mb1>{{ usecase.category }}</p>
      <h4 mb1>{{ usecase.title }}</h4>
      <p mb2>{{ usecase.description}}</p>
      <div flex row space-between align-center class="label-icon">
        <div v-if="usecase.label">
          <TagLabel :type="usecase.label.type">{{ usecase.label.title }}</TagLabel>
        </div>
        <i class="fal fa-long-arrow-alt-right"></i>
      </div>
    </Card>
  </nuxt-link>
</template>

<script>
import { mapGetters } from "vuex";
import TagLabel from "@mesg-components/tag-label";
import Card from "~/components/Card";
export default {
  components: {
    Card,
    TagLabel
  },
  props: {
    usecase: {
      type: Object,
      required: true
    },
    label: {
      type: Boolean,
      default: false
    }
  },
  computed: mapGetters({
    links: "links"
  })
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
a {
  position: relative;
  .logos::before {
    content: "";
    position: absolute;
    top: 20px;
    height: 80px;
    width: 0.1em;
    left: 50%;
    background-color: $primary-light;
  }
  img {
    min-width: 10%;
    max-width: 100%;
    min-height: 10%;
    max-height: 80px;
  }
  .category {
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $primary;
  }
  .label-icon {
    width: calc(100% - #{$margin} * 2);
    position: absolute;
    bottom: calc(#{$margin} + 6px);
    i {
      text-align: right;
    }
  }
}

@media only screen and (max-width: $mobile-breakpoint) {
  img {
    margin-bottom: 0;
  }
}
</style>
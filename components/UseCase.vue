<template>
  <nuxt-link :to="usecase.to" :id="usecase.id" flex column third mb2>
    <Card bordered>
      <div mb2 flex row space-between class="logos">
        <img v-for="(logo, i) in usecase.logos" :key="i" :src="logo" />
      </div>
      <span flex class="label">{{ usecase.label }}</span>
      <h4 mb1>{{ usecase.title }}</h4>
      <p mb2>{{ usecase.description}}</p>
      <div flex row space-between align-center class="tag-icon">
        <div v-if="usecase.tag">
          <TagLabel :type="usecase.tag.type">{{ usecase.tag.title }}</TagLabel>
        </div>
        <i class="fal fa-long-arrow-alt-right"></i>
      </div>
    </Card>
  </nuxt-link>
</template>

<script>
import { mapGetters } from "vuex";
import TagLabel from "@mesg-components/tag-label";
import Card from "@mesg-components/card";
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
  .card.bordered {
    position: relative;
  }
  .logos::before {
    content: "";
    position: absolute;
    top: 20px;
    height: 80px;
    width: 0.1em;
    left: 50%;
    background-color: $lavender-light;
  }
  img {
    min-width: 10%;
    max-width: 100%;
    min-height: 10%;
    max-height: 80px;
  }
  span {
    font-size: 12px;
    font-weight: bold;
    color: $purple;
  }
  .label {
    text-transform: uppercase;
    margin-bottom: calc(#{$margin} / 2) !important;
  }
  .tag-icon {
    width: calc(100% - #{$margin} * 2);
    position: absolute;
    bottom: $margin;
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
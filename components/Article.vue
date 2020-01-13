<template>
  <nav flex row wrap>
    <a
      v-for="(item, i) in items"
      :key="i"
      :href="item.url"
      :id="item.id"
      target="_blank"
      flex
      column
      quarter
      mb1
    >
      <img :src="item.feature_image" :alt="item.title" mb1 />
      <div>
        <div class="tag-date" flex row align-center>
          <span class="tag">{{ item.primary_tag.name }}</span>
          <span class="date">{{ item.published_at | formatDate }}</span>
        </div>
        <h4>{{ item.title }}</h4>
      </div>
    </a>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";

a {
  transition: 0.1s ease-in;
  &:hover {
    img {
      opacity: 1;
    }
    h4 {
      color: $title-color;
    }
  }
  img {
    border-radius: 3px;
    border: solid 1px $lavender-light;
    width: 100%;
    height: auto;
    min-height: 120px;
    max-height: 120px;
    overflow: hidden;
    object-fit: cover;
    opacity: 0.85;
  }
  .tag-date {
    margin-bottom: calc(#{$margin} / 2);
    span {
      font-size: 12px;
      font-weight: bold;
    }
    .tag {
      color: $purple;
      text-transform: uppercase;
    }
    .date {
      text-align: right;
      color: $lavender-light;
    }
  }
  h4 {
    color: $text-color;
  }
}

@media only screen and (max-width: $mobile-breakpoint) {
  a {
    margin-bottom: calc(#{$margin} * 2) !important;
    img {
      max-height: 200px;
    }
  }
}
</style>
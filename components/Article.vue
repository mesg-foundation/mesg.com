<template>
  <a :href="article.url" :id="article.id" target="_blank" flex column quarter mb1>
    <img :src="article.feature_image" :alt="article.title" mb1 />
    <div>
      <div class="tag-date" flex row align-center>
        <span class="tag">{{ article.primary_tag.name }}</span>
        <span class="date">{{ article.published_at | formatDate }}</span>
      </div>
      <h4>{{ article.title }}</h4>
    </div>
  </a>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    article: {
      type: Object,
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
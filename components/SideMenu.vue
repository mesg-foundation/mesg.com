<template>
  <div>
    <nav flex column class="sidebar">
      <p mb1>All categories</p>
      <a v-for="item in items" :key="item.id" :href="`#${item.id}`" class="link-secondary" flex row>
        <i class="fas fa-chevron-right"></i>
        {{ item.category }}
      </a>
    </nav>
  </div>
</template>

<script>
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
.sidebar {
  position: sticky;
  top: 40px;
  a {
    padding-top: $margin;
    padding-bottom: $margin;
    font-size: 17px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  i {
    position: relative;
    top: 7px;
    max-width: 5px;
    margin-right: calc(#{$margin} / 2);
    font-size: 12px;
  }
}
</style>


<template>
  <div>
    <nav flex column class="sidebar">
      <p mb1>All categories</p>
      <a v-for="item in items" :key="item.id" :href="`#${item.id}`" class="link-secondary">
        <i class="far fa-chevron-right"></i>
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

<style scoped>
.sidebar {
  position: sticky;
  top: 40px;
}
.sidebar a {
  padding-top: var(--margin);
  padding-bottom: var(--margin);
  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
}
i {
  margin-right: calc(var(--margin) / 2);
  font-size: 12px;
}
</style>


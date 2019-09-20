<template>
  <nav flex row wrap>
    <a
      v-for="(item, i) in items"
      :key="i"
      :href="item.to"
      target="_blank"
      flex
      align-center
      half
      mb1
    >
      <span class="circle" :class="item.color" flex align-center mr1>
        <i class="text-center" :class="item.icon"></i>
      </span>
      <p>{{ item.description }}</p>
    </a>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      _icons: "icons"
    }),
    items() {
      return this.list.map(x => this._icons[x]);
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  margin-right: var(--margin);
}
a:hover {
  opacity: 0.7;
  transition: 0.1s ease;
}

.circle {
  min-width: 50px;
  max-width: 50px;
  min-height: 50px;
  max-height: 50px;
  border-radius: 100%;
}

@media only screen and (max-width: $mobile-only) {
  a {
    margin-right: 0;
  }
}
</style>
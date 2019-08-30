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
    one: {
      type: String
    },
    two: {
      type: String
    },
    three: {
      type: String
    },
    four: {
      type: String
    },
    five: {
      type: String
    },
    six: {
      type: String
    }
  },
  computed: {
    ...mapGetters({
      _icons: "icons"
    }),
    items() {
      if (this.one) {
        return [this._icons[this.one]];
      }
      if (this.two) {
        return [this._icons[this.two]];
      }
      if (this.three) {
        return [this._icons[this.three]];
      }
      if (this.four) {
        return [this._icons[this.four]];
      }
      if (this.five) {
        return [this._icons[this.five]];
      }
      if (this.six) {
        return [this._icons[this.six]];
      }
    }
  }
};
</script>

<style scoped>
a {
  margin-right: calc(var(--margin) * 1);
}

.circle {
  min-width: 50px;
  max-width: 50px;
  min-height: 50px;
  max-height: 50px;
  border-radius: 100%;
}
</style>
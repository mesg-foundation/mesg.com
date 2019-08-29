<template>
  <div flex wrap>
    <nav flex row justify-center align-center mb1>
      <a
        v-for="(item, i) in items"
        :key="i"
        :href="item.to"
        target="_blank"
        flex
        justify-center
        align-center
        half
      >
        <span class="circle" :class="item.color" flex align-center mr1>
          <i class="text-center" :class="item.icon"></i>
        </span>
        <p>{{ item.description }}</p>
      </a>
    </nav>
  </div>
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
    }
  },
  computed: {
    ...mapGetters({
      _icons: "icons"
    }),
    items() {
      return [this._icons[this.one], this._icons[this.two]];
    }
  }
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 50px;
}

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
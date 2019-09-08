<template>
  <nuxt-link :to="usecase.to" :id="usecase.id" flex column third mb2>
    <Card p1 bordered>
      <div mb2 flex row space-between class="logos">
        <img v-for="(logo, i) in usecase.logos" :key="i" :src="logo" />
      </div>
      <p class="category" mb1>{{ usecase.category }}</p>
      <h4 mb1>{{ usecase.title }}</h4>
      <p mb1>{{ usecase.description}}</p>
      <div flex row space-between align-center>
        <div v-if="usecase.label" :class="{ partner, community }" class="label">
          <p ml1>{{ usecase.label }}</p>
        </div>
        <i class="fa fa-arrow-right"></i>
      </div>
    </Card>
  </nuxt-link>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "~/components/Card";
export default {
  components: {
    Card
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
  }),
  partner() {
    return !this.label;
  },
  community() {
    return this.label;
  }
};
</script>

<style scoped>
a {
  position: relative;
}
img {
  min-width: 10%;
  max-width: 100%;
  min-height: 10%;
  max-height: 80px;
}
.logos::before {
  content: "";
  position: absolute;
  top: 20px;
  height: 80px;
  width: 0.1em;
  left: 50%;
  background-color: var(--light-purple);
}

.label {
  padding: calc(var(--margin) * 0.2);
}
.partner {
  border-left: solid 2px var(--orange);
  background-color: var(--light-orange);
}
.community {
  border-left: solid 2px var(--text-color);
  background-color: var(--light-background);
}

.category {
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--purple);
}

i {
  position: absolute;
  bottom: calc(var(--margin) + 6px);
  right: var(--margin);
  font-size: 1em;
  font-weight: bold;
  text-align: right;
}

@media only screen and (max-width: $mobile-breakpoint) {
  img {
    margin-bottom: 0;
  }
}
</style>
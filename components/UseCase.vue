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
          <div v-if="usecase.label.type" class="label partner" flex column align-center>
            <p>{{ usecase.label.title }}</p>
          </div>
          <div v-else class="label community" flex column align-center>
            <p>{{ usecase.label }}</p>
          </div>
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
  })
};
</script>

<style lang="scss" scoped>
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

.label-icon {
  width: calc(100% - var(--margin) * 2);
  position: absolute;
  bottom: calc(var(--margin) + 6px);
}
.label {
  border-radius: 3px;
  padding: calc(var(--margin) * 0.2);
}
.partner {
  background-color: var(--light-orange);
}
.community {
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
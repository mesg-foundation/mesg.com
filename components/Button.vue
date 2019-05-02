<template>
  <button v-if="submit" type="submit" :class="classes">
    <slot></slot>
    <i v-if="icon" :class="`fa fa-${icon}`"></i>
  </button>
  <a v-else-if="href" :href="href" :class="classes">
    <slot></slot>
    <i v-if="icon" :class="`fa fa-${icon}`"></i>
  </a>
  <nuxt-link v-else-if="to" :to="to" :class="classes">
    <slot></slot>
    <i v-if="icon" :class="`fa fa-${icon}`"></i>
  </nuxt-link>
  <a v-else @click="$emit('click')" :class="classes">
    <slot></slot>
    <i v-if="icon" :class="`fa fa-${icon}`"></i>
  </a>
</template>

<script>
export default {
  props: {
    href: String,
    to: [Object, String],
    submit: Boolean,
    primary: Boolean,
    secondary: Boolean,
    white: Boolean,
    outline: Boolean
  },
  computed: {
    classes() {
      return {
        "btn--primary": this.primary,
        "btn--secondary": this.secondary,
        "btn--white": this.white,
        "btn--outline": this.outline
      };
    },
    icon() {
      return this.secondary ? "arrow-right" : null;
    }
  }
};
</script>

<style lang="scss" scoped>
a,
button {
  border-radius: 3px;
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  padding: 11px;
  text-decoration: none;
}

i {
  font-size: 1em;
  font-weight: bold;
  text-align: center;
}

.btn--primary {
  color: var(--white);
  background-color: var(--purple);
}

.btn--secondary {
  color: var(--purple);
}

.btn--white {
  color: var(--purple);
  background-color: var(--white);
}

.btn--outline {
  color: var(--purple);
  border: solid 2px var(--purple);
}

@media only screen and (max-width: 768px) {
  a {
    font-size: 1em;
  }
  @media only screen and (max-width: 414px) {
    a,
    button {
      font-size: 0.8em;
    }
  }
}
</style>

<template>
  <button v-if="submit"
    type="submit"
    :class="classes">
    <slot></slot>
    <i v-if="icon" :class="`fa fa-${icon}`"></i>
  </button>
  <a v-else-if="href"
    :href="href"
    :class="classes">
    <slot></slot>
    <i v-if="icon" :class="`fa fa-${icon}`"></i>
  </a>
  <nuxt-link v-else-if="to"
    :to="to"
    :class="classes">
    <slot></slot>
    <i v-if="icon" :class="`fa fa-${icon}`"></i>
  </nuxt-link>
  <a v-else
    @click="$emit('click')"
    :class="classes">
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
    small: Boolean,
    primary: Boolean,
    outline: Boolean,
    icon: String
  },
  computed: {
    classes () {
      return {
        'btn--small': this.small,
        'btn--primary': this.primary,
        'btn--outline': this.outline
      }
    }
  }
}
</script>

<style scoped>
a, button {
  border-radius: 0.3em;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  padding: 1em 2em;
  text-decoration: none;
  cursor: pointer;
  position: relative;
}

i {
  font-size: 1em;
  font-weight: bold;
  text-align: center;
}

.btn--small {
  border-radius: 0.3em;
  padding: 0.1em 2em;
}
.btn--small:hover {
  color: #ffffff;
  color: var(--white-content);
  transition: calc(var(--animation-speed) * 0.1s) ease;
}

.btn--primary {
  color: #ffffff;
  color: var(--white-content);
  background-color: #ffa744;
  background-color: var(--Orange-cta);
}
.btn--primary:hover {
  background-color: #E5963D;
  background-color: var(--Orange-cta-hover);
  transition: calc(var(--animation-speed) * 0.1s) ease;
}

.btn--outline {
  color: #ffa744;
  color: var(--Orange-cta);
  border: solid 2px #ffa744;
}
.btn--outline:hover {
  color: #ffffff;
  color: var(--white-content);
  background-color: #ffa744;
  background-color: var(--Orange-cta);
  transition: calc(var(--animation-speed) * 0.1s) ease;
}

@media only screen and (max-width: 768px) {
  a {
    font-size: 1em;
  }
@media only screen and (max-width: 414px) {
    a, button {
      font-size: 0.8em;
    }
  }
}
</style>

<template>
  <button v-if="submit" type="submit" :class="classes">
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
    <i v-if="posticon" :class="posticon"></i>
  </button>
  <a v-else-if="href" :href="href" :class="classes">
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
    <i v-if="posticon" :class="posticon"></i>
  </a>
  <nuxt-link v-else-if="to" :to="to" :class="classes">
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
    <i v-if="posticon" :class="posticon"></i>
  </nuxt-link>
  <a v-else @click="$emit('click')" :class="classes">
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
    <i v-if="posticon" :class="posticon"></i>
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
    outline: Boolean,
    icon: String
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
    isExternalLink() {
      const link = this.href || this.to;
      return link.startsWith("http");
    },
    posticon() {
      if (!this.secondary) {
        return null;
      }
      if (this.isExternalLink) {
        return "far fa-external-link";
      }
      return "fa fa-arrow-right";
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
  padding: 0.75em;
  padding-left: 2em;
  padding-right: 2em;
  text-decoration: none;
  display: inline-block;
}

i {
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  padding-left: 0.5em;
}

.btn--primary {
  color: var(--white);
  background-color: var(--purple);
}
.btn--primary:hover {
  background-color: var(--purple-shadow);
  transition: 0.2s ease;
}

.btn--secondary {
  position: relative;
  color: var(--purple);
  text-align: left;
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
  border-bottom: solid 1px var(--purple);
}
.btn--secondary::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--purple);
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}
.btn--secondary:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}

.btn--white {
  color: var(--purple);
  background-color: var(--white);
}
.btn--white:hover {
  transition: 0.2s ease;
  background-color: var(--light-background);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
}

.btn--outline {
  color: var(--purple);
  border: solid 1px var(--purple);
}
.btn--outline:hover {
  transition: 0.2s ease;
  box-shadow: 0 0 0 1px var(--purple) inset;
}

@media only screen and (max-width: $mobile-breakpoint) {
  a {
    font-size: 1em;
  }
}
@media only screen and (max-width: $mobile-only) {
  a,
  button {
    min-height: 50px;
    padding: 1.2em;
  }
  .btn--primary,
  .btn--outline,
  .btn--white {
    width: 100%;
  }
}
</style>

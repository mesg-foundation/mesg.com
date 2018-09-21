<template>
  <button v-if="submit"
    type="submit"
    :class="{
      'btn--small': small,
      'btn--primary': primary,
      'btn--purple': purple,
      'btn--outline': outline
    }">
    <slot></slot>
  </button>
  <a v-else
    :href="href"
    :class="{
      'btn--small': small,
      'btn--primary': primary,
      'btn--purple': purple,
      'btn--outline': outline
    }">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: String,
    submit: Boolean,
    small: Boolean,
    primary: Boolean,
    purple: Boolean,
    outline: Boolean
  }
}
</script>

<style scoped>
a, button {
  height: 3.6em;
  border-radius: 3em;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  padding: 1em 2em;
  text-decoration: none;
  cursor: pointer;
}

.btn--small {
  height: 2.4em;
  border-radius: 1.2em;
  padding: 0.6em 1.2em;
}

.btn--primary {
  color: #f1f0f8;
  color: var(--pale-grey);
  background-color: #30b24b;
  background-color: var(--green-cta);
}

.btn--purple {
  color: #f1f0f8;
  color: var(--pale-grey);
  background-color: #9452ff;
  background-color: var(--lighter-purple);
}

.btn--outline {
  color: #9452ff;
  color: var(--lighter-purple);
  border: solid 0.1em #9452ff;
  border: solid 0.1em var(--lighter-purple);
}

@media only screen and (max-width: 768px) {
  a {
    font-size: 1em;
  }
@media only screen and (max-width: 414px) {
    a, button {
      font-size: 0.8em;
      padding: 1em 1.6em;
    }
  }
}
</style>

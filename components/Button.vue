<template>
  <button v-if="submit"
    type="submit"
    :class="{
      'btn--small': small,
      'btn--primary': primary,
      'btn--white': white,
      'btn--outline': outline
    }">
    <slot></slot>
  </button>
  <a v-else
    :href="href"
    :class="{
      'btn--small': small,
      'btn--primary': primary,
      'btn--white': white,
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
    white: Boolean,
    outline: Boolean
  }
}
</script>

<style scoped>
a, button {
  border-radius: 30px;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  padding: 20px 38px;
  text-decoration: none;
  cursor: pointer;
}

.btn--small {
  border-radius: 20px;
  padding: 10px 25px;
}

.btn--primary {
  color: #f1f0f8;
  color: var(--pale-grey);
  background-color: #9452ff;
  background-color: var(--lighter-purple);
}

.btn--white {
  color: #251440;
  color: var(--dark-blue-grey);
  background-color: #f1f0f8;
  background-color: var(--pale-grey);
}

.btn--outline {
  color: #f1f0f8;
  color: var(--pale-grey);
  border: solid 2px #f1f0f8;
  border: solid 2px var(--pale-grey);
}
</style>


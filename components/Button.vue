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
  height: 60px;
  border-radius: 30px;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  padding: 18px 40px;
  text-decoration: none;
  cursor: pointer;
}

.btn--small {
  height: 40px;
  border-radius: 20px;
  padding: 10px 26px;
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
  border: solid 2px #9452ff;
  border: solid 2px var(--lighter-purple);
}
</style>

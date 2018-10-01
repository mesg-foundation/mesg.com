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
  border-radius: 3em;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  padding: 1em 2em;
  text-decoration: none;
  cursor: pointer;
}

.btn--small {
  border-radius: 1.5em;
  padding: 0.5em 1em;
}
.btn--small:hover {
  color: #f1f0f8;
  color: var(--pale-grey);
  transition: 0.4s ease-in-out;
}

.btn--primary {
  color: #f1f0f8;
  color: var(--pale-grey);
  background-color: #30b24b;
  background-color: var(--green-cta);
  opacity:1;
}
.btn--primary:hover {
  background-color: #1F8C36;
  background-color: var(--green-cta-hover);
  transition: 0.4s ease-in-out;
}

.btn--purple {
  color: #f1f0f8;
  color: var(--pale-grey);
  background-color: #9452ff;
  background-color: var(--lighter-purple);
  opacity:1;
}
.btn--purple:hover {
  color: #f1f0f8;
  color: var(--pale-grey);
  background-color: #6F3DBF;
  background-color: var(--lighter-purple-hover);
  transition: 0.4s ease-in-out;
}

.btn--outline {
  color: #9452ff;
  color: var(--lighter-purple);
  border: solid 0.15em #9452ff;
  border: solid 0.15em var(--lighter-purple);
}
.btn--outline:hover {
  color: #f1f0f8;
  color: var(--pale-grey);
  background-color: #9452ff;
  background-color: var(--lighter-purple);
  transition: 0.4s ease-in-out;
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

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
  padding: 1em 4em;
  text-decoration: none;
  cursor: pointer;
}

.btn--small {
  border-radius: 1.5em;
  padding: 0.5em 1.6em;
}
.btn--small:hover {
  color: #ffffff;
  color: var(--white-content);
  transition: 0.4s ease-in-out;
}

.btn--primary {
  color: #ffffff;
  color: var(--white-content);
  background-color: #ffa744;
  background-color: var(--Orange-cta);
  opacity:1;
}
.btn--primary:hover {
  background-color: #ffa744;
  background-color: var(--Orange-cta);
  transition: 0.4s ease-in-out;
}

.btn--purple {
  color: #ffffff;
  color: var(--white-content);
  background-color: #9452ff;
  background-color: var(--lighter-purple);
  opacity:1;
}
.btn--purple:hover {
  color: #ffffff;
  color: var(--white-content);
  background-color: #6F3DBF;
  background-color: var(--lighter-purple-hover);
  transition: 0.4s ease-in-out;
}

.btn--outline {
  color: #ffa744;
  color: var(--Orange-cta);
  border: solid 0.15em #ffa744;
  border: solid 0.15em var(--Orange-cta);
}
.btn--outline:hover {
  color: #ffffffff;
  color: var(--white-content);
  background-color: #ffa744;
  background-color: var(--Orange-cta);
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

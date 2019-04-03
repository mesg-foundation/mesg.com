<template>
  <article>
    <nuxt-link :to="actionLink" v-show-only-children="!actionLink" class="link">
      <div class="card" flex column justify-center align-center>
        <img :src="thumbnail" :alt="title" class="icon">
        <p mt1>{{ title }}</p>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    actionLink: String
  }
}
</script>

<style scoped>
p {
  text-decoration: none;
  text-align: center;
}

.icon {
  max-width: 50px;
}

.card {
  border-radius:0.3em;
  text-decoration: none;
  width: 200px;
  height: 170px;
  padding:1.8em;
}

.card:hover {
  position: relative;
  transition: calc(var(--animation-speed) * 0.1s) ease;
  background-color: #ffffff;
  background-color: var(--white-content);
  box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.07);
}

.link {
  cursor: pointer;
}

@media only screen and (max-width: 414px) {
  .card {
    width: 100%;
    height: auto;
  }
}
</style>

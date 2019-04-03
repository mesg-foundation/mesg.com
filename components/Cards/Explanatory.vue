<template>
  <article class="card">
    <div class="schema" flex column justify-center>
      <img :src="thumbnail" :alt="title" class="icon" mb2>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <nav flex mt2>
      <Button :to="actionLink" outline>{{ actionLinkTitle }}</Button>
    </nav>
  </article>
</template>

<script>
import Button from '~/components/Button'

export default {
  components: {
    Button
  },

  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    actionLink: {
      type: String,
      required: true
    },
    actionLinkTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.icon {
  max-width: 100px;
}

.card {
  border-radius: 0.3em;
  padding: 2.4em;
  background-color: #ffffff;
  background-color: var(--white-content);
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.07);
}

@media only screen and (max-width: 414px) {
  .icon {
    max-width: 80px;
  }
}
</style>

<template>
  <section>
    <div class="container-parent">
      <div class="container-child" flex column>
        <div class="content" flex column justify-center align-center>
          <h2>Our Products</h2>
          <div class="separator-orange" mb2></div>
        </div>
        <div flex row space-around justify-center>
          <ExplanatoryCard v-for="(product, index) in products" :key="index" half flex column
            :title="product.title"
            :description="product.description"
            :thumbnail="product.thumbnail"
            :actionLink="product.link"
            :actionLinkTitle="product.linkTitle" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ExplanatoryCard from '~/components/Cards/Explanatory'

export default {
  components: {
    ExplanatoryCard
  },

  computed: mapState([ 'products' ])
}
</script>

<style scoped>
.container-parent {
  padding-bottom: 0;
}

.container-child {
  padding-bottom: 0;
}

@media only screen and (max-width: 768px) {
  .card:last-child {
    margin-top: 2.4em;
  }
}

@media only screen and (max-width: 414px) {
  .card:last-child {
    margin-top: 1.8em;
  }
}
</style>

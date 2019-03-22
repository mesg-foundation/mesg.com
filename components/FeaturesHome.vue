<template>
  <section>
    <div class="container-parent">
      <div class="container-child" flex row justify-center>
        <div class="content" flex column justify-center align-center>
          <h2>What can MESG do for you?</h2>
          <div class="separator-orange" mb2></div>
        </div>
        <nav flex row justify-center align-center>
          <MiniCard v-for="feature in dotFeatures" :key="feature.id"
            :title="feature.title"
            :thumbnail="feature.icon"
            :actionLink="feature.link"
          />
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import MiniCard from '~/components/Cards/Mini'

export default {
  components: {
    MiniCard
  },

  computed: mapState([ 'dotFeatures' ])
}
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>

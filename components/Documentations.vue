<template>
  <section>
    <div class="container-parent">
      <div class="container-child-title" flex column justify-center align-center>
        <h2>MESG documents</h2>
        <div class="separator-orange"></div>
      </div>
      <div class="container-child" flex row justify-center spacebetween>
        <nav flex row justify-center align-center>
          <FlashyCard v-for="(doc, index) in documentations" :key="index"
            :title="doc.title"
            :thumbnail="doc.thumbnail"
            :thumbnailName="doc.subName"
            :link="doc.url"
            :linkFileName="doc.name" />
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import FlashyCard from '~/components/Cards/Flashy'

export default {
  components: {
    FlashyCard
  },

  computed: mapState([ 'documentations' ])
}
</script>

<style scoped>
.container-parent {
  padding-bottom: 0;
}

.container-child {
  padding-bottom: 0;
}

h2 {
  text-align: center;
}
</style>

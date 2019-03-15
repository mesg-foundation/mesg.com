<template>
  <section>
  <div class="container-parent">
    <div class="container-child features" flex row space-between>
      <div third flex column hide-responsive>
        <SideMenu :items="menuItems" />
      </div>
      <div thirdtwo flex column>
        <div v-for="feature in features" :key="feature.id" :id="feature.id">
          <h2>{{feature.title}}</h2>
          <div class="separator-orange"></div>
          <img :src="feature.picture" :alt="feature.title" mt2>
          <div v-html="feature.text" mt1></div>
          <div class="separator"></div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import SideMenu from '~/components/SideMenu'

export default {
  components: {
    SideMenu
  },

  computed: {
    ...mapState([ 'features' ]),

    menuItems() {
      return this.features.map(({ id, title }) => {
        return { id, text: title }
      })
    }
  }
}
</script>

<style scoped>
.separator {
  margin-top:2.4em;
  margin-bottom: 2.4em;
  border: dotted 0.5px #d6d0e7;
}

.separator-orange {
  width: 60px;
  height: 6px;
  border-radius: 3px;
  background-color:#ffa744;
  background-color: var(--Orange-cta);
}

@media only screen and (max-width: 768px) {
  [third] { width: calc(33% - 2.4em) }
  [thirdtwo] { width: calc(66% - 2.4em) }
}

@media only screen and (max-width: 767px) {
  [third] { width: 100%; }
  [thirdtwo] { width: 100%; }
}

@media only screen and (max-width: 414px) {
  .separator {
    margin-top:1.8em;
    margin-bottom: 1.8em;
  }
  [mt2] { margin-top: 1.8em!important; }
}

@media only screen and (max-width: 1023px) {
  [thirdtwo] { width: 100%; }
}
</style>

<style>
.features p {
  margin-bottom: 1em;
}
</style>

<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <div third flex column hide-responsive>
        <SideMenu :items="menuItems" />
      </div>
      <div thirdtwo flex column>
        <div v-for="category in faq" :key="category.id" :id="category.id">
          <h2>{{category.category}}</h2>
          <div class="separator-orange"></div>
          <div v-for="text in category.text" :key="text.title" mt2>
            <h3>{{text.title}}</h3>
            <p v-html="text.content"></p>
          </div>
          <div class="separator"></div>
        </div>
        <p>
          <small><em>* These FAQs are intended only for informational purposes and shouldn’t be relied upon exclusively or considered as warranties. Please refer to GitHub and other resources for additional details.</em></small>
        </p>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SideMenu from '~/components/SideMenu'

export default {
  components: {
    SideMenu
  },

  computed: {
    faq() {
      return require("~/assets/faq")
    },

    menuItems() {
      return this.faq.map(({ id, category }) => {
        return { id, text: category }
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

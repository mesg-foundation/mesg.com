<template>
  <div>
      <HeaderShowcaseCategories id="introduction" class="dark"/>
      <CategoriesCase :usecases="usecases" id="case" class="white"/>
      <CTANext id="next" class="dark"/>
  </div>
</template>

<script>
import HeaderShowcaseCategories from '~/components/header/ShowcaseCategories'
import CategoriesCase from '~/components/CategoriesCase'
import CTANext from '~/components/cta/Next'
export default {
  components: {
    HeaderShowcaseCategories,
    CategoriesCase,
    CTANext
  },
  computed: {
    usecases () {
      return require('~/assets/usecases.json')
    }
  }
}
</script>

<template>
  <div>
      <HeaderShowcaseCategories id="introduction" class="dark"/>
      <CategoriesCase :usecases="usecases" id="case" class="white"/>
      <CTANext id="next" class="dark"/>
  </div>
</template>

<script>
import HeaderShowcaseCategories from '~/components/HeaderShowcaseCategories'
import CategoriesCase from '~/components/CategoriesCase'
import CTANext from '~/components/CTANext'
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

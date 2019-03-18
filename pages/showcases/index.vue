<template>
  <div>
      <Header id="introduction" class="dark"
        :title="title" 
        :description="description" 
        :schema="schema" />
      <CategoriesCase :usecases="usecases" id="case" class="white"/>
      <CTANext id="next" class="dark"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '~/components/Header'
import CategoriesCase from '~/components/CategoriesCase'
import CTANext from '~/components/cta/Next'
import SchemaNutshell from '~/components/schema/Nutshell'
import page from '../page'

export default {
  components: {
    Header,
    CategoriesCase,
    CTANext
  },

  mixins: [
    page({
      title: 'MESG Showcase',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum orci eget convallis efficitur. Morbi urna massa, volutpat nec auctor vel, vehicula ac est.',
      schema: SchemaNutshell
    })
  ],

  computed: mapState([ 'usecases' ])
}
</script>

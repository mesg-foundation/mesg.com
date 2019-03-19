<template>
  <div v-if="usecase">
    <Header :usecase="usecase" id="introduction" class="dark"
      :title="title"
      :description="description"
      :schema="schema" 
      backTitle="Back to showcase"
      backLink="/showcases" />
    <Progress :usecase="usecase" id="progress" class="white"/>
    <CTANext id="next" class="dark"/>
  </div>
  <div v-else>
    <Header
      id="introduction" class="dark"
      :schema="schema404"
      title="Hey dude,"
      description="Looks like that page doesn't exist."
      smallDescription="Click on the button below to go back to Home, let's act like nothing happened"
      actionLink="/"
      actionTitle="cd $HOME"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Progress from '~/components/Progress'
import CTANext from '~/components/cta/Next'
import Header from '~/components/Header'
import Schema404 from '~/components/schema/404'
import SchemaNutshell from '~/components/schema/Nutshell'
import page from '../page'

export default {
  components: {
    Header,
    Progress,
    CTANext
  },

  mixins: [
    page(self => ({
      title: self.usecase.title,
      description: self.usecase.text,
      schema: SchemaNutshell
    }))
  ],
  
  computed: {
    ...mapState([ 'usecases' ]),

    usecase () {
      return this.usecases
        .filter(x => x.id === this.$route.params.id)[0]
    },

    schema404 () { return Schema404 }
  }
}
</script>

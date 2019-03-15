<template>
  <section>
    <div class="container-parent">
      <div class="container-child-title" flex column justify-center align-center>
          <h2>The Core of the Project</h2>
          <div class="separator-orange"></div>
      </div>
      <div class="container-child">
        <div flex row justify-center>
          <TeamMate
            v-for="(t, i) in team" :key="i"
            class="card"
            flex row
            :name="t.name"
            :pictureUrl="t.pictureUrl"
            :role="t.role"
            :companies="t.companies"
            :socialNetworks="t.socialNetworks"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import TeamMate from '~/components/TeamMate'

export default {
  components: {
    TeamMate
  },

  computed: mapState([ 'team' ])
}
</script>

<style scoped>
h2 {
  text-align: center;
}
h3 {
  margin-bottom: 0em;
}

.card {
  margin: 1.2em;
}

.separator-orange {
  width: 60px;
  height: 6px;
  border-radius: 3px;
  background-color:#ffa744;
  background-color: var(--Orange-cta);
}

@media only screen and (max-width: 768px) {
  .card {
    margin: 0em;
    margin-bottom: 2.4em;
  }
}
@media only screen and (max-width: 414px) {
  .card {
    margin: 0em;
    margin-bottom: 1.2em;
  }
}
</style>

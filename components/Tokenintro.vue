<template>
  <section>
    <div class="container-parent">
      <div class="container-child">
        <div class="title" flex column justify-center align-center>
          <h2>The use of the MESG Token</h2>
          <div class="separator-orange" flex column justify-center align-center mb2></div>
        </div>
        <div flex row justify-center align-center>
          <div v-for="use in uses" :key="use.uses" class="content" flex third column justify-center>
            <div flex column justify-center>
              <img :src="use.icon" :alt="use.title" class="logo" mb1/>
            </div>
            <h3>{{use.title}}</h3>
            <p>{{use.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const uses = [
  {
    id: "rapid-integration",
    title: "Integration",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a iaculis est. Curabitur porta ex faucibus viverra suscipit. Nunc id turpis non risus consectetur dignissim. Suspendisse pharetra dui a auctor ultricies.",
    icon: require('~/assets/icons/features-integration.svg')
  },
  {
    id: "multi-language",
    title: "Decentralisation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a iaculis est. Curabitur porta ex faucibus viverra suscipit. Nunc id turpis non risus consectetur dignissim. Suspendisse pharetra dui a auctor ultricies.",
    icon: require('~/assets/icons/multi-language.svg')
  },
  {
    id: "event-driven",
    title: "Security",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a iaculis est. Curabitur porta ex faucibus viverra suscipit. Nunc id turpis non risus consectetur dignissim. Suspendisse pharetra dui a auctor ultricies.",
    icon: require('~/assets/icons/event-driven.svg')
  }
]
export default {
  computed: {
    uses () {
      return uses
    }
  }
}
</script>

<style scoped>

.container-parent {
  padding-bottom:0;
}
.container-child {
  padding-bottom:0;
}

.content {
  padding:1.2em;
}

.logo {
  max-width: 50px;
}

@media only screen and (max-width: 768px) {
  .content {
    padding-left:0;
    padding-right:0;
    padding-bottom:0.9em;
    padding-top:0.9em;
  }
}

h2 {
  text-align: center;
}

</style>

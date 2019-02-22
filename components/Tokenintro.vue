<template>
  <section>
    <div class="container-parent">
      <div class="container-child">
        <div class="title" flex column justify-center align-center>
          <h2>The MESG Token’s utility</h2>
          <div class="separator-orange" flex column justify-center align-center mb2></div>
        </div>
        <div flex row justify-center>
          <div v-for="use in uses" :key="use.title" class="content" flex third column>
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
    title: "Decentralize executions",
    desc: "You can become a part of the decentralized network by executing transactions for other applications, all while being rewarded for your participation.",
  },
  {
  title: "Secure the network",
    desc: "All participants stake MESG Tokens to commit to their availability and good behavior. Then, participants are rewarded for validating each execution.",
  },
  {
    title: "Buy and sell Modules",
    desc: "App components, called Modules, are bought and sold using the MESG Token. Then Modules can be used in any app, no complex coding required.",
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

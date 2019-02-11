<template>
  <section>
    <div class="container-parent">
      <div class="container-child">
        <div class="title" flex column justify-center align-center>
          <h2>The MESG Token’s utility</h2>
          <div class="separator-orange" flex column justify-center align-center mb2></div>
        </div>
        <div flex row justify-center>
          <div v-for="use in uses" :key="use.uses" class="content" flex third column>
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
    id: "sell",
    title: "Sell Modules",
    desc: "The MESG Token fuels an entire development economy within MESG. It allows access to discrete app components, called Modules, listed on the MESG Marketplace. Developers are paid directly when others use their Modules.",
  },
  {
    id: "buy",
    title: "Buy Modules",
    desc: "Buying premade Modules saves developers significant time when building apps. MESG allows them to simply plug-and-play any Modules into any app, so features can be implemented without needing to write code, or learn new languages.",
  },
  {
    id: "Security",
    title: "Network Support",
    desc: "Once MESG’s decentralized network is launched (Q1 2020), the token will also be used to buy and sell the then-decentralized Modules and power and secure the entire MESG Network.",
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

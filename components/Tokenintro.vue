<template>
  <section>
    <div class="container-parent">
      <div class="container-child">
        <div class="title" flex column justify-center align-center>
          <h2>The token utility</h2>
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
    id: "Fuels",
    title: "Fuels",
    desc: "The MESG Token fuels an entire economy built into MESG. It will initially allow access to Modules deployed on the MESG Marketplace, allowing developers to be paid for the use of these Modules.",
  },
  {
    id: "Decentralisation",
    title: "Decentralisation",
    desc: "Once the decentralized network is launched (Q1 2020), the token will also be used to buy and sell the then-decentralized Modules and power and secure the MESG Network.",
  },
  {
    id: "Security",
    title: "Security",
    desc: "Network security will be ensured through the rewarding of participants for their contributions in processing power and providing verification of processes on the network.",
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

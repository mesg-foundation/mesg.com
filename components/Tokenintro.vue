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
    title: "Buy and Sell Modules",
    desc: "Developers use MESG Tokens to purchase Modules directly from other users. Then, any Modules can simply plug-and-play into any app. This allows developers to implement features without needing to write code or learn new languages first.",
  },
  {
    title: "Decentralize executions",
    desc: "The MESG Token allows you to be part of the decentralized network by executing transactions for other applications, all while being rewarded for your participation. Serverless executions result in unstoppable, inexpensive and maintenance-free applications.",
  },
  {
    title: "Network Security",
    desc: "Participants stake MESG Tokens on the network as collateral, ensuring good behavior and availability. Then, Module creators set aside MESG Tokens to be released upon the execution of a successful job. Held tokens are released once validators ensure the validity of a transaction.",
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

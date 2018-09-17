<template>
  <section>
    <div class="container" flex row space-between>
      <header flex column justify-center half>
        <img mb1 class="logo" src="~/assets/mesg-logo-horizontal-white.svg" alt="MESG">
        <h2 mb1 mt0>Build applications connecting any technologies</h2>
        <p mb1 mt0>Automate and expand business functions through a decentralized reward-driven ecosystem.</p>
        <nav flex>
          <Button href="https://goo.gl/forms/ifXyNfaQn8VC7pfu1" target="_blank" mr1 primary>Get in Touch</Button>
          <Button href="#targets" outline>Learn More</Button>
        </nav>
      </header>
      <div flex column half align-center justify-center>
        <img class="schema" src="~/assets/mesg-schema-header@3x.png" alt="MESG-header">
      </div>
    </div>
  </section>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: {
    Button
  }
}
</script>


<style scoped>
section {
  padding-top: 80px;
}

.schema {
  height: 700px;
}

.logo {
  width: 376px;
}

h2 {
  font-size: 38px;
  font-weight: 500;
}

p {
  font-size: 24px;
}
</style>

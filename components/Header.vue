<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <header flex column justify-center half>
        <MESGLogoHorizontalWhite mb1 class="logo"/>
        <h1 mb1 mt0>Build applications connecting any technologies</h1>
        <p mb1 mt0>Automate and expand business functions through a decentralized reward-driven ecosystem.</p>
        <nav flex>
          <Button href="https://goo.gl/forms/ifXyNfaQn8VC7pfu1" target="_blank" mr1 primary>Get in Touch</Button>
          <Button href="#targets" outline>Learn More</Button>
        </nav>
      </header>
      <div flex column half align-center justify-center>
        <SchemaHeader class="schema"/>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import Button from '~/components/Button'
import MESGLogoHorizontalWhite from '~/components/MESGLogoHorizontalWhite'
import SchemaHeader from '~/components/SchemaHeader'
export default {
  components: {
    Button,
    MESGLogoHorizontalWhite,
    SchemaHeader
  }
}
</script>


<style scoped>
section {
  padding-top: 40px;
}

p {
  font-size: 24px;
}

.schema {
  max-height: 80vh;
}

.logo {
  width: 60%;
  max-width: 60%;
  object-fit: contain;
}


</style>

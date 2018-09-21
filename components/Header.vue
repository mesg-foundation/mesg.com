<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <header flex column justify-center half>
        <MESGLogoHorizontalWhite mb2 class="logo"/>
        <h1>Build applications connecting any technologies</h1>
        <p mb2>Automate and expand business functions through a decentralized reward-driven ecosystem.</p>
        <nav flex>
          <Button href="https://goo.gl/forms/ifXyNfaQn8VC7pfu1" target="_blank" mr2 primary>Get in Touch</Button>
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
  padding-top: 2.4em;
}

p {
  font-size: 1.6em;
  font-weight: normal;
}

.schema {
  max-height: calc(100vh - 12em);
}

.logo {
  width: 60%;
  max-width: 60%;
  object-fit: contain;
}
@media only screen and (max-width: 768px) {
 header {
   text-align: center;
   align-items: center;
 }
 section {
   padding-top: 0;
 }
}
</style>

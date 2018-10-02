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

p {
  font-size: 1.6em;
  font-weight: normal;
}

.schema {
  max-height: calc(100vh - 14em);
  min-height: 520px;
}

.logo {
  width: 60%;
  max-width: 60%;
  object-fit: contain;
}

section {
  padding-top: 2.4em;
}


@media only screen and (min-width: 1025px) {
 .container-child {
   min-height:calc(100vh - 7.2em);
 }
}
@media only screen and (max-width: 768px) {
 header {
   text-align: center;
   align-items: center;
 }
 section {
   padding-top: 0;
 }
 p {
   font-size: 1.4em;
 }
 .logo {
   margin-top: 0;
 }
}

 @media only screen and (max-width: 414px) {
   p {
     font-size: 1.2em;
   }
   svg {
     margin-top: 2.4em;
   }
   .schema {
     min-height: 400px;
   }
 }
</style>

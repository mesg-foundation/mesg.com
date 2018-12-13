<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <header flex column half justify-center>
        <h1>
          What is MESG?
        </h1>
        <p>
          MESG is a bridge between the legacy web and the new decentralized and trustless web.
        </p>
      </header>
      <div flex column half justify-center align-center>
        <SchemaNutshell />
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaNutshell from '~/components/SchemaNutshell'
export default {
  components: {
    SchemaNutshell
  }
}
</script>

<style scoped>

p {
  font-size: 1.6em;
  font-weight: normal;
}

section {
  padding-top: 5.4em;
  min-height: 30vh;
}
.container-child {
  padding-bottom:4.8em;
}


@media only screen and (max-width: 768px) {
 header {
   text-align: center;
   align-items: center;
 }
 section {
   padding-top:4.8em;
   min-height: 0;
 }
 p {
   font-size: 1.4em;
 }
}

 @media only screen and (max-width: 414px) {
   p {
     font-size: 1.2em;
   }
   section {
     padding-top:3.8em;
   }
 }

</style>

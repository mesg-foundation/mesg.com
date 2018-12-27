<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex column space-between>
      <div flex column justify-center align-center>
        <SchemaHeader class="schema" />
      </div>
      <header flex column justify-center align-center>
        <h1>
          The MESG solution
        </h1>
        <p>
          MESG is a bridge between the legacy web and the new decentralized and trustless web.
        </p>
      </header>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaHeader from '~/components/SchemaHeader'
export default {
  components: {
    SchemaHeader
  }
}
</script>

<style scoped>

.container-parent {
  z-index:-1;
}

h1{
  text-align: center;
}

p {
  font-size: 1.6em;
  font-weight: normal;
  text-align: center;
}

.schema {
  max-height: calc(30vh - 15em);
  min-height:450px;
  padding-bottom:2.4em;
  margin-top:0;
}

section {
  padding-top: 5.4em;
}

@media only screen and (min-width: 1025px) {
 .container-child {
   min-height:calc(30vh - 10em);
 }
}
@media only screen and (max-width: 768px) {
 section {
   padding-top:4.8em;
   min-height: 0;
 }
 p {
   font-size: 1.4em;
 }
 .schema {
   width: 65%;
 }
}

 @media only screen and (max-width: 414px) {
   p {
     font-size: 1.2em;
   }
   section {
     padding-top:3.8em;
   }
   .schema {
     min-height: 400px;
     width: 85%;
   }
 }

</style>

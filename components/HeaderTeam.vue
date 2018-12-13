<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <header flex half column justify-center>
        <h1>
          The MESG Team
        </h1>
        <p>The MESG Foundation is a group of world-class impassioned individuals, dedicated to solving major issues in tech interoperability.</p>
      </header>
      <div flex column half justify-center align-center>
        <SchemaConnection />
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaConnection from '~/components/SchemaConnection'
export default {
  components: {
    SchemaConnection
  }
}
</script>

<style scoped>

svg {
  max-width: 75%;
}

p {
  font-size: 1.6em;
  font-weight: normal;
}

section {
  padding-top: 5.4em;
  min-height: 30vh;
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

<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <header>
        <h1>
          Build applications <br>
          connecting any technologies
        </h1>
        <p>Automate and expand business functions through a decentralized reward-driven ecosystem.</p>
      </header>
    </div>
    <div class="scroll-down" flex row justify-center align-center hide-responsive>
      <Arrow class="Arrow-more"/>
    </div>
  </div>
  </section>
</template>

<script>
import Button from '~/components/Button'
import MESGLogoHorizontalWhite from '~/components/MESGLogoHorizontalWhite'
import SchemaHMW1 from '~/components/SchemaHMW1'
import Arrow from '~/components/Arrow'
export default {
  components: {
    Button,
    MESGLogoHorizontalWhite,
    SchemaHMW1,
    Arrow
  }
}
</script>


<style scoped>
.container-parent {
  z-index:-1;
}

header {
  width: 800px;
  text-align: center;
  align-items: center;
}

p {
  font-size: 1.6em;
  font-weight: normal;
}

.scroll-down {
  margin-bottom: -1em;
}
.Arrow-more {
  height: 4em;
}

/*
.schema {
  max-height: calc(100vh - 15em);
  min-height:520px;
  margin-top:0;
}
*/

section {
  padding-top: 2.4em;
}

@media only screen and (min-width: 1025px) {
 .container-child {
   min-height:calc(100vh - 10em);
 }
}
@media only screen and (max-width: 768px) {
 section {
   padding-top:4.8em;
 }
 p {
   font-size: 1.4em;
 }
 /*
 .schema {
   padding-bottom:2.4em;
 }*/
}

 @media only screen and (max-width: 414px) {
   p {
     font-size: 1.2em;
   }
   /*
   svg {
     margin-top: 2.4em;
   }
   .schema {
     min-height: 400px;
   }
   */
   section {
     padding-top:3.8em;
   }
 }

</style>

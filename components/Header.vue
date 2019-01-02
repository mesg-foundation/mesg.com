<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between column-reverse-responsive>
      <header half flex column justify-center>
        <h1>
          The new economy of app development
        </h1>
        <p>
          Connect reusable, shareable integrations from any API or decentralized network, managed by the MESG Engine. And get paid for it.
        </p>
      </header>
      <div half flex column justify-center align-center>
        <SchemaMESG class="schema" />
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaMESG from '~/components/SchemaMESG'
export default {
  components: {
    SchemaMESG
  }
}
</script>

<style scoped>

.container-parent {
  z-index:-1;
  padding-top: 5.4em;
  background-image:linear-gradient(155deg, rgba(37, 20, 64, 0.9) 0%, rgba(73, 30, 140, 0.9) 100%), url("~/assets/Contact.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
}


p {
  font-size: 1.6em;
  font-weight: normal;
}

.schema {
  max-height: calc(30vh - 15em);
  min-height:450px;
  margin-top:0;
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
 header{
   text-align:center;
 }
 p {
   font-size: 1.4em;
 }
 .schema {
   min-height:280px;
   margin-bottom:2.4em;
 }
 .container-parent {
   padding-top: 2.4em;
 }
 .container-child {
   max-width: 600px;
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
     max-height: 280px;
     max-width: 280px;
     margin-bottom:1.8em;
   }
   .container-parent {
     padding-top: 0em;
   }
 }

</style>

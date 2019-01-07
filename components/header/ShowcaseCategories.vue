<template>
  <section>
    <div class="container-parent">
      <div class="container-child" flex row column-reverse-responsive space-between>
        <header half flex column justify-center>
            <h1>
              MESG Showcase
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum orci eget convallis efficitur. Morbi urna massa, volutpat nec auctor vel, vehicula ac est.
            </p>
          </header>
          <div half flex column align-center justify-center>
            <SchemaNutshell />
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import SchemaNutshell from '~/components/schema/Nutshell'
export default {
  components: {
    SchemaNutshell
  }
}
</script>

<style scoped>

nav {
  width: 100%;
  max-width: 1440px;
  padding: 2.4em;
  margin:auto;
}

p {
  font-size: 1.6em;
  font-weight: normal;
}

section {
  padding-top: 5.4em;
  min-height: 30vh;
}

@media only screen and (min-width: 1025px) {
 .container-child {
   height:50vh;
 }
}
@media only screen and (max-width: 768px) {
  header {
    text-align: center;
  }
 section {
   padding-top:4.8em;
   min-height: 0;
 }
 svg {
   padding-bottom:2.4em;
   margin-top:0;
 }
}

 @media only screen and (max-width: 414px) {
   header {
     text-align: left;
   }
   section {
     padding-top:3.8em;
   }
 }

</style>

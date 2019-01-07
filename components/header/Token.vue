<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row column-reverse-responsive space-between>
      <header flex half column justify-center>
        <h1>
          The App Development Token
        </h1>
        <p mb2>
          Get paid for the Modules you create in a value driven economy based on participation and useful contribution.
        </p>
        <nav flex>
          <Button href="http://eepurl.com/drKt-5" target="_blank" primary>Keep me updated</Button>
        </nav>
      </header>
      <div flex column half justify-center align-center>
        <IconToken class="schema" />
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import IconToken from '~/components/icon/Token'
import Button from '~/components/Button'
export default {
  components: {
    IconToken,
    Button
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
  max-width: 400px;
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
   align-items:center;
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

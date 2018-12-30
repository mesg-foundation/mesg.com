<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row column-reverse-responsive space-between>
      <header flex half column justify-center>
        <h1>
          Purchase the MESG token
        </h1>
        <p mb2>
          The MESG token will be listing soon, get up to date by clicking on the button below to make sure you won't miss it.
        </p>
        <nav flex>
          <Button href="https://goo.gl/forms/ifXyNfaQn8VC7pfu1" target="_blank" primary>I want the MESG token</Button>
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
import IconToken from '~/components/IconToken'
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

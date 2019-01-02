<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between column-reverse-responsive>
      <header half flex column justify-center>
        <h1>
          Frequently Asked Questions
        </h1>
        <p mb1>
          Below are some common questions and answers about MESG and the MESG Network.
        </p>
        <p class="small">
          These FAQs are intended only for informational purposes and shouldn’t be relied upon exclusively or considered as warranties. Please refer to GitHub and other resources for additional details.
        </p>
      </header>
      <div half flex column justify-center align-center>
        <IconFAQ class="schema" />
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import IconFAQ from '~/components/IconFAQ'
export default {
  components: {
    IconFAQ
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

.small {
  font-weight: lighter;
  font-style: italic;
  font-size: 0.6em;
  line-height: normal;
  letter-spacing: normal;
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

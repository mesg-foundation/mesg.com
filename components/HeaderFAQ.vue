<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <header flex column justify-center align-center class="content">
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
    </div>
  </div>
  </section>
</template>

<style scoped>

section {
  padding-top: 5.4em;
  min-height: 30vh;
}

.content {
  width: 100%;
  max-width: 1100px;
}

p {
  text-align:center;
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

@media only screen and (min-width: 1025px) {
 .container-child {
   height:50vh;
 }
}
@media only screen and (max-width: 1024px) {
  .content {
    width: 100%;
    max-width: 768px;
  }
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

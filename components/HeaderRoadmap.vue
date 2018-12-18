<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <header flex column justify-center align-center class="content">
        <h1>
          The MESG Roadmap
        </h1>
        <p>Our vision is to make business integration simple by becoming the universally-used platform for connecting traditional technology to trustless systems.</p>
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

<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <header flex row justify-center align-center>
        <div class="content" flex column justify-center align-center>
        <h1>
          The MESG Roadmap
        </h1>
        <p>Our vision is to make business integration simple by becoming the universally-used platform for connecting traditional technology to trustless systems.</p>
      </div>
      </header>
    </div>
  </div>
  </section>
</template>


<style scoped>

p {
  font-size: 1.6em;
  font-weight: normal;
  text-align: center;
}

section {
  padding-top: 5.4em;
  min-height: 30vh;
}
.content {
  width: 100%;
  max-width: 960px;
}


@media only screen and (max-width: 768px) {
 header {
   text-align: center;
   align-items: center;
 }
 section {
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
 }

</style>

<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <header flex row justify-center align-center>
        <div class="content" flex column justify-center align-center>
        <h1>
          The MESG Team
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum quam scelerisque dolor sodales viverra.</p>
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
  padding-top: 4.8em;
  min-height: 30vh;
}
.content {
  width: 100%;
  max-width: 1000px;
}

@media only screen and (max-width: 768px) {
 header {
   text-align: center;
   align-items: center;
 }
 section {
   padding-top: 0;
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

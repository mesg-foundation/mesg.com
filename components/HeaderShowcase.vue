<template>
  <section>
    <div class="container-parent">
      <nav flex row>
        <nuxt-link to="/showcases" class="link"><i class="fas fa-arrow-left" mr05></i>Back to showcase</nuxt-link>
      </nav>
      <div class="container-child" flex row column-reverse-responsive space-between>
        <header :id="usecase.id" half flex column justify-center>
            <h1>{{usecase.title}}</h1>
            <p>{{usecase.text}}</p>
          </header>
          <div half flex column align-center justify-center>
            <SchemaNutshell />
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import SchemaNutshell from '~/components/SchemaNutshell'
export default {
  components: {
    SchemaNutshell
  },
  props: {
    usecase: {
      type: Object,
      required: true
    }
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
  font-size: 1em;
  font-weight: normal;
}

section {
  padding-top: 5.4em;
  min-height: 30vh;
}

/*
@media only screen and (min-width: 1025px) {
 .container-child {
   min-height:calc(100vh - 10em);
 }
}*/
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

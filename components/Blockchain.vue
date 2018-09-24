<template>
  <section>
  <div class="container-parent">
    <div class="container-child-title" flex row justify-center align-center>
      <h2>Paving the way to mass blockchain adoption</h2>
    </div>
    <div class="container-child" flex row column-reverse-responsive space-between>
      <div half flex column justify-center align-center>
        <SchemaAdoptionBefore mb2/>
        <p class="subtitle">App users are responsible for direct interaction with technologies</p>
      </div>
      <div half flex column justify-center>
        <h3>Current system</h3>
        <p>One major reason blockchain blockchain apps have been unsuccessful is because of their steep barrier to entry. Currently, users have to pay every time they interact with blockchain apps. This is unlike any popular Web 2.0 application, such as Facebook or Google, which allow users to adopt the technology for free. This seamless user experience is critical for blockchain’s mass adoption.</p>
      </div>
    </div>
    <div class="container-child" flex row space-between>
      <div half flex column justify-center>
        <h3>MESG System</h3>
        <p>With MESG, blockchain developers can pay the overhead, saving the users from a cumbersome experience, and then generate income via other avenues such as advertising, much like Web 2.0 applications. You can easily set up blockchain apps to function without requiring the user to pay to send data.</p>
      </div>
      <div half flex column justify-center align-center>
        <SchemaAdoption mb2/>
        <p class="subtitle">App users bypass the complexities by using MESG</p>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaAdoptionBefore from '~/components/SchemaAdoptionBefore'
import SchemaAdoption from '~/components/SchemaAdoption'
export default {
  components: {
    SchemaAdoptionBefore,
    SchemaAdoption
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 0;
}

svg {
  width: 75%;
  max-width: 75%;
}
.subtitle {
  text-align: center;

}

@media only screen and (max-width: 375px) {
  .container-child-title {
    width: 100%;
    padding: 2.4em;
    padding-bottom: 0;
  }
}
</style>

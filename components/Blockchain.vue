<template>
  <section>
    <div class="container" flex row justify-center>
      <h2>Paving the way to mass blockchain adoption</h2>
    </div>
    <div class="container" flex row column-reverse-mobile space-between>
      <div half flex column justify-center align-center>
        <SchemaAdoptionBefore mb2/>
        <p>App users are responsible for direct interaction with technologies</p>
      </div>
      <div half flex column justify-center>
        <h3 mb1>Current system</h3>
        <p>One major reason blockchain blockchain apps have been unsuccessful is because of their steep barrier to entry. Currently, users have to pay every time they interact with blockchain apps. This is unlike any popular Web 2.0 application, such as Facebook or Google, which allow users to adopt the technology for free. This seamless user experience is critical for blockchain’s mass adoption.</p>
      </div>
    </div>
    <div class="container" flex row space-between>
      <div half flex column justify-center>
        <h3 mb1>MESG System</h3>
        <p>With MESG, blockchain developers can pay the overhead, saving the users from a cumbersome experience, and then generate income via other avenues such as advertising, much like Web 2.0 applications. You can easily set up blockchain apps to function without requiring the user to pay to send data.</p>
      </div>
      <div half flex column justify-center align-center>
        <SchemaAdoption mb2/>
        <p>App users bypass the complexities by using MESG</p>
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

.container {
  padding-top: 40px;
  padding-bottom: 40px;
}
.container:first-child {
  padding-top: 80px;
}
.container:last-child {
  padding-bottom: 80px;
}
</style>

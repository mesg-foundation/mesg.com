<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <div half flex column justify-center>
        <h2>What is a business if not a collection of functions?</h2>
        <p>
          MESG makes it easy to automate and connect business functions, streamline processes or even allow departments or industries to work together without a hitch. No coding required.
          <br>
          <br>
          Any function from any industry can work in combination with any other. Slot in functionalities to create or scale a business, expand to other markets or create entirely new products.
          <br>
          <br>
          <strong>The only limit is your imagination.</strong>
        </p>
      </div>
      <div half flex column justify-center align-center>
        <SchemaBusiness />
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaBusiness from '~/components/SchemaBusiness'
export default {
  components: {
    SchemaBusiness
  }
}
</script>

<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <div class="paragraphe" half flex column justify-center>
        <h2>What MESG does?</h2>
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
      <div half flex column justify-center>
        <h2>What the MESG token will be used for?</h2>
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

<style scoped>

@media only screen and (max-width: 768px) {
  .paragraphe {
    margin-bottom: 2.4em;
  }
}
@media only screen and (min-width: 414px) {
  .container-child {
    padding-bottom:0;
  }
}
@media only screen and (max-width: 414px) {
  .paragraphe {
    margin-bottom: 1.8em;
  }
}

</style>

<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <div class="bloc resp" half flex column justify-center>
        <h2>Marketplace</h2>
        <p mb2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus suscipit ullamcorper. In feugiat et dolor quis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus suscipit ullamcorper. In feugiat et dolor quis dapibus.
        </p>
      </div>
      <div class="bloc" half flex column justify-center>
        <h2>Engine</h2>
        <p mb2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus suscipit ullamcorper. In feugiat et dolor quis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus suscipit ullamcorper. In feugiat et dolor quis dapibus.
        </p>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaConnection from '~/components/SchemaConnection'
export default {
  components: {
    SchemaConnection
  }
}
</script>

<style scoped>

.bloc {
  padding: 2.4em;
  border: solid 1px #d6d0e7;
  border-radius: 10px;
}

@media only screen and (max-width: 768px) {
  .resp {
    margin-bottom:2.4em;
  }
}
@media only screen and (max-width: 414px) {
  .resp {
    margin-bottom:1.8em;
  }
}

</style>

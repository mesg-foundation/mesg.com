<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between justify-center align-center>
      <div half flex column jsutify-center align-center>
        <SchemaMarketplaceDetail />
      </div>
      <div half flex column jsutify-center align-center>
        <SchemaEngineDetail />
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaMarketplaceDetail from '~/components/SchemaMarketplaceDetail'
import SchemaEngineDetail from '~/components/SchemaEngineDetail'
export default {
  components: {
    SchemaMarketplaceDetail,
    SchemaEngineDetail
  }
}
</script>

<style scoped>

.container-parent {
  padding-top:0;
  padding-bottom:0;
}
.container-child {
  padding-top:0;
  padding-bottom:0;
}

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

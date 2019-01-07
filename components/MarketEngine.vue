<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <div half flex column>
        <div class="schema" flex column space-between>
          <SchemaMarketplace />
        </div>
        <h2>MESG Market</h2>
        <p mb2>
          Save time and money by using existing Modules in the MESG Market. Or build Modules and offer them to the community to earn MESG Tokens.
        </p>
        <nav>
          <nuxt-link to="/market" class="link">Learn more<i class="fas fa-arrow-right"></i></nuxt-link>
        </nav>
      </div>
      <div half flex column>
        <div class="schema resp" flex column>
          <SchemaEngine />
        </div>
        <h2>MESG Engine</h2>
        <p mb2>
          The MESG Engine powers connectivity between Modules and other devices and applications. Control the flow of data and level of security between your whole stack of connected technologies.
        </p>
        <nav>
          <nuxt-link to="/engine" class="link">See how it works<i class="fas fa-arrow-right"></i></nuxt-link>
        </nav>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaMarketplace from '~/components/schema/Marketplace'
import SchemaEngine from '~/components/schema/Engine'
export default {
  components: {
    SchemaMarketplace,
    SchemaEngine
  }
}
</script>

<style scoped>

.schema {
  max-width: 140px;
  max-height: 140px;
  padding:2.4em;
  padding-top:0;
  padding-left:0;
}

svg {
  margin-top:0;
}

i {
  padding-left:0.6em;
}

@media only screen and (max-width: 768px) {
  .resp {
    margin-top:4.8em;
  }
}
@media only screen and (max-width: 414px) {
  .schema {
    padding:1.8em;
  }
  .resp {
    margin-top:1.8em;
  }
}

</style>

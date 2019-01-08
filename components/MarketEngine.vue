<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <div half flex column>
        <div class="schema" flex column justify-center align-center>
          <IconMarketplace mb2/>
        </div>
        <h2>MESG Marketplace</h2>
        <p mb2>
          Save time and money by using existing Modules in the MESG Marketplace. Or build Modules and offer them to the community to earn MESG Tokens.
        </p>
        <nav>
          <nuxt-link to="/marketplace" class="link">Learn more<i class="fas fa-arrow-right" ml05></i></nuxt-link>
        </nav>
      </div>
      <div half flex column>
        <div class="schema resp" flex column justify-center align-center>
          <IconEngine mb2/>
        </div>
        <h2>MESG Engine</h2>
        <p mb2>
          The MESG Engine powers connectivity between Modules and other devices and applications. Control the flow of data and level of security between your whole stack of connected technologies.
        </p>
        <nav>
          <nuxt-link to="/engine" class="link">See how it works<i class="fas fa-arrow-right" ml05></i></nuxt-link>
        </nav>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import IconMarketplace from '~/components/IconMarketplace'
import IconEngine from '~/components/IconEngine'
export default {
  components: {
    IconMarketplace,
    IconEngine
  }
}
</script>

<style scoped>

.schema {
  max-width: 100px;
}

svg {
  margin-top:0;
}


@media only screen and (max-width: 768px) {
  .resp {
    margin-top:4.8em;
  }
}
@media only screen and (max-width: 414px) {
  .resp {
    margin-top:2.4em;
  }
  .schema {
    max-width: 80px;
  }
}

</style>

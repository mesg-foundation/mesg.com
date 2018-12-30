<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <div half flex column>
        <div class="schema" flex column space-between>
          <SchemaMarketplace />
        </div>
        <h2>The MESG Marketplace</h2>
        <p mb2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod mi sed sapien eleifend, a tempor nulla vestibulum. Nam sollicitudin porttitor ligula, vel facilisis nibh. Suspendisse pretium augue at rhoncus gravida. Cras nunc risus, convallis non mollis quis, varius a massa. Pellentesque rutrum vulputate posuere. Maecenas metus odio, dictum quis felis eget, commodo ullamcorper est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id felis nec turpis lacinia porttitor eget a risus.
        </p>
        <nav>
          <nuxt-link to="/marketplace" class="link">Discover the Marketplace<i class="fas fa-arrow-right"></i></nuxt-link>
        </nav>
      </div>
      <div half flex column>
        <div class="schema resp" flex column>
          <SchemaEngine />
        </div>
        <h2>The MESG Engine</h2>
        <p mb2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod mi sed sapien eleifend, a tempor nulla vestibulum. Nam sollicitudin porttitor ligula, vel facilisis nibh. Suspendisse pretium augue at rhoncus gravida. Cras nunc risus, convallis non mollis quis, varius a massa. Pellentesque rutrum vulputate posuere. Maecenas metus odio, dictum quis felis eget, commodo ullamcorper est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id felis nec turpis lacinia porttitor eget a risus.
        </p>
        <nav>
          <nuxt-link to="/engine" class="link">Discover the Engine<i class="fas fa-arrow-right"></i></nuxt-link>
        </nav>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaMarketplace from '~/components/SchemaMarketplace'
import SchemaEngine from '~/components/SchemaEngine'
export default {
  components: {
    SchemaMarketplace,
    SchemaEngine
  }
}
</script>

<style scoped>

.schema {
  height: 140px;
  padding:2.4em;
  padding-top:0;
  padding-left:0;
}

svg {
  width: 30%;
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

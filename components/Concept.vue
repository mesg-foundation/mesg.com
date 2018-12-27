<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <div half flex column justify-center>
        <h2>The MESG Marketplace</h2>
        <p mb2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod mi sed sapien eleifend, a tempor nulla vestibulum. Nam sollicitudin porttitor ligula, vel facilisis nibh. Suspendisse pretium augue at rhoncus gravida. Cras nunc risus, convallis non mollis quis, varius a massa. Pellentesque rutrum vulputate posuere. Maecenas metus odio, dictum quis felis eget, commodo ullamcorper est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id felis nec turpis lacinia porttitor eget a risus.
        </p>
        <nav>
          <nuxt-link to="/solution" class="link">Discover the Marketplace<i class="fas fa-arrow-right"></i></nuxt-link>
        </nav>
      </div>
      <div flex half column justify-center align-center>
        <SchemaImportant />
      </div>
    </div>
    <div class="container-child" flex row space-between column-reverse-responsive>
      <div half flex column justify-center align-center>
        <SchemaNutshell />
      </div>
      <div half flex column justify-center>
        <h2>The MESG Engine</h2>
        <p mb2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod mi sed sapien eleifend, a tempor nulla vestibulum. Nam sollicitudin porttitor ligula, vel facilisis nibh. Suspendisse pretium augue at rhoncus gravida. Cras nunc risus, convallis non mollis quis, varius a massa. Pellentesque rutrum vulputate posuere. Maecenas metus odio, dictum quis felis eget, commodo ullamcorper est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id felis nec turpis lacinia porttitor eget a risus.
        </p>
        <nav>
          <nuxt-link to="/solution" class="link">Discover the Engine<i class="fas fa-arrow-right"></i></nuxt-link>
        </nav>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaNutshell from '~/components/SchemaNutshell'
import SchemaImportant from '~/components/SchemaImportant'
export default {
  components: {
    SchemaNutshell,
    SchemaImportant
  }
}
</script>

<style scoped>

i {
  padding-left:0.6em;
}

</style>

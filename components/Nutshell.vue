<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between column-reverse-responsive>
      <div flex half column justify-center align-center>
        <SchemaNutshell />
      </div>
      <div half flex column justify-center>
        <h2>MESG in a nutshell</h2>
        <p>
          MESG is a <strong>decentralized building platform</strong> for apps and businesses where developers can build solutions from a library of shared, pre-built bridges (called MESG Services) to features on technologies.
          <br/>
          <br/>
          All shared bridges to technologies can be reused and combined to create new applications and solutions. The interaction between all connected bridges is managed by MESG’s software, so now, building powerful applications can be as easy as connecting existing Services together.
        </p>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaNutshell from '~/components/SchemaNutshell'
export default {
  components: {
    SchemaNutshell
  }
}
</script>

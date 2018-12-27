<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between>
      <div half flex column justify-center>
        <h2>MESG in a nutshell</h2>
        <p>
          MESG is a <strong>decentralized building platform</strong> for apps and businesses where developers can build solutions from a library of shared, pre-built bridges (called MESG Services) to features on technologies.
          <br/>
          <br/>
          All shared bridges to technologies can be reused and combined to create new applications and solutions. The interaction between all connected bridges is managed by MESG’s software, so now, building powerful applications can be as easy as connecting existing Services together.
        </p>
      </div>
      <div flex half column justify-center align-center>
        <SchemaNutshell />
      </div>
    </div>
    <div class="container-child" flex row space-between column-reverse-responsive>
      <div half flex column justify-center align-center>
        <SchemaImportant />
      </div>
      <div half flex column justify-center>
        <h2>Why is this important?</h2>
        <p>
          The web has evolved to a point where traditional web technologies are now coexisting alongside newer, secure and interactive technologies such as blockchains and machine learning engines. These new technologies have vast improvements over the traditional web, yet <strong>both old and new still serve a purpose, therefore must run in parallel to each other</strong>.
          <br/>
          <br/>
          In the current tech landscape, creating applications which migrate traditional web services towards trustless, interactive services are currently costly and difficult and have many inherent limitations.
          <br/>
          <br/>
          <strong>The world needs a way to connect legacy web service ecosystems to new systems like blockchains</strong> while maintaining the spirit of the newer trustless, decentralized solutions. To allow both to exist harmoniously, a new way to create applications on top of a decentralized infrastructure which supports the bridging to traditional web service ecosystems is needed.
        </p>
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

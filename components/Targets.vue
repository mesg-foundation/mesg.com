<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between column-reverse-responsive align-center>
      <div half flex column justify-center align-center>
        <SchemaBusinessIntegration mb2/>
        <p class="subtitle">
          *MESG is not associated with or sponsored by these companies.<br>
          Each trademarked logo used in this example is the property of their respective owners.
        </p>
      </div>
      <div half>
        <h2>Business integration made simple</h2>
        <p>
          MESG has a single vision: To become the universally-used platform for connecting traditional technology to trustless systems.
          <br>
          <br>
          The MESG infrastructure allows your business to <strong>connect to any technology</strong> which sends or receives data, regardless of the programming language.
          <br>
          <br>
          It’s free to sign up, easy to use, <strong>works with your existing software stack</strong>, and can cut development & maintenance costs by 50% or more.
        </p>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaBusinessIntegration from '~/components/SchemaBusinessIntegration'
export default {
  components: {
    SchemaBusinessIntegration
  }
}
</script>

<style scoped>
svg {
  width: 75%;
  max-width: 75%;
}
.subtitle {
  text-align: center;
  font-size: 0.6em;
  opacity: 0.65;
}
</style>

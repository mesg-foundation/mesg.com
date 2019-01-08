<template>
  <section>
  <div class="container-parent">
    <div class="container-child-title" flex column justify-center align-center>
      <h2>How does it work?</h2>
      <div class="separator-orange"></div>
    </div>
    <div class="container-child" flex row space-between>
      <div half flex column justify-center>
        <p>
          First, to build connections to features, developers must write code to create communication bridges (called Services) from individual technologies to the MESG infrastructure.
          <br/>
          <br/>
          These technologies can include websites, databases, blockchains, mobile apps, machine learning engines, business logic, digital devices or even custom software. <strong>Anything that can connect to the internet can be connected to MESG</strong>, regardless of the programming language.
        </p>
      </div>
      <div half flex column justify-center align-center>
        <SchemaHMW1 />
      </div>
    </div>
    <div class="container-child"  flex row space-between column-reverse-responsive>
      <div half flex column justify-center align-center>
        <SchemaHMW2 />
      </div>
      <div half flex column justify-center>
        <p>
          Once these bridges are built, MESG completes the connection on behalf of developers by connecting the two (or more) bridges together, managing all cooperation and interaction between all bridges. <strong>This, in effect, creates an easy and efficient bridge between legacy and future technologies</strong>.
          <br/>
          <br/>
          With today’s most popular programming methods, developers must spend about ⅓ of their time ensuring proper cooperation between connected technologies within applications. MESG uses Event Driven Architecture, which allows developers to cut out this time, every time something is built, added or updated.
        </p>
      </div>
    </div>
    <div class="container-child"  flex row space-between>
      <div half flex column justify-center>
        <p>
          This automatic communication management, in addition to the sharing and reuse of bridges and workflows, results in <strong>a major reduction of development hours</strong>.
          <br/>
          <br/>
          Developers can simply add shared bridges together to create a very simple, yet powerful MESG Application, and allow the MESG software to manage the interaction between all features.
          <br/>
          <br/>
          Building applications this way allows users to <strong>drastically cut the complexity, size and required time investment for building</strong> and maintaining applications.
        </p>
      </div>
      <div half flex column justify-center align-center>
        <SchemaHMW3 />
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaHMW1 from '~/components/schema/HMW1'
import SchemaHMW2 from '~/components/schema/HMW2'
import SchemaHMW3 from '~/components/schema/HMW3'
export default {
  components: {
    SchemaHMW1,
    SchemaHMW2,
    SchemaHMW3
  }
}
</script>

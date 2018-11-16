<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row space-between column-reverse-responsive>
      <div half flex column justify-center align-center>
        <SchemaConnection />
      </div>
      <div half flex column justify-center>
        <h2>Connect anything</h2>
        <p>
          Today, many popular business solutions do not share data or integrate with each other. <strong>This makes it expensive and time consuming for companies to scale effectively</strong>.
          <br>
          <br>
          MESG allows previously-incompatible devices to exchange information, creating a new world of business opportunities. Build new solutions by combining <strong>any</strong> technologies together, including blockchains or Web APIs.
        </p>
      </div>
    </div>
    <div class="container-child" flex row space-between>
      <div half flex column justify-center>
        <h2>Supercharge existing businesses</h2>
        <p>
          Connect your software suite to MESG to gain access to technologies that can optimize operations, reach new markets, or deliver excellent user experiences.
          <br>
          <br>
          <strong>Any corporate software can be connected to the MESG Network</strong>, which means you can now integrate and automate functionalities such as email, notifications, payments, or literally any other third-party technology.
          <br>
          <br>
          With MESG, connect to the blockchain components your business needs, avoiding the constraints of full adoption.
        </p>
      </div>
      <div half flex column justify-center align-center>
        <SchemaApps />
      </div>
    </div>
    <div class="container-child" flex row space-between column-reverse-responsive>
      <div half flex column justify-center align-center>
        <SchemaNetwork />
      </div>
      <div half flex column justify-center>
        <h2>Grow your network</h2>
        <p>
          Discover the power of a decentralized network.
          <br>
          <br>
          MESG’s decentralized network offers users instant and unlimited scale for their custom integrations, without the worry of frustrating downtime or network bottlenecks.
          <br>
          <br>
          <strong>Achieve limitless expansion within a single tool</strong>; MESG doesn’t limit customers to predefined channels of growth. Implement the features you need, when you need them.
        </p>
      </div>
    </div>
    <div class="container-child" flex row space-between>
      <div half flex column justify-center>
        <h2>Generate income while accelerating productivity</h2>
        <p>
          An economy is built within MESG powered by the sharing and reuse of code. <strong>Applications and their components are shared and reused through an open marketplace</strong>, expediting the development process.
          <br>
          <br>
          Anyone can receive income with MESG by participating in the Network.
          <!--
          TODO:
          <br><br>
          <strong>For more information on how you can start participating in the network today, click here.</strong>
          -->
        </p>
      </div>
      <div half flex column justify-center align-center>
        <SchemaIncome />
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import SchemaConnection from '~/components/SchemaConnection'
import SchemaApps from '~/components/SchemaApps'
import SchemaNetwork from '~/components/SchemaNetwork'
import SchemaIncome from '~/components/SchemaIncome'
export default {
  components: {
    SchemaConnection,
    SchemaApps,
    SchemaNetwork,
    SchemaIncome
  }
}
</script>

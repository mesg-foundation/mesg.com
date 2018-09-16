<template>
  <section>
    <div class="container" flex row space-between column-reverse-mobile>
      <div half flex column justify-center>
        <img src="~/assets/mesg-schema-connect@3x.png" alt="connect">
      </div>
      <div half flex column justify-center>
        <h2 mb1>Connect anything</h2>
        <p>Build applications that easily connect any technologies together, including <strong>any</strong> blockchains or web APIs. Imagine the possibilities: any technology connecting to anything else with data through a decentralized network. There has never been a solution quite like this before.</p>
      </div>
    </div>
    <div class="container" flex row space-between>
      <div half flex column justify-center>
        <h2 mb1>Supercharge existing apps</h2>
        <p>
          <strong>By connecting your existing app to MESG Core, your app accesses leading-edge technologies to deliver excellent user experiences.</strong>
          <br>
          <br>
          Existing blockchain DApp can easily be connected to the MESG Network, which means you can now give any DApp advanced functionalities such as email notifications, payment confirmations, or literally any other third party technology, including any blockchains or Web APIs.
        </p>
      </div>
      <div half flex column justify-center>
        <img src="~/assets/mesg-schema-apps@3x.png" alt="apps">
      </div>
    </div>
    <div class="container" flex row space-between column-reverse-mobile>
      <div half flex column justify-center>
        <img src="~/assets/mesg-schema-network@3x.png" alt="network">
      </div>
      <div half flex column justify-center>
        <h2 mb1>Grow your network</h2>
        <p>
          <strong>Discover the power of a decentralized network.</strong>
          <br>
          <br>
          Once deployed, apps live on the Network, so you won’t need to run a server to keep your app or business running.
          <br>
          <br>
          Through the Network, you’ll have access to all other previously-connected technologies or industries, giving your app or business superpowers.
          <br>
          <br>
          <strong>Now your apps or business can be truly serverless.</strong>
        </p>
      </div>
    </div>
    <div class="container" flex row space-between>
      <div half flex column justify-center>
        <h2 mb1>Generate income while accelerating your productivity</h2>
        <p>
          The MESG economy is fueled by the sharing and reuse of code. Services and Applications are shared and reused through an open marketplace, expediting the development process.
          <br><br>
          You can create residual income by building Services and Applications, or simply by participating in the network. Creators of apps can choose how much each actor in the network, including the creator themselves, is paid for their participation. This creates a value-driven economy and community-driven governance.
          <br><br>
          <strong>For more information on how you can start participating in the network today, click here.</strong>
        </p>
      </div>
      <div half flex column justify-center>
        <img src="~/assets/mesg-schema-income@3x.png" alt="income">
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-image: linear-gradient(30deg, #251440, #491e8c);
  background-image: linear-gradient(30deg, var(--dark-blue-grey), var(--purple));
  z-index: -10;
}

h2 {
  font-family: Quicksand;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f1f0f8;
  color: var(--pale-grey);
}

p {
  font-family: Quicksand;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f1f0f8;
  color: var(--pale-grey);
  text-align: justify;
}

img {
  max-width: 100%;
  object-fit: contain;
}

.container {
  padding-top: 40px;
  padding-bottom: 40px;
}
.container:first-child {
  padding-top: 80px;
}
.container:last-child {
  padding-bottom: 80px;
}
</style>

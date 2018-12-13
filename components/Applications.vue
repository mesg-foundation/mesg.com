<template>
  <section>
  <div class="container-parent">
    <div class="container-child-title" flex row justify-center align-center>
      <h2>Applications on MESG</h2>
    </div>
    <div class="container-child" flex row space-between>
      <div half flex column>
        <p>
          MESG is build on Event-Driven Architecture. This means that applications are radically more simple to build, and possibly even more powerful than those built on Imperative Programming, which is the current popular alternative. Event Driven apps are set to listen for events (shown as when below), and respond with tasks (shown as then below).
          <br>
          <br>
          Event-driven apps execute autonomously and automatically. Once they are set up, apps will simply listen, waiting for the prescribed command to react with a task execution.
          <br>
          <br>
          This can end up looking similar to a workflow, like competitors such as Zapier feature, or it can look like the backend of a traditional application like a website, software or mobile app.
          <br>
          <br>
          Because <strong>any</strong> technology is compatible with MESG, the sheer number and extent of use cases is essentially endless. Below is a non-exhaustive list of what applications can look like on MESG:
        </p>
      </div>
      <div half flex column>
        <p>
          <strong>User wallet creation</strong><br>
          When a new user registers on your Application<br>
            then an Ethereum address is created for them<br>
            then this address is added to their contract information<br>
            then some free ERC20 is given to this address<br>
            then an email is sent to notify the user of the completed actions.<br>
          <br>
          <br>
          <strong>IoT with an electric car example</strong><br>
          When your electric car finishes charging<br>
            then the entity who delivered the electricity is paid<br>
            then the driver is notified that the charge has completed<br>
            then the car is put into standby mode.<br>
          <br>
          <br>
          <strong>Image processing (decentralized processing)</strong><br>
          When an image is uploaded<br>
            then it is resized<br>
            then it is compressed<br>
            then it is uploaded it to different CDN<br>
          <br>
          <br>
          <strong>Blockchain value transfer</strong><br>
          When you receive some Bitcoin<br>
            then the equivalent amount is transferred to Ethereum<br>
            then a notification of the result of the transfer is sent<br>
          <br>
          <br>
          <strong>Ecommerce cart system the accepts payments</strong><br>
          When a user adds a new product to their cart<br>
            then a new Ethereum address is created for them<br>
            then wait for the completed payment in Ethereum to this address<br>
            then when the payment has successfully completed, mark the cart as processing<br>
            then send an email to the user<br>
            then send out the product for delivery<br>
            then when the delivery system receives the product, notify the user of the delivery status<br>
            then when the delivery has been made, mark the cart as paid.<br>
          </p>
      </div>
      <div half flex row>
        </div>
    </div>
  </div>
  </section>
</template>

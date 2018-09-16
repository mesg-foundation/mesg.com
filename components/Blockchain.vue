<template>
  <section>
    <div class="container" flex row justify-center>
      <h1>Paving the way to mass blockchain adoption</h1>
    </div>
    <div class="container" flex row column-reverse-mobile space-between>
      <div half flex column justify-center align-center>
        <img src="~/assets/mesg-schema-adoption-before@3x.png" alt="adoption-before">
        <p>App users are responsible for direct interaction with technologies</p>
      </div>
      <div half flex column justify-center>
        <h2 mb1>Current system</h2>
        <p>One major reason blockchain blockchain apps have been unsuccessful is because of their steep barrier to entry. Currently, users have to pay every time they interact with blockchain apps. This is unlike any popular Web 2.0 application, such as Facebook or Google, which allow users to adopt the technology for free. This seamless user experience is critical for blockchain’s mass adoption.</p>
      </div>
    </div>
    <div class="container" flex row space-between>
      <div half flex column justify-center>
        <h2 mb1>MESG System</h2>
        <p>With MESG, blockchain developers can pay the overhead, saving the users from a cumbersome experience, and then generate income via other avenues such as advertising, much like Web 2.0 applications. You can easily set up blockchain apps to function without requiring the user to pay to send data.</p>
      </div>
      <div half flex column justify-center align-center>
        <img src="~/assets/mesg-schema-adoption-after@3x.png" alt="adoption-after">
        <p>App users bypass the complexities by using MESG</p>
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

h1 {
  font-family: Quicksand;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  color: var(--blanc-background);
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
  margin-bottom: 20px;
  width: 460px;
  max-width: 100%;
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

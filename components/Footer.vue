<template>
  <footer hide-mobile>
    <div class="container">
      <nav flex row space-around>
        <a href="/" ><img src="~/assets/mesg-logo-vertical-purple@3x.png" alt="MESG"></a>
        <div flex column>
          <h3 mb1>Community</h3>
          <a href="https://medium.com/mesg">Medium</a>
          <a href="https://github.com/mesg-foundation">Github</a>
          <a href="https://discord.gg/SaZ5HcE">Discord</a>
        </div>
        <div flex column>
          <h3 mb1>Developer Resources</h3>
          <a href="#">What is MESG? Get started</a>
          <a href="#">Browse our source code on Github</a>
          <a href="#">Read the documentation</a>
          <a href="#">Want to write about MESG?</a>
        </div>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: solid 1px #cac5e4;
  border-top: solid 1px var(--light-blue-grey);
  background-image: linear-gradient(to bottom, #f1f0f8, #ffffff);
  background-image: linear-gradient(to bottom, var(--pale-grey), var(--blanc-background));
}

footer .container {
  padding-top: 40px;
  padding-bottom: 40px;
}

h3 {
  font-family: Quicksand;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #251440;
  color: var(--dark-blue-grey);
}

a {
  font-family: Quicksand;
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #251440;
  color: var(--dark-blue-grey);
  text-decoration: none;
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  height: 200px;
  object-fit: contain;
}
</style>

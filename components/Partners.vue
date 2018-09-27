<template>
  <section>
    <div class="container-parent">
      <div class="container-child-title" flex row justify-center align-center>
          <h2>Our Amazing partners</h2>
      </div>
      <div class="container-child" flex row justify-center align-center>
        <a href="https://www.amazix.com/" target="blank">
          <img src="~/assets/Partners/Amazix.png" class="partners" alt="Amazix">
        </a>
        <a href="https://blockchainlab.co.in/" target="blank">
          <img src="~/assets/Partners/Blockchain-lab.png" class="partners" alt="Blockchain-lab">
        </a>
        <a href="http://www.kelmanlawkc.com/" target="blank">
          <img src="~/assets/Partners/Kelman-law-firm.png" class="partners" alt="Kelman-law-firm">
        </a>
        <a href="https://wachsman.com/" target="blank">
          <img src="~/assets/Partners/Wachsman.png" class="partners" alt="Wachsman">
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 0;
}
img {
  width: 100%;
  max-width: 100%;
  padding:2.4em;
}
a {
    margin: 0.6em;
}
a:hover {
  background-color: #FFFFFF;
  background-color: var(--blanc-background);
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.25);
}
.container-parent {
  padding-top: 0;
}
.white {
  box-shadow: 0 1.2em 1.2em 0 rgba(0, 0, 0, 0.25);
}
@media only screen and (max-width: 1024px) {
  img {
    object-fit: contain;
    padding: 1.2em;
  }
}
@media only screen and (max-width: 414px) {
  a {
      margin: 0;
  }
}
</style>

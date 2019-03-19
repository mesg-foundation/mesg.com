<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <div class="content" flex column justify-center align-center>
        <h2>
          Buy and trade the MESG Token
        </h2>
        <nav class="exchanges" flex row justify-center>
          <Button href="https://www.digifinex.com/en-ww/trade/USDT/MESG" target="_blank" white flex column mr1 mt1><img src="~/assets/digifinex.svg" alt="Digifinex" class="logo"/></Button>
          <Button href="https://idex.market/eth/mesg" target="_blank" white flex column mt1><img src="~/assets/IDEX.svg" alt="Idex" class="logo"/></Button>
        </nav>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: {
    Button,
  }
}
</script>

<style scoped>

.container-parent {
  background-image:linear-gradient(155deg, rgba(73, 30, 140, 0.9) 0%, rgba(73, 30, 140, 0.9) 100%), url("~assets/Contact.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  text-align:center;
}

.content {
  max-width: 600px;
}

.logo {
  height: 20px;
  text-decoration: none;
}

@media only screen and (max-width: 768px) {
  [mr1]{ margin-right: 1.2em!important; }
}
@media only screen and (max-width: 550px) {
  .exchanges {
    width: 100%;
    flex-direction: column;
  }
  [mr1]{ margin-right: 0em!important; }
}

</style>

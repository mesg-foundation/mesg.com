<template>
  <div>
    <Header id="introduction" class="dark token-header"
      :title="title"
      :description="description"
      :schema="schema">
      <p>{{ description }}</p>
      <div class="listing">
        <p mt2 mb1>You can buy and trade the MESG Token on:</p>
      </div>
      <nav class="exchanges" flex row>
        <Button href="https://www.digifinex.com/en-ww/trade/USDT/MESG" target="_blank" white flex column mr1 mt1><img src="~/assets/digifinex.svg" alt="Digifinex" class="logo"/></Button>
        <Button href="https://idex.market/eth/mesg" target="_blank" white flex column mt1><img src="~/assets/IDEX.svg" alt="Idex" class="logo"/></Button>
      </nav>
    </header>
    <div class="white">
      <Tokenintro id="token introduction"/>
      <TokenDesc id="token"/>
      <Documentations id="documentations"/>
      <Howtobuy id="how to buy on DigiFinex" />
    </div>
    <CTATokenUpdated id="token updated" class="dark"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Button from '~/components/Button'
import Tokenintro from '~/components/Tokenintro'
import TokenDesc from '~/components/TokenDesc'
import Documentations from '~/components/Documentations'
import Howtobuy from '~/components/Howtobuy'
import CTATokenUpdated from '~/components/cta/TokenUpdated'
import IconToken from '~/components/icon/Token'
import page from './page'
export default {
  components: {
    Header,
    Button,
    Tokenintro,
    TokenDesc,
    Documentations,
    Howtobuy,
    CTATokenUpdated
  },
  computed: {
    exchanges () {
      return exchanges
    }
  },
  mixins: [
    page({
      title: 'The MESG Token',
      description: 'Buy and sell app components in the new economy of app development.',
      schema: IconToken
    })
  ]
}

</script>

<style scoped>

.listing p {
  font-size: 1em;
}

.logo {
  height: 20px;
  text-decoration: none;
}

@media only screen and (max-width: 768px) {
  .listing a {
    justify-content: center;
  }
  [mr1]{ margin-right: 1.2em!important; }
}

@media only screen and (max-width: 550px) {
  .exchanges {
    flex-direction: column;
  }
  [mr1]{ margin-right: 0em!important; }
}

</style>

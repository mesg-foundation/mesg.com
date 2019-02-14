<template>
  <div>
    <Header id="introduction" class="dark token-header"
      :title="title"
      :description="description"
      :schema="schema">
      <p>{{ description }}</p>
      <nav flex mt2>
        <Button href="https://www.digifinex.com" target="_blank" class="btn" primary mb2>Buy the MESG Token</Button>
      </nav>
      <div v-for="exchange in exchanges" :key="exchange.exchanges" class="listing" flex column>
        <p mb05>Listing on:</p>
        <a href="https://www.digifinex.com" target="_blank" flex>
          <img :src="exchange.svg" :alt="exchange.title" class="logo"/>
        </a>
      </div>
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
      description: 'Buy and sell app components in the new economy of app development. Available now on DigiFinex.',
      schema: IconToken
    })
  ]
}
const exchanges = [
  {
    title: "Digifinex",
    svg: require('~/assets/digifinex.svg'),
  }
]
</script>

<style scoped>

.listing p {
  font-size: 0.8em;
}

a .logo {
  height: 20px;
  text-decoration: none;
}

a:hover {
  cursor: pointer;
  opacity: 0.85;
  transition: calc(var(--animation-speed) * 0.1s) ease;
}

@media only screen and (max-width: 768px) {
  .listing a {
    justify-content: center;
  }
}

</style>

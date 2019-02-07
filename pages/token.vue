<template>
  <div>
    <Header id="introduction" class="dark token-header"
      :title="title"
      :description="description"
      :schema="schema">
      <p>{{ description }}</p>
      <nav flex mt2>
        <Button href="" class="btn" primary mr1>Buy the MESG Token</Button>
        <Button href="" class="btn" outline>Learn how to buy the token</Button>
      </nav>
    </header>
    <div class="white">
      <Tokenintro id="token introduction"/>
      <TokenDesc id="token"/>
      <Documentations id="documentations"/>
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
import CTATokenUpdated from '~/components/cta/TokenUpdated'
import IconToken from '~/components/icon/Token'
import Subscribe from '~/components/Subscribe'
import page from './page'
export default {
  components: {
    Header,
    Button,
    Tokenintro,
    TokenDesc,
    Documentations,
    CTATokenUpdated,
    Subscribe
  },
  mixins: [
    page({
      title: 'The MESG Token',
      description: 'The MESG Foundation is now offering tokens through DigiFinex using an innovative Algorithmic Token Offering system',
      schema: IconToken
    })
  ]
}
</script>

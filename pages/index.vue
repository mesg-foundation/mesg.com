<template>
  <div>
    <Header id="introduction"
      :schema="schema"
      :title="title"
      :description="description">
      <p>{{ description }}</p>
      <nav flex mt2>
        <Button class="btn token" to="/token" secondary>Enterprise Solutions</Button>
        <Button class="btn token" to="/token" primary>Get Started</Button>
      </nav>
    </Header>
    <Popup v-model="video">
      <Video src="https://www.youtube.com/embed/VjPG51iE_fk?autoplay=1" />
    </Popup>
    <div class="white">
      <MarketEngine id="market engine"/>
      <FeaturesHome id="features"/>
    </div>
    <CTAToken id="token" class="dark"/>
  </div>
</template>


<script>
import SchemaMESG from '~/components/schema/MESG'
import Header from '~/components/Header'
import Button from '~/components/Button'
import Video from '~/components/Video'
import Popup from '~/components/Popup'
import MarketEngine from '~/components/MarketEngine'
import FeaturesHome from '~/components/FeaturesHome'
import CTAToken from '~/components/cta/Token'
import page from './page'
export default {
  components: {
    Header,
    Button,
    MarketEngine,
    FeaturesHome,
    CTAToken,
    Video,
    Popup
  },
  mixins: [
    page({
      title: 'The new economy of app development',
      description: 'Build applications connecting reusable, shareable integrations from any API or decentralized network, managed by the MESG Engine. And get paid for it.',
      schema: SchemaMESG
    })
  ],
  data () {
    return {
      video: false
    }
  }
}
</script>

<style scoped>
.btn {
  font-family: 'Open Sans';
  font-size: 17px;
  font-weight: 700;
}

i {
  font-weight: normal;
  vertical-align: middle;
  font-size: 1.5em;
  margin-left:0;
}


/* @media only screen and (max-width: 414px) {
 nav {
    flex-direction: column;
  }
  .btn {
    width: 100%;
  }
  .token {
    margin-top:1.8em;
    margin-left:0;
  }
} */

</style>

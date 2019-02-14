<template>
  <div>
    <Header id="introduction" class="dark"
      :schema="schema"
      :title="title"
      :description="description">
      <p>{{ description }}</p>
      <nav flex mt2 class="actions">
        <Button @click="video = !video" class="btn" outline><i class="far fa-play-circle" mr05></i>Watch the MESG introduction</Button>
      </nav>
    </Header>
    <Popup v-model="video">
      <Video src="https://www.youtube.com/embed/VjPG51iE_fk?autoplay=1" />
    </Popup>
    <div class="white">
      <TokenBanner id="mesg token" class="dark"/>
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
import TokenBanner from '~/components/TokenBanner'
import MarketEngine from '~/components/MarketEngine'
import FeaturesHome from '~/components/FeaturesHome'
import CTAToken from '~/components/cta/Token'
import page from './page'
export default {
  components: {
    Header,
    Button,
    TokenBanner,
    MarketEngine,
    FeaturesHome,
    CTAToken,
    Video,
    Popup
  },
  mixins: [
    page({
      title: 'The new economy of app development',
      description: 'Build applications connecting reusable, shareable integrations from any API or decentralized network, managed by the MESG Engine.',
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

.btn:hover .far {
  font-weight: bold;
}

i {
  font-weight: normal;
  vertical-align: middle;
  font-size: 2em;
  margin-left:0;
}

@media only screen and (max-width: 768px) {
 .actions a {
    margin: auto;
  }
}

</style>

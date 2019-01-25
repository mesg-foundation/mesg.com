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
      <HackathonBanner id="mesg hackathon"/>
      <MarketEngine id="market engine"/>
      <Entrypoints2 id="entry points 2"/>
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
import HackathonBanner from '~/components/HackathonBanner'
import MarketEngine from '~/components/MarketEngine'
import Entrypoints2 from '~/components/Entrypoints2'
import CTAToken from '~/components/cta/Token'
import page from './page'
export default {
  components: {
    Header,
    Button,
    HackathonBanner,
    MarketEngine,
    Entrypoints2,
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

<template>
  <div>
    <Header id="introduction" class="dark"
      :schema="schema"
      :title="title"
      :description="description">
      <p mb2>{{ description }}</p>
      <a @click="video = !video"><i class="fas fa-play-circle" mr05></i><i class="far fa-play-circle" mr05></i>Watch the MESG introduction</a>
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
      description: 'Connect reusable, shareable integrations from any API or decentralized network, managed by the MESG Engine. And get paid for it.',
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

a {
  display:inline-block;
  font: 'Quicksand';
  font-size: 1.2em;
  font-weight: bold;
  font-style: normal;
  color: #9452ff;
  color: var(--lighter-purple);
  text-decoration: none;
}
a:hover {
  color: #5D28B2;
  color: var(--lighter-purple-hover);
  transition: calc(var(--animation-speed) * 0.1s) ease;
  cursor: pointer;
}
a:hover .fas {
  display:inline-block;
}

a:hover .far {
  display:none;
}

.fas {
  position:relative;
  display:none;
}

i {
  vertical-align: middle;
  font-size: 2em;
}

@media only screen and (max-width: 414px) {
  a {
    font-size: 1em;
  }
  i {
    font-size: 1.8em;
  }
}

</style>

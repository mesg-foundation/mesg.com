<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex column>
      <div class="content" flex column justify-center align-center>
        <h2>Our Products</h2>
        <div class="separator-orange" mb2></div>
      </div>
      <div v-for="icon in icons" :key="icon.icons" flex row space-around justify-center>
        <div half flex column class="card">
          <div class="schema" flex column justify-center>
            <img :src="icon.svg_1" :alt="icon.title_1" class="icon" mb2>
          </div>
          <h2>MESG Engine</h2>
          <p>
            The MESG Engine powers connectivity between Modules and other devices and applications. Control the flow of data and level of security between your whole stack of connected technologies.
          </p>
          <nav flex mt2>
            <Button to="/engine" outline>See how it works</Button>
          </nav>
        </div>
        <div half flex column class="card market">
          <div class="schema" flex column justify-center>
            <img :src="icon.svg_2" :alt="icon.title_2" class="icon" mb2>
          </div>
          <h2>MESG Marketplace</h2>
          <p>
            Save time and money by using existing Modules in the MESG Marketplace. Or build Modules and offer them to the community to earn MESG Tokens.
          </p>
          <nav flex mt2>
            <Button to="/marketplace" outline>Learn more</Button>
          </nav>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import IconMarketplace from '~/components/icon/Marketplace'
import Button from '~/components/Button'
import IconEngine from '~/components/icon/Engine'
export default {
  components: {
    IconMarketplace,
    IconEngine,
    Button
  },
  computed: {
    icons () {
      return icons
    }
  }
}

const icons = [
  {
    title_1: "MESG Engine",
    svg_1: require('~/assets/icons/Engine.svg'),
    title_2: "MESG Marketplace",
    svg_2: require('~/assets/icons/Marketplace.svg')
  }
]

</script>

<style scoped>

.container-parent {
  padding-bottom:0;
}
.container-child {
  padding-bottom:0;
}

.icon {
  max-width: 100px;
}

svg {
  margin-top:0;
}

.card {
  border-radius: 0.3em;
  padding:2.4em;
  background-color: #ffffff;
  background-color: var(--white-content);
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.07);
}

@media only screen and (max-width: 768px) {
  .market {
    margin-top:2.4em;
  }
}
@media only screen and (max-width: 414px) {
  .icon {
    max-width: 80px;
  }
  .market {
    margin-top:1.8em;
  }
}

</style>

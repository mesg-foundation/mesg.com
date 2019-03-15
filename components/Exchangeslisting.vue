<template>
  <section>
  <div class="container-parent">
    <div class="container-child-title" flex column justify-center align-center>
      <h2>Exchanges listing</h2>
      <div class="separator-orange"></div>
    </div>
    <div class="container-child" flex row space-between>
      <div class="paragraphe" half flex column space-between justify-center>
        <nav v-for="exchange in exchanges.list1" :key="exchange.name" class="content" half flex column space-between justify-center>
          <a :href="exchange.link" target="blank" class="link" flex row space-between align-center>
            <div flex row align-center>
              <div class="picture1" mr1></div>
              <span>
                {{exchange.name}}
              </span>
            </div>
            <i class="fas fa-arrow-right" flex row space-between align-center></i>
          </a>
          <div class="Separator-dotted"></div>
        </nav>
      </div>
      <div class="paragraphe" half flex column space-between justify-center>
        <nav v-for="exchange in exchanges.list2" :key="exchange.name" class="content" half flex column space-between justify-center>
          <a :href="exchange.link" target="blank" class="link" flex row space-between align-center>
            <div  flex row align-center>
              <div class="picture2" mr1></div>
              <span>
                {{exchange.name}}
              </span>
            </div>
            <i class="fas fa-arrow-right" flex row space-between align-center></i>
          </a>
          <div class="Separator-dotted"></div>
        </nav>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([ 'exchanges' ]),
  
  methods: {
    pictureStyle (exchange) {
      return {
        backgroundImage: `url(${exchange.picture})`
      }
    }
  }
}
</script>

<style scoped>

nav {
  width: 100%;
}

a {
  width: 100%;
  padding:1.2em;
}
a:hover {
  transition: calc(var(--animation-speed) * 0.1s) ease;
  background-color: #ffffff;
  background-color: var(--white-content);
}

.Separator-dotted {
  border: 0.5px #d6d0e7 dotted;
  width: 100%;
  height: 0.05em;
}

.picture1 {
  background-image: url("~/static/exchanges/CoinMarketCap.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  overflow:hidden;
  width: 60px;
  height: 60px;
  border-radius:100%;
}
.picture2 {
  background-image: url("~/static/exchanges/Bitstamp.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  overflow:hidden;
  width: 60px;
  height: 60px;
  border-radius:100%;
}

@media only screen and (min-width: 414px) {
  .container-child-title {
    padding-top:0;
  }
}

</style>

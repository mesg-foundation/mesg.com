<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <div class="content" v-for="exchange in exchanges" :key="exchange.exchanges" flex column justify-center align-center>
        <img :src="exchange.svg" :alt="exchange.title" class="logo" mb1/>
        <h1>
          Token available on Digifinex
        </h1>
        <p mb2>
          The MESG Token will be available soon. Introducing the token for the new economy of development.
        </p>
        <nav flex>
          <Button href="" class="btn" primary mr1>Buy the MESG Token</Button>
        </nav>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import IconToken2 from '~/components/icon/Token2'
import Subscribe from '~/components/Subscribe'
export default {
  components: {
    Subscribe,
    IconToken2
  },
  computed: {
    exchanges () {
      return exchanges
    }
  }
}
  const exchanges = [
    {
      title: "Digifinex",
      svg: require('~/assets/digifinex.svg'),
    }
]
</script>

<style scoped>

svg {
  margin-top:0;
}

.container-parent {
  background-image:linear-gradient(155deg, rgba(73, 30, 140, 0.9) 0%, rgba(73, 30, 140, 0.9) 100%), url("~/assets/Contact.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  text-align:center;
}

.content {
  max-width: 600px;
}

.logo {
  max-width: 200px;
}

</style>

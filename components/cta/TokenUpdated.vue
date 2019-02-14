<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex row justify-center align-center>
      <div class="content" v-for="exchange in exchanges" :key="exchange.exchanges" flex column justify-center align-center>
        <h2>
          Token available on
        </h2>
        <img :src="exchange.svg" :alt="exchange.title" class="logo" mb2/>
        <p mb2>
          The MESG Token is now available on DigiFinex. Introducing the token for the new economy of development.
        </p>
        <nav flex>
          <Button href="https://www.digifinex.com" target="_blank" class="btn" primary>Buy the MESG Token</Button>
        </nav>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: {
    Button,
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
  max-width: 400px;
}

</style>

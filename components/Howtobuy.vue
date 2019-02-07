<template>
  <section>
    <div class="container-parent">
      <div class="container-child" flex row justify-center spacebetween>
        <div class="card" flex row justify-center align-center>
          <div class="third" v-for="icon in icons" :key="icon.icons" flex column justify-center align-center>
            <img :src="icon.svg" :alt="icon.title" class="icon"/>
          </div>
          <div class="third resp" flex column justify-center>
            <h3 mb05>How to buy the MESG Token</h3>
            <p mb05>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a iaculis est. Curabitur porta ex faucibus viverra suscipit.
            </p>
          </div>
          <div class="third" flex column justify-center align-center>
            <Button href="" target="_blank" outline>Learn how to buy the token</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: {
    Button
  },
  props: {
    to: String
  },
  computed: {
    icons () {
      return icons
    }
  }
}
  const icons = [
    {
      title: "MESG Token",
      svg: require('~/assets/icons/Algorithmic-token.svg'),
    }
]
</script>

<style scoped>

svg {
  margin-top:0;
}

.icon {
  max-width: 180px;
}

.card {
  width: 100%;
  border-radius:0.3em;
  border:solid 1px #d6d0e7;
}

.third {
  width: 33%;
  padding:1.2em;
}

@media only screen and (max-width: 768px) {
  .third {
    width: 100%;
    padding:1.8em;
  }
  h3 {
    text-align:center;
  }
  p {
    text-align:center;
  }
  .icon {
    padding-bottom:0;
  }
  .resp {
    padding-top:0;
    padding-bottom:0;
  }
}
</style>

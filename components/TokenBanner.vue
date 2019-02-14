<template>
  <section>
    <div class="container-parent">
      <div class="container-child" flex row justify-center spacebetween>
        <div class="card" flex row justify-center align-center>
          <div class="third" flex column justify-center align-center>
            <Listed class="icon"/>
          </div>
          <div class="third resp" flex column justify-center>
            <h3>MESG Token available</h3>
            <p><span>An innovative Algorithmic Token Offering system.</span></p>
          </div>
          <div class="third" flex column justify-center align-center>
            <Button href="https://www.digifinex.com" target="_blank" primary>Buy the MESG Token</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Listed from '~/components/icon/Listed'
import Button from '~/components/Button'
export default {
  components: {
    Listed,
    Button
  },
  props: {
    to: String
  }
}
</script>

<style scoped>

.container-parent {
  padding-top:0;
  padding-bottom:0;
}
.container-child {
  padding-top:0;
  padding-bottom:0;
}

.date {
  opacity:0.65;
}

h3 {
  margin-bottom:0;
  text-decoration: none;
  text-align: center;
}

p {
  text-align:center;
}

span {
  color: #ffa744;
  color: var(--Orange-cta);
}

.icon {
  max-width: 200px;
}

.card {
  width: 100%;
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
    margin-bottom: 0.6em;
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

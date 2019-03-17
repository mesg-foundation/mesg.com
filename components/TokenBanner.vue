<template>
  <section>
    <div class="container-parent">
      <div class="container-child">
        <div flex row space-between justify-center align-center>
          <div flex column justify-center align-center>
            <Listed class="icon"/>
          </div>
          <div class="text" flex column justify-center align-center>
            <h3>MESG Token now available</h3>
            <p><span>An innovative Algorithmic Token Distribution system.</span></p>
          </div>
          <div class="action" flex column justify-center align-center>
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

section {
  background-color: #100025;
  z-index: 3;
  position:relative;
}

.container-parent {
  padding-top:1em;
  padding-bottom:1em;
  padding-left:1.2em;
  padding-right:1.2em;
}
.container-child {
  width: 100%;
  max-width: 100%;
  padding:0;
}

h3 {
  color: var(--Orange-cta);
  margin-bottom:0;
  text-align: center;
}

p {
  opacity:0.85;
  color:var(--white-content);
  text-align:center;
}

.icon {
  height: 40px;
}

@media only screen and (max-width: 1023px) {
  .container-parent {
    padding-right:2.4em;
    padding-left:2.4em;
  }
  .text {
    display: none;
  }
}
@media only screen and (max-width: 610px) {
  .action {
    padding-top: 1.2em;
  }
  [space-between] { justify-content:center; }
}
@media only screen and (max-width: 414px) {
  .container-parent {
    padding-right:1.8em;
    padding-left:1.8em;
  }
}
</style>

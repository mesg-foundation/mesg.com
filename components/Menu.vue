<template>
  <nav>
    <div class="container" p0 flex row space-between>
      <a href="/">
        <img src="~/assets/mesg-brandmark-white@3x.png" alt="MESG">
      </a>
      <div hide-mobile>
        <a mr1 href="#overview">Overview</a>
        <a mr1 href="https://github.com/mesg-foundation/awesome#readme" target="_blank">Marketplace</a>
        <a mr1 href="https://docs.mesg.com">Documentation</a>
        <Button @click.native="install = true" href="#" small white>Install</Button>
      </div>
    </div>
    <Popup v-model="install">
      <div>
        <p mb1>Open a terminal on your computer and run the following command:</p>
        <code mb1>bash &lt;(curl -s https://mesg.com/install)</code>
        <p>You can also download the <a href="https://github.com/mesg-foundation/core/releases/latest">latest release on Github</a>.</p>
      </div>
    </Popup>
  </nav>
</template>

<script>
import Button from '~/components/Button'
import Popup from '~/components/Popup'
export default {
  components: {
    Button,
    Popup
  },
  data () {
    return {
      install: false
    }
  }
}
</script>


<style scoped>
nav {
  padding: 30px 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

img {
  width: 40px;
  height: 40px;
}

a {
  font-size: 17px;
  font-weight: 500;
  height: 20px;
  text-decoration: none;
  color: #f1f0f8;
  color: var(--pale-grey);
}

p a {
  font-weight: bold;
  color: #251440;
  color: var(--dark-blue-grey);
}

code {
  display: block;
  background: black;
  padding: 10px;
  color: white;
  text-align: center;
}
</style>

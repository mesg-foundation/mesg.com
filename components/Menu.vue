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
        <a mr1 href="https://forum.mesg.com">Get Help</a>
        <Button href="https://docs.mesg.com/guide/start-here/quick-start-guide.html" small white>Get Started</Button>
      </div>
    </div>
  </nav>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: {
    Button
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

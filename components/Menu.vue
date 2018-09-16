<template>
  <nav>
    <div class="container" p0 flex row space-between>
      <a href="/">
        <img src="~/assets/mesg-brandmark-white@3x.png" alt="MESG">
      </a>
      <div hide-mobile>
        <a mr1 href="/overview">Overview</a>
        <a mr1 href="https://github.com/mesg-foundation/awesome#readme" target="_blank">Marketplace</a>
        <a mr1 href="https://docs.mesg.com">Documentation</a>
        <Button href="#" small white>Install</Button>
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
  max-width: 100%;
  width: 40px;
  height: 40px;
}

a {
  font-family: Quicksand;
  font-size: 17px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  height: 20px;
  line-height: normal;
  letter-spacing: normal;
  text-decoration: none;
  color: #f1f0f8;
  color: var(--pale-grey);
}
</style>

<template>
  <nav flex row space-between>
    <a href="/">
      <img src="~/assets/mesg-brandmark-white@3x.png" alt="MESG">
    </a>
    <div>
      <Button mr1 href="/overview">Overview</Button>
      <Button mr1 href="/marketplace">Marketplace</Button>
      <Button mr1 href="https://docs.mesg.com">Documentation</Button>
      <Button href="#" small white>Install</Button>
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

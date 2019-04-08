<template>
  <div>
    <nav hide-responsive flex row space-between align-center>
      <nuxt-link to ="/" >
        <MESGLogoHorizontalPurple class="logo" />
      </nuxt-link>
      <div class="menu" flex row space-between align-center>
        <nuxt-link to="/products">Products</nuxt-link>
        <nuxt-link to="/developers">Developers</nuxt-link>
        <nuxt-link to="/foundation">Foundation</nuxt-link>
        <nuxt-link to="/token">Token</nuxt-link>
        <Button class="enterpise" href="https://docs.mesg.com/guide/start-here/quick-start-guide.html" secondary small>Enterpise</Button>
      </div>
    </nav>
    <MenuResponsive class="responsive"/>
  </div>
</template>

<script>
import Button from '~/components/Button'
import MESGLogoHorizontalPurple from '~/components/MESGLogoHorizontalPurple'
import MenuResponsive from '~/components/MenuResponsive'
export default {
  components: {
    Button,
    MESGLogoHorizontalPurple,
    MenuResponsive
  }
}
</script>


<style lang="scss" scoped>
nav {
  width: 100%;
  height: 80px;
  padding: 0 40px;
  z-index: 1;
  background-color: #fff;

  .logo {
    line-height: 40px;
    width: 153px;
    height: 40px;

    &:hover {
      opacity:0.8;
      transition: calc(var(--animation-speed) * 0.1s) ease;
    }
  }

  .menu {
    padding-right: 1.4em;

    a {
      font-family: 'Open Sans';
      font-size: 15px;
      font-weight: 600;
      line-height: 40px;
      text-decoration: none;
      color: #0e061c;
      padding: 0 20px;
      box-sizing: content-box;
      border-bottom: solid 2px transparent;
      transition: calc(var(--animation-speed) * 0.1s) ease;

      &:hover {
        color: #000;
      }

      &.enterpise {
        font-weight: 700;
        padding: 2px 34px;
        margin-left: 20px;
        color: #fff;
      }
    }
  }
}

.responsive {
  width: 100%;
  display:none;
  position: relative;
}

@media only screen and (max-width: 1023px) {
  .responsive {
    display:flex;
  }
}
</style>

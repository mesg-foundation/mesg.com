<template>
  <div>
    <nav hide-responsive flex row space-between align-center>
        <nuxt-link to ="/" >
          <MESGLogoHorizontalWhite class="logo" />
        </nuxt-link>
        <div class="menu" flex row space-between align-center>
          <nuxt-link to="/marketplace" class="menu-nav">Marketplace</nuxt-link>
          <nuxt-link to="/engine" class="menu-nav">Engine</nuxt-link>
          <nuxt-link to="/features" class="menu-nav">Features</nuxt-link>
          <nuxt-link to="/token" class="menu-nav">Token</nuxt-link>
          <nuxt-link to="/team" class="menu-nav">Team</nuxt-link>
          <nuxt-link to="/roadmap" class="menu-nav" mr1>Roadmap</nuxt-link>
          <Button href="https://docs.mesg.com/guide/start-here/quick-start-guide.html" small outline>Get Started</Button>
        </div>
    </nav>
    <MenuResponsive class="responsive"/>
  </div>
</template>

<script>
import Button from '~/components/Button'
import MESGLogoHorizontalWhite from '~/components/MESGLogoHorizontalWhite'
import MenuResponsive from '~/components/MenuResponsive'
export default {
  components: {
    Button,
    MESGLogoHorizontalWhite,
    MenuResponsive
  }
}
</script>


<style scoped>
nav {
  z-index:1;
  position: absolute;
  width: 100%;
}

.menu {
  padding-right: 1.4em;
}

a {
  font-size: 1em;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  text-decoration: none;
  color: #ffffff;
  color: var(--white-content);
  padding: 1.2em;
  box-sizing: content-box;
  border-bottom: solid 2px transparent;
}
.menu-nav {
  opacity:0.85;
}
a:hover {
  opacity:1;
  color: #ffffff;
  color: var(--white-content);
  transition: calc(var(--animation-speed) * 0.1s) ease;
}

.menu-nav:hover, .menu-nav.nuxt-link-active {
  opacity:1;
  color: #ffffff;
  color: var(--white-content);
  border-bottom-color: #9452ff;
  border-bottom-color: var(--lighter-purple);

}

.logo {
  line-height: 40px;
  width: 153px;
  height: 40px;
}
.logo:hover {
  opacity:0.8;
  transition: calc(var(--animation-speed) * 0.1s) ease;
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

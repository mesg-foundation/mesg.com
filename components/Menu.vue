<template>
  <div>
    <nav hide-responsive flex row space-between align-center>
        <a href ="/" >
          <MESGLogoHorizontalWhite class="logo" />
        </a>
        <div class="menu" flex row space-between align-center>
          <nuxt-link to="/team" class="menu-nav">Team</nuxt-link>
          <nuxt-link to="/roadmap" class="menu-nav">Roadmap</nuxt-link>
          <a href="https://github.com/mesg-foundation/awesome#readme" target="_blank" class="menu-nav">Marketplace</a>
          <a href="https://docs.mesg.com" class="menu-nav">Documentation</a>
          <a href="https://forum.mesg.com" class="menu-nav" mr05>Get Help</a>
          <Button href="https://docs.mesg.com/guide/start-here/quick-start-guide.html" small primary>Get Started</Button>
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
  border-bottom: solid 0.025em #491e8c;
  border-bottom: solid 0.025em var(--purple);
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
  padding: 1.4em;
  box-sizing: content-box;
  border-bottom: solid 2px transparent;
}
.menu-nav {
  opacity:0.65;
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

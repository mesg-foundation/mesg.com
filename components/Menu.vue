<template>
  <div>
    <nav flex row space-between align-center>
      <a href="/">
        <MESGLogoHorizontalWhite class="logo" />
      </a>
      <div class="menu" hide-responsive flex row space-between align-center>
        <nuxt-link to="/team" class="menu-nav">Team</nuxt-link>
        <nuxt-link to="/roadmap" class="menu-nav">Roadmap</nuxt-link>
        <a href="https://github.com/mesg-foundation/awesome#readme" target="_blank" class="menu-nav">Marketplace</a>
        <a href="https://docs.mesg.com" class="menu-nav">Documentation</a>
        <a href="https://forum.mesg.com" class="menu-nav" mr05>Get Help</a>
        <Button href="https://docs.mesg.com/guide/start-here/quick-start-guide.html" small primary>Get Started</Button>
      </div>
    </nav>
  </div>
</template>

<script>
import Button from '~/components/Button'
import MESGLogoHorizontalWhite from '~/components/MESGLogoHorizontalWhite'
export default {
  components: {
    Button,
    MESGLogoHorizontalWhite
  }
}
</script>


<style scoped>
nav {
  position: absolute;
  width: 100%;
  border-bottom: solid 0.025em #491e8c;
  border-bottom: solid 0.025em var(--purple);
}
.menu {
  height: 40px;
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
  border-bottom: solid 1px transparent;
}

a:hover {
  color: #9452ff;
  color: var(--lighter-purple);
  transition: 0.2s ease-in-out;
}

.menu-nav:hover, .menu-nav.nuxt-link-active {
  border-bottom-color: var(--lighter-purple);
}

.logo {
  width: 153px;
  height: 40px;
}

@media only screen and (max-width: 1023px) {
  .menu {
    display:none;
  }
}


</style>

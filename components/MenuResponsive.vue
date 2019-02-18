<template>
  <div class="menu-responsive" :class="{ sticky }" flex column justify-center @scroll="updateSticky">
    <div class="nav-burger" flex row space-between justify-center align-center>
      <a href ="/">
        <MESGLogoHorizontalWhite class="logo" />
      </a>
      <nav class="burger">
        <a @click="open = !open" :class="{ animated: open }">
          <span class="line line-1">
          </span>
          <span class="line line-2">
          </span>
          <span class="line line-3">
          </span>
        </a>
      </nav>
    </div>
    <transition name="appear">
      <div v-if="open" class="container-child" flex column justify-center align-center>
        <nav @click="open = !open" class="nav" flex column justify-center align-center>
          <nuxt-link to="/marketplace" class="menu-nav" flex column justify-center align-center>Marketplace</nuxt-link>
          <nuxt-link to="/engine" class="menu-nav" flex column justify-center align-center>Engine</nuxt-link>
          <nuxt-link to="/features" class="menu-nav" flex column justify-center align-center>Features</nuxt-link>
          <nuxt-link to="/token" class="menu-nav" flex column justify-center align-center>Token</nuxt-link>
          <nuxt-link to="/team" class="menu-nav" flex column justify-center align-center>Team</nuxt-link>
          <nuxt-link to="/roadmap" class="menu-nav" mb2 flex column justify-center align-center>Roadmap</nuxt-link>
          <Button href="https://docs.mesg.com/guide/start-here/quick-start-guide.html" class="button" small outline flex column justify-center align-center>Get Started</Button>
        </nav>
    </div>
  </transition>
  </div>
</template>

<script>
import Button from '~/components/Button'
import MESGLogoHorizontalWhite from '~/components/MESGLogoHorizontalWhite'
export default {
  components: {
    Button,
    MESGLogoHorizontalWhite
  },
  data () {
    return {
      open: false,
      sticky: false
    }
  },
  methods: {
    updateSticky (e) {
      this.sticky = window.scrollY > 145
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateSticky);
  },
  destroyed () {
    window.removeEventListener('scroll', this.updateSticky);
  }
}

</script>

<style scoped>

.menu-responsive {
  z-index: 1;
  position: absolute;
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

.nav-burger {
  z-index: 2;
  background-color: #491e8c;
  background-color: var(--purple);
  padding-left:2.4em;
  padding-right:2.4em;
  padding-top:1.2em;
  padding-bottom:1.2em;
}
.line {
  right:14px;
  display:block;
  width: 30px;
  height: 4px;
  border-radius:3px;
  background-color: #ffffff;
  background-color: var(--white-content);
  transition: all calc(var(--animation-speed) * 0.2s) ease-in;
}
.burger {
  line-height: 30px;
  height: 30px;
}

.line-1 {
  margin-bottom:9px;
}
.line-2 {
  margin-bottom: 9px;
}
.line-3 {
  margin-bottom:0;
}

.animated .line-1 {
  width: 36px;
  transform: translateX(13px) rotate(45deg) translateY(18px);
}
.animated .line-2 {
  opacity:0;
}
.animated .line-3 {
  width: 36px;
  transform: translateX(13px) rotate(-45deg) translateY(-18px);
}

a {
  font-size: 1em;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  text-decoration: none;
  color: #ffffff;
  color: var(--white-content);
  box-sizing: content-box;
  border-bottom: solid 2px transparent;
  cursor: pointer;
}

.button {
  width: 80%;
  padding: 0.1em;
}

.container-child {
  width: 90%;
  padding-top:0;
  background-color: #491e8c;
  background-color: var(--purple);
  box-shadow: 0 0 40px 4px rgba(0, 0, 0, 0.2);
}
.nav {
  width: 100%;
 }
.menu-nav {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-top:1.2em;
  padding-bottom:1.2em;
  padding-left:0;
  padding-right:0;
  border-bottom: 1px solid #3C1972;
  opacity:0.85;
}
.menu-nav:hover, .menu-nav.nuxt-link-active {
  opacity:1;
  border-bottom-color: #9452ff;
  border-bottom-color: var(--lighter-purple);
}

@media only screen and (max-width: 1023px) {
  .appear-enter-active {
    animation: appear-in calc(var(--animation-speed) * 0.4s) ease-out;
  }
  .appear-leave-active {
    animation: appear-in calc(var(--animation-speed) * 0.4s) reverse ease-in;
  }
  @keyframes appear-in {
    0% {
      transform: translateY(-1024px);
    }
    100% {
      transform: translateY(0);
    }
  }
  .nav-burger {
    border-bottom: solid 1px #251440;
  }
}
@media only screen and (max-width: 768px) {
  @keyframes appear-in {
    0% {
      transform: translateY(-944px);
    }
    100% {
      transform: translateY(0);
    }
  }
}
@media only screen and (max-width: 414px) {
  @keyframes appear-in {
    0% {
      transform: translateY(-742px);
    }
    100% {
      transform: translateY(0);
    }
  }
  .nav-burger {
    padding-left:1.8em;
    padding-right:1.8em;
    padding-top:0.6em;
    padding-bottom:0.6em;
  }
  .logo {
    width:114px;
  }
  .menu-responsive.sticky {
    position: fixed;
    top: 0;
  }
}

</style>

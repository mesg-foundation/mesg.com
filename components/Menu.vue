<template>
  <nav class="container" :class="{ 'open': menuShow }">
    <nuxt-link to="/" class="title">
      <img src="~/assets/logo.svg" alt="">
    </nuxt-link>
    <a
      href="#"
      class="toggle"
      @click="menuShow = !menuShow"
      v-html="menu">
    </a>
    <div class="nav-items">
      <a
        href="#"
        class="toggle"
        @click="menuShow = !menuShow">
        &times;
      </a>
      <nuxt-link
        class="mobile-only"
        @click.native="menuShow = false"
        to="/">
        Home
      </nuxt-link>
      <template v-for="menu in menus" >
        <nuxt-link
          v-if="menu.internal"
          @click.native="menuShow = false"
          :key="menu.href"
          :to="menu.href">
          {{ menu.title }}
        </nuxt-link>
        <a
          v-else
          @click.native="menuShow = false"
          :key="menu.href"
          :href="menu.href">
          {{ menu.title }}
        </a>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    menu: {
      type: String,
      // default: '&#x1f354'
      default: '&#9776'
    }
  },
  data () {
    return {
      menuShow: false
    }
  },
  computed: {
    menus () {
      return [
        { title: "Docs", href: "https://docs.mesg.com" },
        { title: "Marketplace", href: "/marketplace",  internal: true },
        // { title: "Mission", href: "/mission",  internal: true },
        { title: "Jobs", href: "https://github.com/mesg-foundation/core/wiki/Jobs" },
        { title: "Discord", href: "https://discord.gg/SaZ5HcE" },
        { title: "Blog", href: "https://medium.com/mesg" }
      ]
    }
  }
}
</script>

<style scoped>
nav {
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img {
  height: 2.5em;
  vertical-align: middle;
}
.toggle {
  display: none;
}
.toggle:hover, .toggle:active { color: white; }
.nav-items {
  display: flex;
  align-items: center;
}
.nav-items a:last-child{
  margin-right: 0;
}
a {
  text-decoration: none;
  margin-right: 32px;
  padding: 6px 10px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
}
a:hover { color: #FFCB1B }
.title {
  font-family: 'Jura', sans-serif;
  font-size: 23px;
  font-weight: 600px;
}
.title small {
  text-transform: none;
}
.mobile-only {
  display: none;
}
@media only screen and (max-width: 840px) {
  .title {
    margin: 0;
  }
  img {
    height: 4em;
    margin: 1.5em;
  }
  nav {
    justify-content: center;
    flex-direction: column-reverse;
  }
  .nav-items {
    flex-wrap: wrap;
    justify-content: center;
  }

  .mobile-only {
    display: initial;
  }

  .toggle {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.75em;
    padding: 0;
    color: white;
    width: 60px;
    margin: 0;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-weight: lighter;
  }
  .nav-items {
    padding-top: 3em;
    position: fixed;
    background: black;
    height: 100%;
    top: 0;
    left: 0;
    justify-content: left;
    flex-direction: column;
    width: 80%;
    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
    transition: all 300ms;
    transform: translateX(-100%);
    border-right: solid 1px rgba(255,255,255,.15);
  }

  .open .nav-items {
    transform: translateX(0);
  }

  .nav-items a:not(.toggle) {
    width: 100%;
    padding: 1em 2em;
    margin: 0;
  }
}
</style>

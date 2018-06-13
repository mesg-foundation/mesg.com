<template>
  <nav class="container">
    <nuxt-link to="/" class="title">
      <img src="~/assets/logo.svg" alt="">
    </nuxt-link>
    <div class="nav-items">
      <template v-for="menu in menus" >
        <nuxt-link
          v-if="menu.internal"
          :key="menu.href"
          :to="menu.href">
          {{ menu.title }}
        </nuxt-link>
        <a
          v-else
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
  computed: {
    menus () {
      return [
        { title: "Docs", href: "https://docs.mesg.com" },
        { title: "Marketplace", href: "/marketplace",  internal: true },
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
.title {
  font-family: 'Jura', sans-serif;
  font-size: 23px;
  font-weight: 600px;
}
.title small {
  text-transform: none;
}
@media only screen and (max-width: 480px) {
  img {
    height: 3em;
    margin: 1.5em;
  }
  nav {
    justify-content: center;
  }
  .nav-items {
    display: none;
  }
  a {
    margin: 0;
  }
}
</style>

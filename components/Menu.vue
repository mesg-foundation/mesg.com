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
@media only screen and (max-width: 700px) {
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
}
@media only screen and (max-width: 580px) {
  .nav-items a {
    display: none;
  }
}
</style>

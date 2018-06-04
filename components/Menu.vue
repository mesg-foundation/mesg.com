<template>
  <nav class="container">
    <a href="/" class="title">
      <img src="~/assets/logo.svg" alt="">
    </a>
    <div class="nav-items">
      <a
        v-for="menu in menus" :key="menu.href"
        :href="menu.href" target="blank">
        {{ menu.title }}
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    menus () {
      return [
        { title: "Docs", href: "https://docs.mesg.tech" },
        { title: "Discord", href: "https://discord.gg/5tVTHJC" },
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

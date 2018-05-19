<template>
  <nav class="container">
    <a href="/" class="title">MESG <small>- Connect technologies</small></a>
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
        { title: "Forum", href: "https://forum.mesg.tech" }
      ]
    }
  }
}
</script>

<style scoped>
nav {
  margin-top: 2em;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: rgba(255, 255, 255, 0.75);
}
.title {
  font-family: 'Jura', sans-serif;
  font-size: 23px;
  font-weight: 600px;
}
.title small {
  text-transform: none;
}
</style>

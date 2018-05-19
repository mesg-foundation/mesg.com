<template>
  <div>
    <Menu></Menu>
    <nuxt/>
  </div>
</template>

<script>
import Menu from '~/components/Menu'
export default {
  components: {
    Menu
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: rgba(20, 9, 48, 1);
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-family: 'Jura', sans-serif;
  font-weight: 600;
  font-size: 35px;
  margin-bottom: 40px;
}

.container {
  max-width: 1200px;
  margin: auto;
}
</style>

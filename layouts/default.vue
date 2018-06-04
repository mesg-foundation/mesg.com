<template>
  <div>
    <Menu class="dark"></Menu>
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

h2 {
  font-family: 'Jura', sans-serif;
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 20px;
}

p {
  line-height: 1.75;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.button {
  font-family: 'Jura', sans-serif;
  padding: 15px 20px;
  border-radius: 3px;
  text-transform: uppercase;
  color: black;
  background: white;
  cursor: pointer;
  transition: all 300ms;
  letter-spacing: 1.5px;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 3px 7px rgba(50,50,93,.1), 0 1px 3px rgba(0,0,0,.07);
}
.button:hover {
  transform: translateY(-2px);
  background: #fafafa;
  box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
}

.button.button--success {
  font-weight: bold;
  background: rgba(12, 168, 108, 1);
  color: white;
}
.button.button--success:hover {
  background: rgb(29, 197, 133);
}

.shadow {
  box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
}

.shadow--soft {
  box-shadow: 0 3px 7px rgba(50,50,93,.1), 0 1px 3px rgba(0,0,0,.07);
}

.bordered {
  border: solid 1px #f2f2f2;
}

.dark h1 { color: white; }
.dark p { color: rgba(255, 255, 255, 0.8); }
.dark a { color: rgba(255, 255, 255, 0.75); }

.light { background: white; }
.light p { color: #666; }

.gray { background: #f2f2f2 }
.gray p { color: #666; }

h4 {
  margin-bottom: 1em;
  margin-top: 1em;
}

ul {
  line-height: 1.5em;
}
</style>

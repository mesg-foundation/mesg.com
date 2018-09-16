<template>
  <div>
    <style>
    :root {
      --dark-blue-grey: #251440;
      --purple: #491e8c;
      --lighter-purple: #9452ff;
      --light-blue-grey: #cac5e4;
      --pale-grey: #f1f0f8;
      --blanc-background: #ffffff;
    }
    </style>
    <Menu/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Menu from '~/components/Menu'
import Footer from '~/components/Footer'
export default {
  components: {
    Menu,
    Footer
  }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

[flex] { display: flex; }
[row] { flex-direction: row; flex-wrap: wrap; }
[column] { flex-direction: column; }
[justify-center] { justify-content: center; }
[align-center] { align-items: center; }
[space-between] { justify-content: space-between; }
[space-around] { justify-content: space-around; }

[half] { width: 600px; }
[p0] { padding: 0!important; }
[mt0] { margin-top: 0px!important; }
[mb0] { margin-bottom: 0px!important; }
[mb1] { margin-bottom: 40px!important; }
[mr1] { margin-right: 40px!important; }

.container {
  width: 100%;
  max-width: 1440px;
  padding: 80px;
  margin: auto;
}

@media only screen and (max-width: 1440px) {
  .container {
    width: 100%;
    padding: 40px;
  }
  [half] { width: calc(50% - 40px); }
}

@media only screen and (max-width: 768px) {
  .container {
    width: 100%;
    padding: 40px;
  }
  [half] { width: 100%; }
  [mb1] { margin-bottom: 20px!important; }
  [mr1] { margin-right: 20px!important; }
  [row-reverse-mobile] { flex-direction: row-reverse; }
  [column-reverse-mobile] { flex-direction: column-reverse; }
  [hide-mobile] { display: none; }
  [column] > img { margin-top: 40px; }
}

/* Text styles */

h1, h2, h3, h4 {
  font-family: Quicksand;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
}

h1 {
  font-size: 36px;
  color: #f8f8f8;
}

h2 {
  font-family: Quicksand;
  font-size: 30px;
  font-weight: 500;
  color: #491e8c;
  color: var(--purple);
}

h3 {
  font-family: Quicksand;
  font-size: 24px;
  font-weight: 500;
  color: #491e8c;
  color: var(--purple);
}

h4 {
  font-family: Quicksand;
  font-size: 18px;
  color: #491e8c;
  color: var(--purple);
}
</style>

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
/* Reset */
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
</style>

<style>
/* Structure */
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
</style>

<style>
/* Text styles */
h1, h2, h3, h4, p, a, button, label, input, textarea {
  font-family: Quicksand;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  color: #f8f8f8;
}

h2 {
  font-size: 32px;
  font-weight: bold;
  color: #491e8c;
  color: var(--purple);
}

h3 {
  font-size: 24px;
  font-weight: bold;
  color: #251440;
  color: var(--dark-blue-grey);
}

p {
  font-size: 17px;
  color: #251440;
  color: var(--dark-blue-grey);
  text-align: justify;
}
</style>

<style>
/* Design */
.dark {
  background-image: linear-gradient(30deg, #251440, #491e8c);
  background-image: linear-gradient(30deg, var(--dark-blue-grey), var(--purple));
  z-index: 10;
}

.dark h2,
.dark p {
  color: #f1f0f8;
  color: var(--pale-grey);
}

.white {
  background-color: #f1f0f8;
  background-color: var(--pale-grey);
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.25);
  z-index: 1;
}

img {
  width: 100%;
  max-width: 100%;
  object-fit: contain;
}
</style>

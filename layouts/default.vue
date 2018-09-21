<template>
  <div>
    <style>
    :root {
      --dark-blue-grey: #251440;
      --purple: #491e8c;
      --lighter-purple: #9452ff;
      --green-cta: #30b24b;
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
[align-left] { align-items: left; }
[space-between] { justify-content: space-between; }
[space-around] { justify-content: space-around; }

[half] { width: 600px; }
[p0] { padding: 0!important; }
[mt0] { margin-top: 0px!important; }
[mb0] { margin-bottom: 0px!important; }
[mb1] { margin-bottom: 40px!important; }
[mb2] { margin-bottom: 20px!important; }
[mr1] { margin-right: 40px!important; }

.container-parent {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  margin: auto;
}
.container-child {
  width: 100%;
  max-width: 1440px;
  padding: 80px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin: auto;
}
.container-child-title {
  width: 100%;
  padding: 40px;
  padding-bottom: 40px;
}


@media only screen and (max-width: 1440px) {
  .container-parent {
    width: 100%;
    padding: 40px;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .container-child {
    width: 100%;
    padding: 40px;
  }
  [half] { width: calc(50% - 40px); }
}

@media only screen and (max-width: 768px) {
  .container-parent {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .container-child {
    width: 100%;
    padding: 40px;
  }
  [half] { width: 100%; }
  [mb1] { margin-bottom: 20px!important; }
  [mr1] { margin-right: 20px!important; }
  [row-reverse-responsive] { flex-direction: row-reverse; }
  [column-reverse-responsive] { flex-direction: column-reverse; }
  [hide-responsive] { display: none; }
  [column] > svg { width: 80%; max-width: 80%; object-fit: contain; margin-top: 80px;}
}
@media only screen and (max-width: 375px) {
  .container-parent {
    width: 100%;
    padding: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .container-child {
    width: 100%;
    padding: 40px;
  }
  .flex-item {
    display: column;
    justify-content: space-around;
  }
  [column] > svg { width: 100%; max-width: 100%; object-fit: contain; margin-top: 40px;}
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
  font-size: 38px;
  font-weight: bold;
  color: #f1f0f8;
  margin-bottom: 40px;
}

h2 {
  font-size: 32px;
  font-weight: bold;
  color: #491e8c;
  color: var(--purple);
  margin-bottom: 40px;
}

h3 {
  font-size: 26px;
  font-weight: bold;
  color: #251440;
  color: var(--dark-blue-grey);
  margin-bottom: 40px;
}

p {
  font-size: 17px;
  font-weight: normal;
  color: #251440;
  color: var(--dark-blue-grey);
}
</style>

<style>
/* Design */
.dark {
  background-image: linear-gradient(135deg, #251440 35%, #491e8c 100%);
  background-image: linear-gradient(135deg, var(--dark-blue-grey) 35%, var(--purple) 100%);
}

.dark h2,
.dark h3,
.dark p {
  color: #f1f0f8;
  color: var(--pale-grey);
}

.white {
  background-color: #f1f0f8;
  background-color: var(--pale-grey);
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.25);
  position: relative;
}

svg {
  width: 100%;
  max-width: 100%;
  margin-top: 80;
  object-fit: contain;
}
</style>

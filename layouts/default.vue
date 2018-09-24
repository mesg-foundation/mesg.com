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
  font-size: 1em;
  word-spacing: 0.1em;
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
  font-size: 2.4em;
  font-weight: bold;
  color: #f1f0f8;
  margin-bottom: 1.2em;
}

h2 {
  font-size: 2em;
  font-weight: bold;
  color: #491e8c;
  color: var(--purple);
  margin-bottom: 1.2em;
}

h3 {
  font-size: 1.6em;
  font-weight: bold;
  color: #251440;
  color: var(--dark-blue-grey);
  margin-bottom: 1.2em;
}

p {
  font-size: 1em;
  font-weight: normal;
  color: #251440;
  color: var(--dark-blue-grey);
}
@media only screen and (max-width: 768px) {
  h1 { font-size: 2.2em;}
  h2 { font-size: 1.8em;}
  h3 {font-size: 1.4em;}
  p {font-size: 1em;}
}
@media only screen and (max-width: 414px) {
  h1 { font-size: 2em;}
  h2 { font-size: 1.6em;}
  h3 {font-size: 1.2em;}
  p {font-size: 1em;}
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
  box-shadow: 0 0 1.2em 1.2em rgba(0, 0, 0, 0.25);
  position: relative;
}

svg {
  width: 100%;
  max-width: 100%;
  object-fit: contain;
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
[mt0] { margin-top: 0!important; }
[mb0] { margin-bottom: 0!important; }
[mb1] { margin-bottom: 1.2em!important; }
[mb2] { margin-bottom: 2.4em!important; }
[mr2] { margin-right: 2.4em!important; }

.container-parent {
  width: 100%;
  padding-top: 2.4em;
  padding-bottom: 2.4em;
  margin: auto;
}
.container-child {
  width: 100%;
  max-width: 1440px;
  padding: 4.8em;
  padding-top: 2.4em;
  padding-bottom: 2.4em;
  margin: auto;
}
.container-child-title {
  width: 100%;
  padding: 2.4em;
  padding-bottom: 2.4em;
}


@media only screen and (max-width: 1440px) {
  .container-parent {
    width: 100%;
    padding: 2.4em;
    padding-top: 4.8em;
    padding-bottom: 4.8em;
  }
  .container-child {
    width: 100%;
    padding: 2.4em;
  }
  [half] { width: calc(50% - 2.4em); }
  [third] { width: calc(33% - 2.4em); }
}

@media only screen and (max-width: 768px) {
  .container-parent {
    width: 100%;
    padding-top: 2.4em;
    padding-bottom: 2.4em;
  }
  .container-child {
    width: 100%;
    padding: 2.4em;
  }
  [half] { width: 100%; }
  [mb1] { margin-bottom: 0.6em!important; }
  [mr1] { margin-right: 0.6em!important; }
  [hide-responsive] { display: none; }
  [row-reverse-responsive] { flex-direction: row-reverse; }
  [column-reverse-responsive] { flex-direction: column-reverse; }
  [column] > svg { width: 80%; max-width: 80%; object-fit: contain; margin-top: 4.8em;}
}
@media only screen and (max-width: 414px) {
  .container-parent {
    width: 100%;
    padding: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  .container-child {
    width: 100%;
    padding: 1.8em;
  }
  [mb2] { margin-bottom: 1.2em!important; }
  [column] > svg { width: 100%; max-width: 100%; object-fit: contain; margin-top: 2.4em;}
  [hide-mobile] { display: none; }
}
</style>

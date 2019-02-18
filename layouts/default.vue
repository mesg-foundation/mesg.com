<template>
  <div>
    <style>
    :root {
      --dark-purple: #251440;
      --purple: #491e8c;
      --lighter-purple: #9452ff;
      --lighter-purple-hover: #854AE5;
      --Orange-cta: #ffa744;
      --Orange-cta-hover: #E5963D;
      --dark-grey: #57577e;
      --lighter-grey: #d6d0e7;
      --pale-white: #fafafe;
      --white-content: #ffffff;
      --animation-speed: 1;
    }
    </style>
    <Menu class="menu-bar"/>
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
    Footer,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Quicksand');

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
h1, h2, h3, h4, a, button, label, input, textarea {
  font-family: 'Quicksand', sans-serif;
  font-style:normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight:normal;
}

.link {
  font-weight: bold;
  color: #9452ff;
  color: var(--lighter-purple);
  text-decoration: none;
}
.link:hover {
  color: #5D28B2;
  color: var(--lighter-purple-hover);
  transition: calc(var(--animation-speed) * 0.1s) ease;
}

h1 {
  font-size: 2.4em;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.8em;
}

h2 {
  font-size: 2em;
  font-weight: bold;
  color: #491e8c;
  color: var(--purple);
  margin-bottom: 0.8em;
}

h3 {
  font-size: 1.6em;
  font-weight: bold;
  color: #491e8c;
  color: var(--purple);
  margin-bottom: 0.8em;
}
h4 {
  font-size: 1em;
  font-weight: bold;
  color: #491e8c;
  color: var(--purple);
}
p {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
  font-size: 1em;
  color: #57577e;
  color: var(--dark-grey);
}

ul{
  padding-left:1.2em;
}
li {
  position: relative;
  list-style: none;
}
li::before {
  content: "";
  display: block;
  position: absolute;
  top: .5em;
  left: -1.2em;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: var(--lighter-purple);
}

.caption {
  opacity:0.65;
  padding-bottom:1.2em;
  text-align:center;
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
  background-image: linear-gradient(135deg, #251440 0%, #491e8c 100%);
  background-image: linear-gradient(135deg, var(--dark-purple) 0%, var(--purple) 100%);
}

.dark h2,
.dark h3 {
  color: #ffffffff;
  color: var(--white-content);
}
.dark p {
  opacity: 0.85;
  color: #ffffffff;
  color: var(--white-content);
}

.purple {
  background-color: #9452ff;
  background-color: var(--lighter-purple);
}

.white {
  background-color: #fafafe;
  background-color: var(--pale-white);
}

svg {
  width: 85%;
  max-width: 85%;
  object-fit: contain;
}

.separator-orange {
  width: 60px;
  height: 6px;
  border-radius: 3px;
  background-color:#ffa744;
  background-color: var(--Orange-cta);
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
[align-right] { align-items: right; }
[space-between] { justify-content: space-between; }
[space-around] { justify-content: space-around; }

[half] { width: 600px; }
[third] { width: 400px; }
[thirdtwo] { width: 800px; }
[p0] { padding: 0!important; }
[mt0] { margin-top: 0!important; }
[mt05] { margin-top: 0.6em!important; }
[mt1] { margin-top: 1.2em!important; }
[mt2] { margin-top: 2.4em!important; }
[mb0] { margin-bottom: 0!important; }
[mb05] { margin-bottom: 0.6em!important; }
[mb1] { margin-bottom: 1.2em!important; }
[mb2] { margin-bottom: 2.4em!important; }
[mb3] { margin-bottom: 4.8em!important; }
[mr05] { margin-right: 0.6em!important; }
[mr1] { margin-right: 1.2em!important; }
[mr2] { margin-right: 2.4em!important; }
[ml05] { margin-left: 0.6em!important; }
[ml1] { margin-left: 1.2em!important; }
[ml2] { margin-left: 2.4em!important; }


.container-parent {
  width: 100%;
  padding: 2.4em;
  margin: auto;
}
.container-child {
  width: 100%;
  max-width: 1440px;
  padding: 2.4em;
  margin: auto;
}
.container-child-title {
  width: 100%;
  padding: 2.4em;
}


@media only screen and (max-width: 1440px) {
  .container-parent {
    width: 100%;
    padding: 2.4em;
  }
  .container-child {
    width: 100%;
    padding: 2.4em;
  }
  [half] { width: calc(50% - 2.4em); }
  [third] { width: calc(33% - 2.4em); }
  [thirdtwo] { width: calc(66% - 2.4em) }
}

@media only screen and (max-width: 1024px) {
  [third] { width: calc(50% - 2.4em) }
  [thirdtwo] { width: calc(50% - 2.4em) }
}
@media only screen and (max-width: 1023px) {
  [hide-responsive] { display: none; }
  }
@media only screen and (max-width: 768px) {
  .container-parent {
    width: 100%;
    padding: 2.4em;
  }
  .container-child {
    width: 100%;
    padding: 2.4em;
  }
  [half] { width: 100%; }
  [third] { width: 100%; }
  [thirdtwo] { width: 100%; }
  [mb1] { margin-bottom: 0.6em!important; }
  [mr1] { margin-right: 0.6em!important; }
  [mr2] { margin-right: 1.2em!important; }
  [row-reverse-responsive] { flex-direction: row-reverse; }
  [column-reverse-responsive] { flex-direction: column-reverse; }
  [column] > svg { width: 75%; max-width: 75%; object-fit: contain; margin-top: 4.8em;}
}
@media only screen and (max-width: 414px) {
  .container-parent {
    width: 100%;
    padding: 0;
  }
  .container-child {
    width: 100%;
    padding: 1.8em;
  }
  .container-child-title {
    width: 100%;
    padding: 1.8em;
    padding-bottom: 0;
  }
  h1 {
    margin-bottom:0.6em;
  }
  [mb2] { margin-bottom: 1.2em!important; }
  [column] > svg { width: 100%; max-width: 100%; object-fit: contain; margin-top: 2.4em;}
  [hide-mobile] { display: none; }
}
</style>

<style scoped>
/*.token-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
}
.menu-bar {
  margin-top: 57px;
}
@media only screen and (max-width: 590px) {
  .menu-bar {
    margin-top: 47px;
  }
}
@media only screen and (max-width: 480px) {
  .menu-bar {
    margin-top: 58px;
  }
}*/
</style>
